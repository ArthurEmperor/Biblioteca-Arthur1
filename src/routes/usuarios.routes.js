const express = require('express');
const router = express.Router();


const usuariosController = require("../controllers/usuarios.controllers");

// rotas GET
router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.buscarUsuarioPorId);


module.exports = router;