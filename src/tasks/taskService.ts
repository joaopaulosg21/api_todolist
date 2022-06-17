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
}