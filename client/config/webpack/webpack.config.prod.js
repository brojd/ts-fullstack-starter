const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.config.base')

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js'
  }
})
