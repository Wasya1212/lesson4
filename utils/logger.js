const Winston = require('winston');

const { log: logConfig } = require('../config');

let logger = new Winston.createLogger({
  transports: [
    new Winston.transports.File(logConfig.file),
    new Winston.transports.Console(logConfig.console)
  ],
  exitOnError: false,
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};

module.exports = logger;