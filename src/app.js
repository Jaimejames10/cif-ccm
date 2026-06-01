import express from "express";
import helmet from "helmet";
import webRoutes from "./routes/web/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", webRoutes);

app.use(errorHandler);

export default app;
