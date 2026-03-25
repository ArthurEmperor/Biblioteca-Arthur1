let usuarios = [
    { id: 1, nome: 'Anderson Dutra', email: 'anderson@gmail.com' },
    { id: 2, nome: 'Jailsson silva', email: 'jailsson@gmail.com' },
    { id: 3, nome: 'Robert Silva', email: 'robert@gmail.com' },
];

const listarTodosUsuarios = async () => {
    return usuarios;
};

const buscarUsuarioPorId = async (id) => {
    const usuario = usuarios.find((user) => user.id === Number(id));
    return usuario || null;
};

const criarUsuario = async ({ nome, email }) => {
    if (!nome || !email) {
        throw new Error('Nome e E-mail são obrigatórios.');
    }
    const novoId = usuarios.length + 1;
    const novoUsuario = { id: novoId, nome, email };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

module.exports = { listarTodosUsuarios, buscarUsuarioPorId, criarUsuario };