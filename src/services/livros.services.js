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

//Buscar livro pelo id
const buscarLivroPorId = async () => {
    const livro = acervo.find((livro) => livro.id === Number(id));
    return livro || null;
};

module.exports = { listarTodosLivros, buscarLivroPorId };
