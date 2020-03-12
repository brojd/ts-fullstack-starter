const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const paths = require('../paths');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: paths.dist,
    stats: 'minimal',
    progress: true
  }
});
