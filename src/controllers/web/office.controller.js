import officeService from "../../services/office.service.js";

class OfficeController {
    async getAll(req, res) {
        try {
            const offices = await officeService.getAll();
            res.json(offices);
        } catch (error) {
            console.error("Error al obtener las oficinas:", error);
            res.status(500).json({ error: "Error al obtener las oficinas" });
        }
    }

    async create(req, res) {
        try {
            const office = await officeService.create(req.body);
            res.json(office);
        } catch (error) {
            console.error("Error al crear la oficina:", error);
            res.status(500).json({ error: "Error al crear la oficina" });
        }
    }

    async createMany(req, res) {
        try {
            console.log(">>>>>>>>>>>>>>>>")
            console.log(req.body)
            console.log(">>>>>>>>>>>>>>>>")
            const office = await officeService.createMany(req.body);
            res.json(office);
        } catch(error) {
            console.error("Error al crear las oficinas:", error);
            res.status(500).json({ error: "Error al crear la oficina" });
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const office = await officeService.update(id, req.body);
            res.json(office);
        } catch (error) {
            console.error("Error al actualizar la oficina:", error);
            res.status(500).json({ error: "Error al actualizar la oficina" });
        }
    }

    async delete(req, res) {
        try {
            const office = await officeService.delete(req.params.id);
            res.json(office);
        } catch (error) {
            console.error("Error al eliminar la oficina:", error);
            res.status(500).json({ error: "Error al eliminar la oficina" });
        }
    }
}

export default new OfficeController();