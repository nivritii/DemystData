const path = require('path');
const { Server } = require('./src/server');
const env = require('./env.json');

new Server({
  version: env.version,
  path: env.server.path,
  port: env.server.port,
  buildDir: path.join(__dirname, 'build')
}).start();
