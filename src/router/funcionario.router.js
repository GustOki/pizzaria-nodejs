const express = require("express");
const router = express.Router();
const funcionarioController = require("../controller/funcionario.controller");

router.get('/findById:id');
router.get('findAll');

router.post('/create');
router.post('/addAddress/:id');

router.put('/update/:id');

router.delete('/remove/:id');
router.delete('/removeAddress/:id');

module.exports = router;