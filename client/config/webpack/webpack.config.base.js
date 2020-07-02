const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../paths');

module.exports = {
  entry: paths.src,
  output: {
    path: paths.dist
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        include: [paths.src, paths.shared],
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.tsx?$/,
        include: [paths.src, paths.shared],
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: paths.src,
        exclude: [/\.module\.(scss|sass)$/, /node_modules/]
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        include: paths.src,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        include: paths.src,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@shared': paths.shared,
      '@client': paths.src
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html',
      filename: 'index.html'
    })
  ]
};
