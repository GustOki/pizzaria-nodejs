const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco

const funcionario = require("./src/router/funcionario.router"); //arquivo de rota do funcionario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota de categoria
const comanda = require("./src/router/comanda.router"); //arquivo de rota de comanda

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/funcionario", funcionario); //chamando as rotas do funcionario
app.use("/auth", auth); //chamando as rotas do auth
app.use("/produto", produto); //chamando as rotas do produto
app.use("/categoria", categoria); //chamando as rotas da categoria
app.use("/comanda", comanda); //chamando as rotas da comanda

app.get("/", (req,res) => {
    res.send({
        message: "BEM-VINDO AO SISTEMA DA PIZZARIA!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})