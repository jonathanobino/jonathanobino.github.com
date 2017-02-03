var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:'./js/main.js' ,
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname),
    filename: 'build.js'
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
