const express = require("express");
const connectToDatabase = require("./src/database/database");

const funcionario = require("./src/router/funcionario.router");

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase();

app.use("/funcionario", funcionario);

app.get("/", (req,res) => {
    res.send({
        message: "BEM-VINDO AO SISTEMA DA PIZZARIA!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})