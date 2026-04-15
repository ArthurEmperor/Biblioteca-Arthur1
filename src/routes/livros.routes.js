const express = require('express');
const router = express.Router();
const livrosController = require("../controllers/livros.controllers");

router.get('/', livrosController.listarLivros);
router.post('/', livrosController.criarLivro);
router.get('/:id', livrosController.buscarLivroPorId);   // <-- adicione esta linha

module.exports = router;