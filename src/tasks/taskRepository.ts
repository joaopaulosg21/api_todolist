import { PrismaClient, tasks } from "@prisma/client";
import { Itask } from "./types/Itask";

export class TaskRepository {
    private model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async newTask(task:Itask):Promise<tasks>{
        return this.model.tasks.create({
            data:{
                title:task.title
            }
        });
    }
}