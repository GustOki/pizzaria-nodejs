const jwt = require("jsonwebtoken");
const { findEmployeeByIdService } = require("../service/funcionario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "O token nao foi informado!"});
    };

    const parts = authHeader.split(" "); //["Bearer, <token>"]

    if(parts.length !== 2){
        return res.status(401).send({ message: "Token invalido!"});
    };

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token malformado!"});
    };

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.status(500).send({ message: "Token invalido!"});
        };

        const employee = await findEmployeeByIdService(decoded.id);

        if(!employee || !employee.id){
            return res.status(401).send({ message: "Token invalido!"});
        };

        req.employeeId = decoded.id;

        return next();
    })
}