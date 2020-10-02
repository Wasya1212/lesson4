const HTTP = require('http');

const app = require('./app');
const { server: serverConfig } = require('./config');

const server = HTTP.createServer(app.callback());

process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit();
});

server.listen(serverConfig.port, () => {
  console.log(`Server started on port:${serverConfig.port}...`);
});