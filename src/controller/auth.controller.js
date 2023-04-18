const authService = require ("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req,res) => {
    const {registro, senha} = req.body;

    const employee = await authService.loginService(registro);

    if(!employee){
        return res.status(400).send({ message: "Funcionario nao encontrado!"});
    };

    const isPasswordValid = await bcrypt.compare(senha, employee.senha);

    if(!isPasswordValid){
        return res.status(400).send({ message: "Senha invalida!"});
    };

    const token = authService.generateToken(employee.id);

    res.status(200).send({
        registro,
        token
    });
}

module.exports = { loginController };