const logger = require('./logger.middleware')
const errorHandler = require('./errorHandler.middleware')
const autenticar = require('./auth.middleware')

module.exports = { logger, errorHandler, autenticar };
