import prisma from "../config/database.js";

class UserRepository {
  /**
   * Obtener todos los usuarios con sus relaciones (opcional)
   */
  async findAll(filters = {}) {
    return await prisma.user.findMany({
      where: filters,
      include: {
        office: true,
        profile: true,
        role: true,
        area: true,
      },
    });
  }

  /**
   * Obtener un usuario por su ID
   */
  async findById(id) {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: {
        office: true,
        profile: true,
        role: true,
        area: true,
      },
    });
  }

  /**
   * Obtener un usuario por su Email
   */
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Crear un nuevo usuario
   */
  async create(data) {
    return await prisma.user.create({
      data,
    });
  }

  /**
   * Actualizar un usuario existente
   */
  async update(id, data) {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  /**
   * Eliminar (o desactivar) un usuario
   */
  async delete(id) {
    return await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new UserRepository();
