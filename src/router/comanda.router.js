const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const comandaController = require("../controller/comanda.controller");
const { validaComanda, validaIdParams, validaProdutosComandaPedido  } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, comandaController.findComandaByIdController);
router.get("/findAll", authMiddleware, paginacao, comandaController.findAllComandasController);

router.post("/create", authMiddleware, validaProdutosComandaPedido, validaComanda, comandaController.createComandaController);

router.put("/update/:id", authMiddleware, validaIdParams, validaComanda, comandaController.updateComandaController);

router.delete("/delete/:id", authMiddleware, validaIdParams, comandaController.deleteComandaController);

module.exports = router;