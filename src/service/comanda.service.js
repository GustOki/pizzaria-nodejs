const Comanda = require("../model/Comanda");

const findComandaByIdService = async (id) => {
    return Comanda.findById(id);
};

const findAllComandasService = (limit, offset) => {
    return Comanda.find().limit(limit).skip(offset);
};

const createComandaService = (body) => {
    return Comanda.create(body);
};

const updateComandaService = (id, body) => {
    return Comanda.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteComandaService = (id) => {
    return Comanda.findByIdAndRemove(id);
};

module.exports = {
    findComandaByIdService,
    findAllComandasService,
    createComandaService,
    updateComandaService,
    deleteComandaService
}