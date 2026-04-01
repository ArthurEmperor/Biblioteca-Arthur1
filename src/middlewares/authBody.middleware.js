module.exports = (req, res, next) => {
  const { email, senha } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Corpo da requisição não enviado" });
  }

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  if (senha.length < 6) {
    return res.status(400).json({ message: "Senha deve ter no mínimo 6 caracteres" });
  }

  next();
};