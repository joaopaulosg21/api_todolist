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

    async getTaskByTitleRoute(req:Request,res:Response):Promise<Response>{
        const taskTitle:string = req.params.taskTitle;
        const response:any = await taskService.getTaskByTitle(taskTitle);
        return res.status(response.status).json({msg:response.msg});
    }

    async getAllTasksRoute(req:Request,res:Response):Promise<Response>{
        const response:any = await taskService.getAllTasks();
        return res.status(response.status).json({msg:response.msg});
    }

    async updateTaskStatusRoute(req:Request,res:Response):Promise<Response>{
        const taskId:number = Number(req.params.id);
        const status:string = req.params.status;
        const response:any = await taskService.updateTaskStatus(taskId,status);
        return res.status(response.status).json({msg:response.msg});
    }

    async finishTaskRoute(req:Request,res:Response):Promise<Response>{
        const taskId:number = Number(req.params.id);
        const response:any = await taskService.finishTask(taskId);
        return res.status(response.status).json({msg:response.msg});
    }
}