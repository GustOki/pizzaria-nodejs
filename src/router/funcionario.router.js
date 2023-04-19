const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");

const authMiddleware = require("../middleware/auth.middleware");

// rotas GET
router.get('/findById/:id', authMiddleware, funcionarioController.findEmployeeByIdController);
router.get('/findAll',  authMiddleware, funcionarioController.findAllEmployeesController);

// rotas POST
router.post('/create', funcionarioController.createEmployeeController);
router.post('/addAddress/:id', funcionarioController.addEmployeeAddressController);

// rotas PUT
router.put('/update/:id', funcionarioController.updateEmployeeController);

// rotas DELETE
router.delete('/remove/:id', funcionarioController.removeEmployeeController);
router.delete('/removeAddress', funcionarioController.removeEmployeeAddressController);

module.exports = router;