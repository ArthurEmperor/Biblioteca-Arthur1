const errorHandler = (err, req, res, next) => {
    console.log(`[ERRO]: ${req.method} ${req.url}`, err.message); // .message

    const status = err.status || 500;
    res.status(status).json({
        erro: err.message || "Ocorreu um erro inesperado.",
        caminho: req.url,
    });
};

module.exports = errorHandler;