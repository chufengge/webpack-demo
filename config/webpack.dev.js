const path = require('path')
const {
  dev: {
    include
  },
  build
} = require('./config.js')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.js')
const {
  merge
} = require('webpack-merge')
const webpackDev = {
  mode: 'development',
  stats: {
    colors: true
  },
  devServer: {
    port: 9000,
    contentBase: build
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader'
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
module.exports = merge(webpackDev, baseConfig)
