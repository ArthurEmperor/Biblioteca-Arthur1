const pool = require('../database/connection');

const listarTodosLivros = async () => {
  const resultado = await pool.query('SELECT * FROM livros ORDER BY id');
  return resultado.rows;
};

const buscarLivroPorId = async (id) => {
  const resultado = await pool.query('SELECT * FROM livros WHERE id = $1', [id]);
  return resultado.rows[0] || null;
};

const criarLivro = async ({ titulo, autor, isbn, ano_publicacao, disponivel = true }) => {
  if (!titulo || !autor) throw new Error('Título e autor são obrigatórios.');
  const resultado = await pool.query(
    `INSERT INTO livros (titulo, autor, isbn, ano_publicacao, disponível)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [titulo, autor, isbn || null, ano_publicacao || null, disponivel]
  );
  return resultado.rows[0];
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };