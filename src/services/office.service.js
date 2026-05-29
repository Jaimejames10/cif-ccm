import officeRepository from "../repositories/office.repository.js";

class OfficeService {
    async getAll() {
        return await officeRepository.findAll();
    }

    async create(data) {
        return await officeRepository.create(data);
    }

    async update(id, data) {
        return await officeRepository.update(id, data);
    }

    async delete(id) {
        return await officeRepository.delete(id);
    }
}

export default new OfficeService();
