const express = require("express");
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco

const funcionario = require("./src/router/funcionario.router"); //arquivo de rota do funcionario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/funcionario", funcionario); //chamando as rotas do funcionario
app.use("/auth", auth); //chamando as rotas do auth

app.get("/", (req,res) => {
    res.send({
        message: "BEM-VINDO AO SISTEMA DA PIZZARIA!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})