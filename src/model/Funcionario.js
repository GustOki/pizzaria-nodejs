const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    createdAt: {type: Date, required: true, default: Date.now()},
    admin: {type: Boolean, required: true, default: false},
});

FuncionarioSchema.pre("save", async function(next) {
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

FuncionarioSchema.pre("findOneAndUpdate", async function(next) {
    if(this._update.senha){
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Funcionario = mongoose.model("funcionarios", FuncionarioSchema);

module.exports = Funcionario;