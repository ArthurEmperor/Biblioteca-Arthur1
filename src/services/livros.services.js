const pool = require('../database/connection');

const listarTodosLivros = async () => {
    try {
        const query = 'SELECT livros.id, livros.titulo, livros.autor, livros.isbn, livros.ano_publicacao, livros.disponivel, livros.categoria_id FROM livros ORDER BY id';
        const resultado = await pool.query(query);
        return resultado.rows;
    } catch (error) {
        throw new Error('Erro ao listar livros.');
    }
};

const buscarLivroPorId = async (id) => {
  try {
    const query = 'SELECT livros.id, livros.titulo, livros.autor, livros.isbn, livros.ano_publicacao, livros.disponivel, livros.categoria_id FROM livros WHERE id = $1';
    const resultado = await pool.query(query, [id]);
    return resultado.rows[0] || null;
  } catch (error) {
    throw new Error('Erro ao buscar livro.');
  }
  return resultado.rows[0] || null;
};

const criarLivro = async ({ titulo, autor, isbn, ano_publicacao, disponivel = true, categoria_id }) => {
  try {
    const query = `INSERT INTO livros (titulo, autor, isbn, ano_publicacao, disponivel, categoria_id)
                   VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [titulo, autor, isbn, ano_publicacao || null, disponivel, categoria_id];
    const resultado = await pool.query(query, values);
    return resultado.rows[0];
  } catch (error) {
    if (error.code === '23505') {
      const error = new Error('ISBN já cadastrado no sistema.');
      error.status = 400;
      throw error;
    }
    
    if (error.code === '23503') {
      const error = new Error('Categoria inexistente.');
      error.status = 400;
      throw error;
    }
  }
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };