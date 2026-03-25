const express = require('express');
const router = express.Router();

const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { logger } = require('../middlewares/main.middlewares');

// Middleware global de log (aplica-se a todas as rotas abaixo)
router.use(logger);

router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Arthur', status: 'Online' });
});

// Tratamento de 404 (sempre no final)
router.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada na biblioteca Arthur.' });
});

module.exports = router;