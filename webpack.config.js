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
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
   plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
