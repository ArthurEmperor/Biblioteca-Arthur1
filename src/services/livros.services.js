const acervo = [
    {
        id: 1,
        titulo: "Horus Rising",
        autor: "Dan Abnett",
        disponivel: true,
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        disponivel: true,
    },
    {
        id: 3,
        titulo: "The Infinite and The Divine",
        autor: "Robert Rath",
        disponivel: true,
    },
];

//Listar todos os livros
const listarTodosLivros = async () => {
  return acervo;
};

//Criar um novo livro
const criarLivro = async ({ titulo, autor, disponivel = true }) => {
    // Validação dos campos obrigatórios
    if (!titulo || !autor) {
        throw new Error('Título e autor são obrigatórios.');
    }
    
    // Gerar novo ID (maior ID existente + 1)
    const novoId = acervo.length > 0 ? Math.max(...acervo.map(livro => livro.id)) + 1 : 1;
    
    const novoLivro = {
        id: novoId,
        titulo,
        autor,
        disponivel: disponivel !== undefined ? disponivel : true,
    };
    
    acervo.push(novoLivro);
    return novoLivro;
};

//Buscar livro pelo id
const buscarLivroPorId = async (id) => {
    const livro = acervo.find((livro) => livro.id === Number(id));
    return livro || null;
};
module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };
