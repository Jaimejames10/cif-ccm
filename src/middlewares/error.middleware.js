import { ZodError } from "zod";
import { Prisma } from "../../generated/prisma/index.js";

/**
 * Clase personalizada para manejar errores operacionales de la aplicación.
 */
export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Middleware global de manejo de errores para Express.
 */
export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // En entorno de desarrollo imprimimos el error completo
  if (process.env.NODE_ENV === "development") {
    console.error("================ ERROR ================");
    console.error(err);
    console.error("=======================================");
  }

  // 1. Manejo de Errores de Validación (Zod)
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "fail",
      message: "Error de validación de datos",
      errors: err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  // 2. Manejo de Errores de Prisma (Base de datos)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": {
        // Violación de restricción única
        const fields = err.meta?.target || "campo";
        return res.status(400).json({
          status: "fail",
          message: `El registro ya existe. Violación de restricción única en: ${fields}`,
          code: err.code,
        });
      }
      case "P2025": // Registro no encontrado
        return res.status(404).json({
          status: "fail",
          message: "El registro solicitado no existe o no fue encontrado.",
          code: err.code,
        });
      case "P2003": // Fallo en restricción de llave foránea
        return res.status(400).json({
          status: "fail",
          message: "No se puede completar la operación debido a una relación no válida (llave foránea incorrecta).",
          code: err.code,
        });
      default:
        return res.status(400).json({
          status: "fail",
          message: `Error en la base de datos: ${err.message}`,
          code: err.code,
        });
    }
  }

  // 3. Manejo de errores operacionales conocidos de la app
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // 4. Errores desconocidos o de sistema (ej. caídas de conexión, bugs imprevistos)
  return res.status(err.statusCode).json({
    status: "error",
    message: process.env.NODE_ENV === "development" ? err.message : "Algo salió mal en el servidor de forma interna.",
  });
};
