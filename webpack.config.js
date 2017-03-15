const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app:'./js/main.js',
    vendor: ['react', 'react-dom','axios','velocity-animate']
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
   plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './rawIndex.html'),
      filename: 'index.html'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all'
    })
  ]
};
