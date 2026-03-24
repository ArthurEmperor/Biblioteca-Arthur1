const express = require('express');

const router = express.Router();

router.use('/usuarios', usuariosRoutes);

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Arthur', status: 'Online' });
});


router.use((req, res) => {
    res.status(404)
    .json({ erro: 'Rota não encontraria na biblioteca Arthur. '});
});

module.exports = router;