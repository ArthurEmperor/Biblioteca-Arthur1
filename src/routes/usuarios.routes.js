const express = require('express');
const router = express.Router();

const usuariosController = require("../controllers/usuarios.controllers");
const body = require("../middlewares/authBody.middleware");

// rotas
router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.buscarUsuarioPorId);

// valida body ao criar usuário
router.post('/', body, usuariosController.criarUsuario);

// valida body no login e chama controller
router.post('/login', body, usuariosController.login);

module.exports = router;