const validarContentType = (req, res, next) => {
    const metodosComBody = ['POST', 'PUT', 'PATCH'];

    if (metodosComBody.includes(req.method)) {
        const contentType = req.headers['content-type'];

        if (!contentType || !contentType.includes('application/json')) {
            return res.status(415).json({ erro: 'Tipo de arquivo deve ser application/json' });
        }
    }



    next();
};

module.exports = validarContentType;