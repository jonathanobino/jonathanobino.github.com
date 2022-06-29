const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: { import: './src/main.js', dependOn: ['react','plugins'] },
    plugins: { import: ['lazy-react','axios', 'velocity-animate'], dependOn:'react'},
    react: ['react', 'react-dom',],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },]
  },
  optimization:{
    minimize:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './templates/indexTemplate.html'),
      filename: 'index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, './docs')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './docs'),
    },
  }
};
