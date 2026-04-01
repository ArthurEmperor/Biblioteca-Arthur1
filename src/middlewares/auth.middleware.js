const CHAVE_ACESSO = 'Biblioteca Arthur123';

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ 
            erro: 'Acesso negado: Usuario não identificado!' 
        })
    }

    const token = authHeader.split(' ').slice(1).join(' ');
    console.log('Token recebido:', token);

    if (token !== CHAVE_ACESSO) {
        return res.status(403).json({ 
            erro: 'Acesso negado: Token inválido!' 
        });
    }

    next();
};

module.exports = autenticar;