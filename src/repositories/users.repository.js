import prisma from "../config/database.js";

/**
 * Repositorio de la entidad User
 */
class UserRepository {
  /**
   * Obtener todos los usuarios con sus relaciones (opcional)
   * @param {object} [filters] filtros para la busqueda de registros en Office
   * @returns {Promise<Object[]>}
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
   * @param {string} id identificador del usuario a buscar
   * @returns {Promise<Object>}
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
   * @param {string} email email del usuario a buscar
   * @returns {Promise<Object>}
   */
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Crear un nuevo usuario
   * @param {object} data datos para la creacion de un registro en User
   * @returns {Promise<Object>}
   */
  async create(data) {
    return await prisma.user.create({
      data,
    });
  }

  /**
   * Actualizar un usuario existente
   * @param {string} id identificador del usuario a actualizar
   * @param {object} data datos para la actualizacion del registro
   * @returns {Promise<Object>}
   */
  async update(id, data) {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  /**
   * Eliminar (o desactivar) un usuario
   * @param {string} id identificador del usuario a eliminar
   * @returns {Promise<Object>}
   */
  async delete(id) {
    return await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new UserRepository();
