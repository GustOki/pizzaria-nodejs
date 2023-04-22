const Funcionario = require("../model/Funcionario");

const findEmployeeByIdService = (id) => {
    return Funcionario.findById(id);
};

const findAllEmployeesService = (limit, offset) => {
    return Funcionario.find().limit(limit).skip(offset);
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
    return Funcionario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
};

const removeEmployeeAddressService = (id, addressId) => {
    return Funcionario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
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