import { z } from "zod";

/**
 * Esquema de validación para la creación de una oficina.
 */
export const createOfficeSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es obligatorio",
      invalid_type_error: "El nombre debe ser un texto",
    })
    .trim()
    .min(2, "El nombre de la oficina no puede estar vacío"),

  code: z
    .string({
      required_error: "El código es obligatorio",
      invalid_type_error: "El código debe ser un texto",
    })
    .trim()
    .min(1, "El código de la oficina no puede estar vacío"),

  alias: z
    .string({
      required_error: "El alias es obligatorio",
      invalid_type_error: "El alias debe ser un texto",
    })
    .trim()
    .min(1, "El alias de la oficina no puede estar vacío")
    .max(3, "El alias debe tener un máximo de 3 caracteres"),

  description: z
    .string({
      invalid_type_error: "La descripción debe ser un texto",
    })
    .trim()
    .nullable()
    .optional(),
});

/**
 * Esquema de validación para la actualización de una oficina.
 * Todos los campos son opcionales utilizando .partial().
 */
export const updateOfficeSchema = createOfficeSchema.partial();

/**
 * Esquema de validación para la creación masiva de oficinas.
 * Espera un arreglo de oficinas válidas.
 */
export const createManyOfficeSchema = z.array(createOfficeSchema, {
  required_error: "Se requiere un arreglo de oficinas",
  invalid_type_error: "El cuerpo de la petición debe ser un arreglo de Offices",
}).min(1, "Debe enviar al menos una oficina para crear");
