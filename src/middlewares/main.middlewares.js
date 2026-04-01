const logger = require('./logger.middleware')
const errorHandler = require('./errorHandler.middleware')
const autenticar = require('./auth.middleware')
const validarContentType = require('./contentType.middleware')

module.exports = { logger, errorHandler, autenticar, validarContentType };
