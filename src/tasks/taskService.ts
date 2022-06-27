import { taskValidator } from "../../validators/taskValidator";
import { TaskRepository } from "./taskRepository";
import { Itask } from "./types/Itask";

export class TaskService {
    private taskRepository:TaskRepository;
    constructor(){
        this.taskRepository = new TaskRepository();
    }

    public async newTask(task:Itask):Promise<Object>{
        try{
            await taskValidator(task);
            const newTask = await this.taskRepository.newTask(task);
            return {status:201,msg:`Tarefa '${newTask.title}' adicionada`};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async getTaskByTitle(taskTitle:string):Promise<Object>{
        try{
            const task = await this.taskRepository.getTaskByTitle(taskTitle);
            if(task){
                return {status:200,msg:task};
            }else{
                return {status:404,msg:"Task não existe!"};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async getAllTasks(sort={},ordem=""):Promise<Object>{
        try{
            if(sort.hasOwnProperty("sortBycreatedDate")){
                const tasks = await this.taskRepository.getAllTasksSortByCreatedDate(ordem);
                return {status:200,msg:tasks}
            }
            const tasks = await this.taskRepository.getAllTasks();
            return {status:200,msg:tasks};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async updateTaskStatus(taskId:number,status:string):Promise<Object>{
        try{
            const task = await this.taskRepository.updateTaskStatus(taskId,status);
            if(task){
                return {status:200,msg:`Status da task atualizado!`};
            }else{
                return {status:404,msg:`Task não existe!`};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async finishTask(taskId:number):Promise<Object>{
        try{
            const task = await this.taskRepository.getTaskById(taskId);
            if(task){
                const date = new Date();
                await this.taskRepository.finishTask(taskId,date);
                return {status:200,msg:"Task finalizada"};
            }else{
                return {status:404,msg:`Task não existe!`}; 
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }

    public async getTaskById(taskId:number):Promise<Object>{
        try{
            const task = await this.taskRepository.getTaskById(1);
            if(task){
                return {status:200,msg:task};
            }else{
                return {status:404,msg:`Task com esse id não existe! `};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}