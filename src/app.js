import express from "express";
import webRoutes from "./routes/web/index.js";

const app = express();

app.use(express.json());

app.use("/", webRoutes);

export default app;
