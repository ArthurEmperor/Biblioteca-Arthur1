const express = require('express');

const router = express.Router();

const usuariosController = require("../controllers/usuarios.controllers")

router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.buscarUsuarioPorId);
router.post('/', usuariosController.criarUsuario);


module.exports = router;