// validateFields.middleware.js
const validateFields = (requiredFields) => (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "Corpo da requisição não enviado" });
  }

  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Campos obrigatórios ausentes: ${missingFields.join(', ')}`
    });
  }

  next();
};

module.exports = validateFields;