import officeController from "../../controllers/web/office.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', officeController.getAll);
router.post('/', officeController.create);
router.post('/create-many', officeController.createMany);
router.put('/:id', officeController.update);
router.delete('/:id', officeController.delete);

export default router;
