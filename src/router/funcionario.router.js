const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaFuncionario, validaId } = require("../middleware/validacao.middleware");

// rotas GET
router.get('/findById/:id', authMiddleware, validaId, funcionarioController.findEmployeeByIdController);
router.get('/findAll',  authMiddleware, funcionarioController.findAllEmployeesController);

// rotas POST
router.post('/create', validaFuncionario, funcionarioController.createEmployeeController);
router.post('/addAddress/:id', authMiddleware, validaId, funcionarioController.addEmployeeAddressController);

// rotas PUT
router.put('/update/:id', authMiddleware, validaId, validaFuncionario, funcionarioController.updateEmployeeController);

// rotas DELETE
router.delete('/remove/:id', authMiddleware, validaId, funcionarioController.removeEmployeeController);
router.delete('/removeAddress', authMiddleware, funcionarioController.removeEmployeeAddressController);

module.exports = router;