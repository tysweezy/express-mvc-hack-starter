const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-starter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-starter-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-starter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-starter-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-starter'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-starter-production'
  }
};

module.exports = config[env];
