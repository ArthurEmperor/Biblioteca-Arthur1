const express = require('express');
const app = express();

// Importa o roteador principal
const routes = require('./src/routes/index.routes');

// Middleware para interpretar JSON
app.use(express.json());

// Usa o roteador que contém todas as rotas, logger e 404
app.use(routes);

// Mensagens de inicialização (simulando os "postos de controle" da imagem)
console.log('[SERVIDOR] Postos de controle ativos: logger | autenticar | errorHandler');
console.log('[SERVIDOR] Postos de controle ativos: logger | autenticar | errorHandlers');
console.log('[SERVIDOR] Postos de controle ativos: logger | autenticar | errors');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});