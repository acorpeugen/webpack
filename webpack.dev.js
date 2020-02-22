const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    contentBasePublicPath: '/',
    port: 9000,
    compress: true,
    watchContentBase: true,
    hot: true,
  },
});
