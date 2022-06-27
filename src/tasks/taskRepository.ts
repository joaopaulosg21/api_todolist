import { PrismaClient } from "@prisma/client";
import { Itask } from "./types/Itask";

export class TaskRepository {
    private model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async newTask(task:Itask):Promise<any>{
        return this.model.tasks.create({
            data:{
                title:task.title,
                data_limite:task.data_limite
            }
        });
    }

    public async getTaskByTitle(taskTitle:string):Promise<any | null>{
        return this.model.tasks.findFirst({where:{title:taskTitle}});
    }

    public async getAllTasks():Promise<any[]> {
        return this.model.tasks.findMany();
    }

    public async getAllTasksSortByCreatedDate(ordem:any):Promise<any[]> {
        return this.model.tasks.findMany({orderBy:[{createdAt:ordem}]});
    }

    public async updateTaskStatus(taskId:number,status:string):Promise<any | null>{
        return this.model.tasks.update({
            where:{id:taskId},
            data:{status:status}
        });
    }
    
    public async finishTask(taskId:number,date:Date):Promise<any | null>{
        return this.model.tasks.update({
            where:{id:taskId},
            data:{endedIn:date,status:"concluido"}
        });
    }

    public async getTaskById(taskId:number):Promise<any | null>{
        return this.model.tasks.findFirst({where:{id:taskId}});
    }
}