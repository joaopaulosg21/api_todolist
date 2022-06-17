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

    it("Ver task pelo titulo",async()=>{
        const response = await request(app)
        .get("/tasks/Teste de adição de task");
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body.msg.title).toEqual("Teste de adição de task")
    })
})