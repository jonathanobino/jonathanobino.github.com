var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', 
      'webpack/hot/only-dev-server', 
      './js/main.js' 
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname),
        filename: 'build.js'
    },
    module: {
        loaders: [
                   {
                       test: /\.js$/,
                       loaders: ['react-hot','babel'],
                       exclude: /node_modules/
                   }
               ]
    },
     plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
};
