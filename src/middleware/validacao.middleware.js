const ObjectId = require("mongoose").Types.ObjectId;

const validaFuncionario = (req,res,next) => {

    //test um erro por vez e toma apenas uma decisao por vez
    if(!req.body.nome){
        return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
    }

    if(!req.body.registro){
        return res.status(400).send({message: `O campo 'registro' precisa ser preenchido!`});
    }

    if(!req.body.senha){
        return res.status(400).send({message: `O campo 'senha' precisa ser preenchido!`});
    }

    if(!req.body.cargo){
        return res.status(400).send({message: `O campo 'cargo' precisa ser preenchido!`});
    }

    if(!req.body.admin){
        return res.status(400).send({message: `O campo 'admin' precisa ser preenchido!`});
    }

    return next();
}

const validaEndereco = (req,res,next) => {
    let erros = [];

    req.body.enderecos.map((value, key) => {
        if(!value.rua){
            erros.push(`'${key+1} - rua'`)
        }

        if(!value.numero){
            erros.push(`'${key+1} - numero'`)
        }

        if(!value.CEP){
            erros.push(`'${key+1} - CEP'`)
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

const validaProduto = (req,res,next) => {
    let erros = []; //var para acumular os erros
    
    if(!req.body.nome){
        erros.push("nome");
    }

    if(!req.body.ingredientes){
        erros.push("ingredientes");
    }

    if(!req.body.precoUnitario){
        erros.push("precoUnitario");
    }

    if(!req.body.codigoBarra){
        erros.push("codigoBarra");
    }

    //testanto quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }

}

const validaCategoria = (req,res,next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }

    return next();
}

const validaPedido = (req,res,next) => {
    let erros = []; //var para acumular os erros

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.taxaDeEntrega){
        erros.push("taxaDeEntrega");
    }

    if(req.body.concluido == undefined){
        erros.push("concluido");
    }

    //testanto quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

const validaComanda = (req,res,next) => {
    let erros = []; //var para acumular os erros

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.taxaDeEntrega){
        erros.push("taxaDeEntrega");
    }

    //testanto quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

const validaIdParams = (req,res,next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({message: `O ID nao corresponde aos padroes necessarios`});
    }
}

const valida_IdBody = (req,res,next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({message: `O ID nao corresponde aos padroes necessarios`});
    }
}

const validaLogin = (req,res,next) => {
    let erros = [];
    
    if(!req.body.registro){
        erros.push("taxaDeEntrega");
    }

    if(!req.body.senha){
        erros.push("senha");
    }

    //testanto quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

const validaProdutosComandaPedido = (req,res,next) => {
    let erros = [];

    req.body.produtos.map((value, key) => {
        if(!value._id){
            erros.push(`'${key+1} - _id'`)
        }

        if(!ObjectId.isValid(value_id)){
            erros.push(`'${key} - _id - tipo invalido`)
        }

        if(!value.quantidade){
            erros.push(`'${key+1} - quantidade'`)
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}

module.exports = {
    validaFuncionario,
    validaEndereco,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaComanda,
    validaIdParams,
    valida_IdBody,
    validaLogin,
    validaProdutosComandaPedido
}