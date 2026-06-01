
/**
 * Middleware de validación con Zod para Express.
 * Soporta validación de req.body, req.query, y req.params de forma individual o combinada.
 *
 * @param {import("zod").ZodSchema | { body?: import("zod").ZodSchema, query?: import("zod").ZodSchema, params?: import("zod").ZodSchema }} schema
 */
export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      if (schema && (schema.body || schema.query || schema.params)) {
        if (schema.body) {
          req.body = await schema.body.parseAsync(req.body);
        }
        if (schema.query) {
          req.query = await schema.query.parseAsync(req.query);
        }
        if (schema.params) {
          req.params = await schema.params.parseAsync(req.params);
        }
      } else if (schema) {
        // Por defecto, si se pasa un esquema directo, se asume que valida req.body
        req.body = await schema.parseAsync(req.body);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
