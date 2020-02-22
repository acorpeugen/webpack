const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules\/(jquery|bootstrap|popper\.js)/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new CopyPlugin([
      {
        from: './src/audio',
        to: './audio',
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      },
      {
        from: './src/video',
        to: './video'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ],
  },
});
