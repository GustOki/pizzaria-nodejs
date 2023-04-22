const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const comandaController = require("../controller/comanda.controller");
const { validaComanda, validaId  } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, validaId, comandaController.findComandaByIdController);
router.get("/findAll", authMiddleware, comandaController.findAllComandasController);

router.post("/create", authMiddleware, validaComanda, comandaController.createComandaController);

router.put("/update/:id", authMiddleware, validaId, validaComanda, comandaController.updateComandaController);

router.delete("/delete/:id", authMiddleware, validaId, comandaController.deleteComandaController);

module.exports = router;