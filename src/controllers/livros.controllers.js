const livrosService = require("../services/livros.services");

//Get livros
const listarLivros = async (req, res) => {
 try {
    const livros = await livrosService.listarTodosLivros();
 res.status(200).json({total: livros.length, livros});
 } catch (error) {
    res.status(500).json({erro: 'Erro interno ao buscar os livros' });
 }
};

//Post livro - Criar novo livro
const criarLivro = async (req, res) => {
    try {
        const { titulo, autor, disponivel } = req.body;
        const novoLivro = await livrosService.criarLivro({ titulo, autor, disponivel });
        
        res.status(201).json({
            mensagem: 'Livro cadastrado com sucesso!',
            livro: novoLivro,
        });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

module.exports = { listarLivros, criarLivro };
