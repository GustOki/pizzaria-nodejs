pizzaria-nodejs

Criando um sistema de banco de dados e login de uma pizzaria nodejs (iTalents)

## Instalação

1. Baixe todo o código;
2. Abra o terminal do VS Code;
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Todos os endpoints da nossa aplicação serão listados abaixo:

### Funcionário

Todos os endpoints do produto serão listados abaixo:

#### /findById


| Codigo | resposta                                                          |
| :------- | ------------------------------------------------------------------- |
| 200    | retorna um funcion[ario valido                                    |
| 400    | retorna uma mensagem informando o erro                            |
| 401    | retorna o erro de autenticação                                  |
| 404    | retorna uma mensagem informando que não encontrou o funcionário |


```javascript
const findEmployeeByIdController = async (req,res) => {
    try{
        const employee = await employeeService.findEmployeeByIdService(req.params.id);

        if(!employee){
            return res.status(404).send({message: "Funcionario nao encontrado, tente novamente!"});
        }

        return res.status(200).send(employee);

    }catch (err){
        if(err.kind == "ObjectId"){
            return res.status(400).send({message: `ID informado esta incorreto, tente novamente!`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    }
};
```

### Produto

Todos os endpoints do produto serão listados abaixo:
