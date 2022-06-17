import { Router } from "express";
import { TaskController } from "../tasks/taskControllers";
const taskRouter = Router();
const task = new TaskController();

taskRouter.post("/new",task.newTaskRoute);

export {taskRouter};