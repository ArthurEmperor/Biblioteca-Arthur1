const express = require('express');

const router = express.Router();

const livrosController = require("../controllers/livros.controllers")

router.get('/', livrosController.listarLivros);
router.post('/', livrosController.criarLivro);

module.exports = router;
