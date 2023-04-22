const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produtos" },
            quantidade: { type: Number, required: true }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    precoTotal: {type: Number, required: true},
    taxaDeEntrega: { type:Number, required: true},
    employeeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "funcionarios" },
    concluido: { type: Boolean, required: true }
});

const Pedido = mongoose.model("pedidos", pedidoSchema);

module.exports = Pedido;