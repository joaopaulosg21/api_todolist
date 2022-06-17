import express from "express";
import { taskRouter } from "./Routes/taskRoutes";
const app = express();

app.use(express.json());
app.use("/tasks",taskRouter)

export { app };