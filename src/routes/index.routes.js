const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const autenticar = require('../middlewares/auth.middleware');
const { logger } = require('../middlewares/main.middlewares');

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Arthur', status: 'Online' });
});

router.use(logger);

// rotas públicas (SEM autenticação)
router.use('/usuarios', usuariosRoutes);

// agora sim protege o resto
router.use(autenticar);

router.use('/livros', livrosRoutes);

router.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada na biblioteca Arthur.' });
});

module.exports = router;