import { Router } from "express";
import { TaskController } from "../tasks/taskControllers";
const taskRouter = Router();
const task = new TaskController();

taskRouter.post("/new",task.newTaskRoute);

taskRouter.get("/:taskTitle",task.getTaskByTitleRoute);

taskRouter.get("/viewTaskById/:id",task.getTaskByIdRoute);

taskRouter.get("/",task.getAllTasksRoute);

taskRouter.put("/:id/:status",task.updateTaskStatusRoute);

taskRouter.put("/finish/task/:id",task.finishTaskRoute);

export {taskRouter};