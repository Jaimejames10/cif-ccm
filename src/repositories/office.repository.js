import prisma from "../config/database.js";

/**
 * Repositorio de la entidad Office
 */
class OfficeRepository {
  /**
   * Metodo que obtiene todos los registros de la tabla Office 
   * @param {object} [filters] filtros para la busqueda de registros en Office
   * @returns {Promise<Object[]>}
   */
  async findAll(filters = {}) {
    return await prisma.office.findMany({
      where: filters,
    });
  }

  /**
   * Metodo que crea un registro en la tabla Office
   * @param {object} data datos para la creacion de un registro en Office
   * @returns {Promise<Object>}
   */
  async create(data) {
    return await prisma.office.create({
      data,
    });
  }

  /**
   * Metodo que crea registros masivos en la tabla Office
   * @param {Array<Object>} data datos para la creacion de registros en Office
   * @returns {Promise<Object>}
   */
  async createMany(data) {
    return await prisma.office.createMany({
      data,
      skipDuplicates: true,
    });
  }

  /**
   * Metodo que actualiza un registro en la tabla Office
   * @param {string} id identificador del registro a actualizar
   * @param {object} data datos para la actualizacion del registro
   * @returns {Promise<Object>}
   */
  async update(id, data) {
    return await prisma.office.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  /**
   * Metodo que elimina un registro en la tabla Office
   * @param {string} id identificador del registro a eliminar
   * @returns {Promise<Object>}
   */
  async delete(id) {
    return await prisma.office.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new OfficeRepository();