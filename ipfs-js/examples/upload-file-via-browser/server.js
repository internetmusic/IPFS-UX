'use strict'
let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '178.62.228.107', function (err) {
  if (err) throw new Error(err)
  console.log('Listening at 178.62.228.107:3000')
})
