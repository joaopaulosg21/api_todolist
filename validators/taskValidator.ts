import { Itask } from "../src/tasks/types/Itask";

export function taskValidator(task:Itask):Promise<unknown>{
    const response = new Promise((resolve,reject)=>{
        if(task.hasOwnProperty("title") && task.hasOwnProperty("data_limite") && task["title"] !== ""){
            resolve("Ok")
        }
        reject("Não possui todos os dados")
    });

    return response;
}