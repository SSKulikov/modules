
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader'
              ]
          }
      ]
  },
  plugins: [
      new HTMLWebpackPlugin({
          template: './src/index.html',
          filename: 'main.html'
      }),

      new MiniCssExtractPlugin()
  ]
}