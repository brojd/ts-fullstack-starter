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
    proxy: {
      '/api': 'http://localhost:9000'
    },
    hot: true,
    contentBase: paths.dist,
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.module\.(scss|sass)$/,
        loader: 'typed-css-modules-loader',
        enforce: 'pre',
        include: paths.src,
        exclude: /node_modules/
      }
    ]
  }
});
