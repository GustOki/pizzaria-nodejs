const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");
const paginacao = require("../middleware/paginacao.middleware");

const authMiddleware = require("../middleware/auth.middleware");
const { validaFuncionario, validaEndereco, validaIdParams } = require("../middleware/validacao.middleware");

// rotas GET
router.get('/findById/:id', authMiddleware, validaIdParams, funcionarioController.findEmployeeByIdController);
router.get('/findAll',  authMiddleware, paginacao, funcionarioController.findAllEmployeesController);

// rotas POST
router.post('/create', validaFuncionario, funcionarioController.createEmployeeController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, validaEndereco, funcionarioController.addEmployeeAddressController);

// rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaFuncionario, funcionarioController.updateEmployeeController);

// rotas DELETE
router.delete('/remove/:id', authMiddleware, validaIdParams, funcionarioController.removeEmployeeController);
router.delete('/removeAddress', authMiddleware, funcionarioController.removeEmployeeAddressController);

module.exports = router;