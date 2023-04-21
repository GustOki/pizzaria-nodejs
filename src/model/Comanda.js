const mongoose = require("mongoose");

const comandaSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "produtos" },
            quantidade: { type: Number, required: true }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now },
    precoTotal: {type: Number, required: true},
    taxaDeEntrega: { type:Number, required: true},
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "funcionarios" }
});

const Comanda = mongoose.model("comandas", comandaSchema);

module.exports = Comanda;