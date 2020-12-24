const path = require('path');

module.exports = {
  entry: {
    joy: './src/js/index.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: '[name].js'
  }
}
