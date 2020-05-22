const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app:'./js/main.js',
    vendor: ['react', 'react-dom','axios','velocity-animate']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  optimization:{

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './templates/indexTemplate.html'),
      filename: 'index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'docs')
  }
};
