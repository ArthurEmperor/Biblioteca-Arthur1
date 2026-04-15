const pool = require('../database/connection');

const listarTodosUsuarios = async () => {
  const resultado = await pool.query('SELECT id, nome, matrícula, email, role FROM usuarios ORDER BY id');
  return resultado.rows;
};

const buscarUsuarioPorId = async (id) => {
  const resultado = await pool.query('SELECT id, nome, matrícula, email, role FROM usuarios WHERE id = $1', [id]);
  return resultado.rows[0] || null;
};

const criarUsuario = async ({ nome, matricula, email, role = 'user', senha }) => {
  if (!nome || !email) throw new Error('Nome e email são obrigatórios.');
  const resultado = await pool.query(
    `INSERT INTO usuarios (nome, matrícula, email, role)
     VALUES ($1, $2, $3, $4) RETURNING id, nome, email, role`,
    [nome, matricula || null, email, role]
  );
  return resultado.rows[0];
};


const login = async (email, senha) => {
  throw new Error('Autenticação não implementada: falta coluna senha na tabela usuarios.');
};

module.exports = { listarTodosUsuarios, buscarUsuarioPorId, criarUsuario, login };