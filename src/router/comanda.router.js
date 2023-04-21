const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const comandaController = require("../controller/comanda.controller");

router.get("/find/:id", authMiddleware, comandaController.findComandaByIdController);
router.get("/findAll", authMiddleware, comandaController.findAllComandasController);

router.post("/create", authMiddleware, comandaController.createComandaController);

router.put("/update/:id", authMiddleware, comandaController.updateComandaController);

router.delete("/delete/:id", authMiddleware, comandaController.deleteComandaController);

module.exports = router;