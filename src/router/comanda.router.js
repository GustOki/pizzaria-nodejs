const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const comandaController = require("../controller/comanda.controller");
const { validaComanda } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, comandaController.findComandaByIdController);
router.get("/findAll", authMiddleware, comandaController.findAllComandasController);

router.post("/create", authMiddleware, validaComanda, comandaController.createComandaController);

router.put("/update/:id", authMiddleware,  validaComanda, comandaController.updateComandaController);

router.delete("/delete/:id", authMiddleware, comandaController.deleteComandaController);

module.exports = router;