const express = require("express")
const router = express.Router()
const controller = require("../controller/gastos.controller")
const categorias = require("../controller/categorias.controller")

router.get("/gastos",controller.obtenerGastos)
router.get("/categorias",categorias.obtenerCategorias)
module.exports = router