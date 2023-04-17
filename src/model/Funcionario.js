const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    registro: {type: String, unique: true, required: true},
    senha: {type: String, required: true},
    cargo: {type: String, required: true},
    enderecos: [
        {
            rua: {type: String, required: true},
            numero: {type: Number, required: true},
            complemento: {type: String, required: false},
            CEP: {type: String, required: true},
            createdAt: {type: Date, required: true}
        }
    ],
    createdAt: {type: Date, required: true},
    admin: {type: Boolean, required: true, default: false},
});

const Funcionario = mongoose.model("funcionarios", FuncionarioSchema);

module.exports = Funcionario;