const Funcionario = require("../model/Funcionario");
const jwt = require("jsonwebtoken");

const  loginService = (registro) => Funcionario.findOne({ registro: registro}).select("senha");

const generateToken = (employeeId) => jwt.sign({id: employeeId}, "9ouojwjfwmsfkokdeoij28miaovwjijimi3fcir", { expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}