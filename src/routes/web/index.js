import officeRoutes from "./office.routes.js";
import { Router } from "express";

const router = Router();

router.use("/office", officeRoutes);

export default router;