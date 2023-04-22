const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true} ,
    ingredientes: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    codigoBarra: { type: Number, unique: true, required: true },
    categoria: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias" },
            createAt: { type: Date, required: true, default: Date.now() }
        },
    ],
});

const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;