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
    });

    it("Ver todas as tasks",async()=>{
        const response = await request(app)
        .get("/tasks/");
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body.msg.length).toBeGreaterThan(0);
    });

    it("Atualizar status",async()=>{
        const response = await request(app)
        .put("/tasks/4/concluido");
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body.msg).toEqual("Status da task atualizado!");
    });

    it("Finalizar task",async()=>{
        const response = await request(app)
        .put("/tasks/finish/task/17");
        expect(response.statusCode).toStrictEqual(200);
        expect(response.body.msg).toEqual("Task finalizada");
    })
})