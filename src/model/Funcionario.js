const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    registro: {type: String, unique: true, required: true},
    senha: {type: String, require: true},
    cargo: {type: String, require: true},
    enderecos: [
        {
            rua: {type: String, require: true},
            numero: {type: Number, require: true},
            complemento: {type: String, require: false},
            CEP: {type: String, require: true},
            createdAt: {type: Date, require: true}
        }
    ],
    createdAt: {type: Date, require: true},
    admin: {type: Boolean, require: true, default: false},
});

const Funcionario = mongoose.model("funcionarios", FuncionarioSchema);

module.exports = Funcionario;