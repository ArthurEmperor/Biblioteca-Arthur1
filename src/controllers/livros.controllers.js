const livrosService = require("../services/livros.services");

const listarLivros = async (req, res, next) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (erro) {
        next(erro);  // encaminha para o errorHandler
    }
};

const buscarLivroPorId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const livro = await livrosService.buscarLivroPorId(id);
        if (!livro) {
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json(livro);
    } catch (error) {
        next(error);
    }
};

const criarLivro = async (req, res, next) => {
    try {
        const { titulo, autor, disponivel } = req.body;
        const novoLivro = await livrosService.criarLivro({ titulo, autor, disponivel });
        res.status(201).json({
            mensagem: 'Livro cadastrado com sucesso!',
            livro: novoLivro,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { listarLivros, buscarLivroPorId, criarLivro };