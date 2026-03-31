const errorHandler = (err, req, res, next) => {
    console.log(`[ERRO]: ${req.method} ${req.url}`, err.mensagem);

    const status = err.status || 500;

    res.status(status).json({
        erro: err.mensagem || "Ocorreu um erro inesperado.",
        caminho: req.url,
    });
} ;

module.exports = errorHandler;