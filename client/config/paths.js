const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
  styles: path.resolve(__dirname, '../src/styles'),
  dist: path.resolve(__dirname, '../../server/dist/server/src/public'),
  shared: path.resolve(__dirname, '../../shared/src')
};
