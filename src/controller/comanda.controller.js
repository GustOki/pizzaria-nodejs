const ComandaService = require("../service/comanda.service");

const findComandaByIdController = async (res,req) => {
    try{
        res.status(200).send(await ComandaService.findComandaByIdService(req.params.id));
    }catch(err){
        res.status(500).send({ message: "Erro inesperadom tente novamente!"});
        console.log(err.message);
    }
};

const findAllComandasController = async (req,res) => {
    try{
        res.status(200).send(await ComandaService.findAllComandasService());
    }catch(err){
        res.status(500).send({ message: "Erro inesperadom tente novamente!"});
        console.log(err.message);
    }
};

const createComandaController = async (req,res) => {
    try{
        const corpo = {
            ...req.body,
            employeeId: req.employeeId
        }
        res.status(201).send(await ComandaService.createComandaService(req.params.id, corpo));
    }catch(err){
        res.status(500).send({ message: "Erro inesperadom tente novamente!"});
        console.log(err.message);
    }
};

const updateComandaController = async(req,res) => {
    try{
        res.status(200).send(await ComandaService.updateComandaService(req.params.id, req.body));
    }catch(err){
        res.status(500).send({ message: "Erro inesperadom tente novamente!"});
        console.log(err.message);
    }
};

const deleteComandaController = async (req,res) => {
    try{
        res.status(200).send(await ComandaService.deleteComandaService(req.params.id));
    }catch(err){
        res.status(500).send({ message: "Erro inesperadom tente novamente!"});
        console.log(err.message);
    }
};

module.exports = {
    findComandaByIdController,
    findAllComandasController,
    createComandaController,
    updateComandaController,
    deleteComandaController
}