const employeeService = require("../service/funcionario.service");

const findEmployeeByIdController = async (req,res) => {
    try{
        const employee = await employeeService.findEmployeeByIdService(req.params.id);

        if(!employee){
            return res.status(404).send({message: "Funcionario nao encontrado, tente novamente!"});
        }

        return res.status(200).send(employee);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({message: `ID informado esta incorreto, tente novamente!`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const findAllEmployeesController = async (req,res) => {
    try{
        return res.status(200).send(await employeeService.findAllEmployeesService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const createEmployeeController = async(req,res) => {
    try{
        const body = req.body;
        
        if(!body.nome){
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
        }

        return res.status(201).send(await employeeService.createEmployeeService(body));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const updateEmployeeController = async (req, res) => {
    try{
        const body = req.body;
        
        if(!body.nome){
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
        }

        return res.send(await employeeService.updateEmployeeService(req.params.id, body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const removeEmployeeController = async (req,res) => {
    try{

        const deletedEmployee = await employeeService.removeEmployeeService(req.params.id);

        if(deletedEmployee.deletedCount > 0){
            res.status(200).send({message: `Sucesso, funcionario deletado!`});
        }else{
            res.status(404).send({message: `Funcionario nao encontrado, tente novamente!`});
        }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const addEmployeeAddressController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

const removeEmployeeAddressController = async (req,res) => {
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findEmployeeByIdController,
    findAllEmployeesController,
    createEmployeeController,
    updateEmployeeController,
    removeEmployeeController,
    addEmployeeAddressController,
    removeEmployeeAddressController
}