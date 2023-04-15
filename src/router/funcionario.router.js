const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");

router.get('/findById:id', funcionarioController.findEmployeeByIdController);
router.get('findAll', funcionarioController.findAllEmployeesController);

router.post('/create', funcionarioController.createEmployeeController);
router.post('/addAddress/:id', funcionarioController.addEmployeeAddressController);

router.put('/update/:id', funcionarioController.updateEmployeeController);

router.delete('/remove/:id', funcionarioController.removeEmployeeController);
router.delete('/removeAddress/:id', funcionarioController.removeEmployeeAddressController);

module.exports = router;