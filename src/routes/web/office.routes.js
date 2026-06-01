import officeController from "../../controllers/web/office.controller.js";
import { Router } from "express";
import { validate } from "../../middlewares/validation.middleware.js";
import {
  createOfficeSchema,
  updateOfficeSchema,
  createManyOfficeSchema,
} from "../../validators/office.validator.js";

const router = Router();

router.get('/', officeController.getAll);
router.post('/', validate(createOfficeSchema), officeController.create);
router.post('/create-many', validate(createManyOfficeSchema), officeController.createMany);
router.put('/:id', validate(updateOfficeSchema), officeController.update);
router.delete('/:id', officeController.delete);

export default router;
