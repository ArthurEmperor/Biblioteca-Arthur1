const express = require('express');
const routes = require('./src/routes/index.routes');
const { logger, errorHandler } = require('./src/middlewares/main.middlewares');
const app = express();

app.use(express.json());


routes.use(logger)


app.use(routes);


app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`);
});