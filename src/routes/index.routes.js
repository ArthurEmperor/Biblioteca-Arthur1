const express = require('express');

const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { logger } = require('../middlewares/main.middlewares')

router.use('/livros', livrosRoutes)
router.use('/usuarios', usuariosRoutes);
router.use(logger)

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Arthur', status: 'Online' });
});


router.use((req, res) => {
    res.status(404)
    .json({ erro: 'Rota não encontraria na biblioteca Arthur. '});
});

module.exports = router;