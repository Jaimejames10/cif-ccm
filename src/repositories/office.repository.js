import prisma from "../config/database.js";

class OfficeRepository {
  async findAll(filters = {}) {
    return await prisma.office.findMany({
      where: filters,
    });
  }

  async create(data) {
    return await prisma.office.create({
      data,
    });
  }

  async createMany(data) {
    return await prisma.office.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async update(id, data) {
    return await prisma.office.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async delete(id) {
    return await prisma.office.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new OfficeRepository();