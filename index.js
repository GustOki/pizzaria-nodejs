const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco

const funcionario = require("./src/router/funcionario.router"); //arquivo de rota do funcionario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota de categoria
const comanda = require("./src/router/comanda.router"); //arquivo de rota de comanda
const pedido = require("./src/router/pedido.router"); //arquivo de rota de pedido

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/funcionario", funcionario); //chamando as rotas de funcionario
app.use("/auth", auth); //chamando as rotas de auth
app.use("/produto", produto); //chamando as rotas de produto
app.use("/categoria", categoria); //chamando as rotas de categoria
app.use("/comanda", comanda); //chamando as rotas de comanda
app.use("/pedido", pedido); //chamando as rotas de pedido

app.get("/", (req,res) => {
    res.send({
        message: "BEM-VINDO AO SISTEMA DA PIZZARIA!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})