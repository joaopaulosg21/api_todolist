import request from "supertest";
import { app } from "../server";

describe("Testes para as rotas de task",()=>{
    it("Adicionar nova task",async()=>{
        const response = await request(app)
        .post("/tasks/new")
        .send({title:"Teste de adição de task"});
        expect(response.statusCode).toStrictEqual(201);
        expect(response.body.msg).toEqual("Tarefa 'Teste de adição de task' adicionada");
    });
})