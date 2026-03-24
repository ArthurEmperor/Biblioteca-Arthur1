const usuariosService = require("../services/usuarios.service");

//Get usuarios
const listarUsuarios = async (req, res) => {
 try {
    const usuarios = await usuariosService.listarTodosUsuarios();
 res.status(200).json({total: usuarios.length, usuarios});
 } catch (error) {
    res.status(500).json({erro: 'Erro interno ao buscar os usuarios' });
 }
};

const buscarUsuarioPorId = async (req, res) => {
   try {
    const { id } = req.params;
    const usuario = await usuariosService.buscarUsuarioPorId(id);

    if (!usuario) {
        return res.status(404).json({ erro: `Usuario ${id} não encontrado.`})
    }

    res.status(200).json({ usuario });
   } catch (error) {
     res.status(500).json({ erro: 'Erro interno ao buscar usuario.'});
   }  
};

const criarUsuario = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoUsuario = await usuariosService.criarUsuario({ nome, email});


        res.status(201).json({
            mensagem: 'Usuario cadastrado com sucesso!',
            usuario: novoUsuario,
        });
    } catch (error) {
        res.status(400).json({ erro: erro.message });
    }
};

module.exports = { listarUsuarios, buscarUsuarioPorId, criarUsuario };
