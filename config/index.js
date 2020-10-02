const path = require('path');

module.exports = {
  app: {
    staticFilesDist: path.join(__dirname, '../public')
  },
  server: {
    port: process.env.PORT || 3000
  },
  ejs: {
    root: path.join(__dirname, '../views'),
    layout: 'layout/default',
    viewExt: 'ejs',
    cache: false,
    debug: false
  },
  log: {
    file: {
      level: 'info',
      filename: path.join(__dirname, '../logs/app.log'),
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }
  }
}