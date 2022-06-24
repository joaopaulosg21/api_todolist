import { taskValidator } from "./taskValidator";

describe("Testes para o taskValidator",()=>{
    it("Teste ok",async()=>{
        const task = {title:"a",data_limite:new Date()}
        const response = await taskValidator(task);
        expect(response).toEqual("Ok");
    });

    it("Teste de erro",async()=>{
        const task = {title:""};
        try{
            await taskValidator(task);
        }catch(e){
            expect(e).toEqual("Não possui todos os dados");
        }
    })
})