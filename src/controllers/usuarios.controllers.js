const usuariosService = require("../services/usuarios.service");

const listarUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuariosService.listarTodosUsuarios();
        res.status(200).json({ total: usuarios.length, usuarios });
    } catch (error) {
        next(error);
    }
};

const buscarUsuarioPorId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuario = await usuariosService.buscarUsuarioPorId(id);
        if (!usuario) {
            return res.status(404).json({ erro: `Usuário ${id} não encontrado.` });
        }
        res.status(200).json({ usuario });
    } catch (error) {
        next(error);
    }
};

const criarUsuario = async (req, res, next) => {
    try {
        const { nome, email, senha } = req.body;
        const novoUsuario = await usuariosService.criarUsuario({ nome, email, senha });
        res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            usuario: novoUsuario,
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, senha } = req.body;
        const usuario = await usuariosService.login(email, senha);
        if (!usuario) {
            return res.status(401).json({ erro: "Email ou senha inválidos" });
        }
        return res.json({ message: "Login realizado com sucesso!", usuario });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    login
};