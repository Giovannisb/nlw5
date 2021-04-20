import express from "express";

const app = express();

app.get("/", (request, response) =>{
    return response.send("Olá nlw_05");
});

app.post("/users", (request, response) =>{
    return response.json({ "message": "Usuário salvo com sucesso!" })
});

app.listen(3333, () => console.log("Server running..."));