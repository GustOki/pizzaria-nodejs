const Funcionario = require("../model/Funcionario");
const jwt = require("jsonwebtoken");

const  loginService = (registro) => Funcionario.findOne({ registro: registro}).select("senha");

const generateToken = (employeeId) => jwt.sign({id: employeeId}, process.env.SECRET, { expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}