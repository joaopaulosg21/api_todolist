import { TaskRepository } from "./taskRepository";
import { Itask } from "./types/Itask";

export class TaskService {
    private taskRepository:TaskRepository;
    constructor(){
        this.taskRepository = new TaskRepository();
    }

    public async newTask(task:Itask):Promise<Object>{
        try{
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
}