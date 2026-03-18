const express = require('express');

const livrosRoutes = require('./src/routes/livros.routes');

const app = express();

app.use(express.json());

// Registro das rotas
app.use('/livros', livrosRoutes);

app.get('/', (req, res) => {
    res.json({
        sistema: "Biblioteca Arthur",
        status: "Online",
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
})