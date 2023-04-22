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

    if(!req.body.concluido){
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

module.exports = {
    validaFuncionario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaComanda
}