'use strict';

const pkg = require('../../package.json');

exports = module.exports = () => {
  return {
    'api-path': '/api/v0/',
    'user-agent': `/node-${pkg.name}/${pkg.version}/`,
    host: '178.62.228.107',
    port: '5001',
    protocol: 'https'
  }
}
