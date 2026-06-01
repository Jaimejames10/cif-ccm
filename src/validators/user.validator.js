import { z } from "zod";

/**
 * Esquema de validación para la creación de un usuario.
 */
export const createUserSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es obligatorio",
      invalid_type_error: "El nombre debe ser un texto",
    })
    .trim()
    .min(1, "El nombre no puede estar vacío"),
  
  lastName: z
    .string({
      required_error: "El apellido es obligatorio",
      invalid_type_error: "El apellido debe ser un texto",
    })
    .trim()
    .min(1, "El apellido no puede estar vacío"),
  
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
      invalid_type_error: "El correo electrónico debe ser un texto",
    })
    .trim()
    .email("El formato del correo electrónico no es válido"),
  
  phone: z
    .string({
      required_error: "El teléfono es obligatorio",
      invalid_type_error: "El teléfono debe ser un texto",
    })
    .trim()
    .min(1, "El teléfono no puede estar vacío"),
  
  ci: z
    .string({
      required_error: "El documento de identidad (CI) es obligatorio",
      invalid_type_error: "El CI debe ser un texto",
    })
    .trim()
    .min(1, "El CI no puede estar vacío"),
  
  userNetbank: z
    .string({
      required_error: "El usuario Netbank es obligatorio",
      invalid_type_error: "El usuario Netbank debe ser un texto",
    })
    .trim()
    .min(1, "El usuario Netbank no puede estar vacío"),
  
  signature: z
    .string({
      required_error: "La firma es obligatoria",
      invalid_type_error: "La firma debe ser un texto",
    })
    .trim()
    .min(1, "La firma no puede estar vacía"),
  
  stamp: z
    .string({
      required_error: "El sello es obligatorio",
      invalid_type_error: "El sello debe ser un texto",
    })
    .trim()
    .min(1, "El sello no puede estar vacío"),
  
  status: z
    .string({
      required_error: "El estado es obligatorio",
      invalid_type_error: "El estado debe ser un texto",
    })
    .trim()
    .min(1, "El estado no puede estar vacío"),
  
  officeId: z
    .number({
      required_error: "El ID de la oficina es obligatorio",
      invalid_type_error: "El ID de la oficina debe ser un número entero",
    })
    .int("El ID de la oficina debe ser un número entero")
    .positive("El ID de la oficina debe ser un número positivo"),
  
  profileId: z
    .number({
      required_error: "El ID del perfil es obligatorio",
      invalid_type_error: "El ID del perfil debe ser un número entero",
    })
    .int("El ID del perfil debe ser un número entero")
    .positive("El ID del perfil debe ser un número positivo"),
  
  roleId: z
    .number({
      required_error: "El ID del rol es obligatorio",
      invalid_type_error: "El ID del rol debe ser un número entero",
    })
    .int("El ID del rol debe ser un número entero")
    .positive("El ID del rol debe ser un número positivo"),
  
  areaId: z
    .number({
      required_error: "El ID del área es obligatorio",
      invalid_type_error: "El ID del área debe ser un número entero",
    })
    .int("El ID del área debe ser un número entero")
    .positive("El ID del área debe ser un número positivo"),
});

/**
 * Esquema de validación para la actualización de un usuario.
 * Todos los campos son opcionales utilizando .partial().
 */
export const updateUserSchema = createUserSchema.partial();
