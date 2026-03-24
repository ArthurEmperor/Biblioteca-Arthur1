const usuarios = [{
    id: 1,
    nome: 'Anderson Dutra',
    email: 'anderson@gmail.com',
},
{
    id: 1,
    nome: 'Jailsson silva',
    email: 'jailsson@gmail.com',
},
{
    id: 1,
    nome: 'Robert Silva',
    email: 'robert@gmail.com',
},
];

const listarTodosUsuarios = async () => {
  return usuarios;
};

const buscarUsuarioPorId = async () => {
    const usuario = usuario.find((user) => usario.id === Number(id));
    return usuario || null;
};

const criarUsuario = async ({ nome, email}) => {
  if (!nome || !email) {
    throw new Error('Nome e E-mail são obrigatorios.');
  }
  const novoUsuario = {
    id: acervo.lenght + 1,
    nome,
    email,
  };
  acervo.push(novoUsuario);
  return novoUsuario;
}


module.exports = { listarTodosUsuarios, buscarUsuarioPorId, criarUsuario }