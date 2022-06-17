import { Request,Response } from "express";
import { TaskService } from "./taskService";
import { Itask } from "./types/Itask";
const taskService = new TaskService();

export class TaskController {

    async newTaskRoute(req:Request,res:Response):Promise<Response>{
        const task:Itask =  req.body;
        const response:any = await taskService.newTask(task);
        return res.status(response.status).json({msg:response.msg});
    }
}