const express = require('express');
const router = express.Router();

const validateFields = require('../middlewares/validateFields.middleware');
const usuariosController = require("../controllers/usuarios.controllers");

// rotas GET
router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.buscarUsuarioPorId);

// POST criar usuário - valida nome e email
router.post('/', validateFields(['nome', 'email']), usuariosController.criarUsuario);

// POST login - valida email e senha
router.post('/login', validateFields(['email', 'senha']), usuariosController.login);

module.exports = router;