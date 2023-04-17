const Funcionario = require("../model/Funcionario");

const findEmployeeByIdService = (id) => {
    return Funcionario.findById(id);
};

const findAllEmployeesService = () => {
    return Funcionario.find();
};

const createEmployeeService = (body) => {
    return Funcionario.create(body);
};
const updateEmployeeService = (id, body) => {
    return Funcionario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeEmployeeService = (id) => {
    return Funcionario.findByIdAndRemove(id);
};

const addEmployeeAddressService = (id, endereco) => {

};

const removeEmployeeAddressService = (id) => {

}

module.exports = {
    findEmployeeByIdService,
    findAllEmployeesService,
    createEmployeeService,
    updateEmployeeService,
    removeEmployeeService,
    addEmployeeAddressService,
    removeEmployeeAddressService
}