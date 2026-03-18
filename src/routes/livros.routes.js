const express = require('express');

const router = express.Router();

const livrosController = require("../controllers/livros.controllers")

router.get('/', livrosController.listarLivros);

module.exports = router;
