const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaFuncionario } = require("../middleware/validacao.middleware");

// rotas GET
router.get('/findById/:id', authMiddleware, funcionarioController.findEmployeeByIdController);
router.get('/findAll',  authMiddleware, funcionarioController.findAllEmployeesController);

// rotas POST
router.post('/create', validaFuncionario, funcionarioController.createEmployeeController);
router.post('/addAddress/:id', authMiddleware, funcionarioController.addEmployeeAddressController);

// rotas PUT
router.put('/update/:id', authMiddleware, validaFuncionario, funcionarioController.updateEmployeeController);

// rotas DELETE
router.delete('/remove/:id', authMiddleware, funcionarioController.removeEmployeeController);
router.delete('/removeAddress', authMiddleware, funcionarioController.removeEmployeeAddressController);

module.exports = router;