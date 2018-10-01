const path = require('path');
const {
  CheckerPlugin
} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['core-js', './src/client/app.tsx'],
  performance: {
    hints: false
  },
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      inject: 'body'
    }),
    new ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    })
  ],

  optimization: {
    splitChunks: false
  },

  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};