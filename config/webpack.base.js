const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  html,
  dev: {
    alias
  },
  build
} = require('./config.js')
const getPageEntry = (path) => {
  return fs.readdirSync(path);
}
const HTMLArr = getPageEntry(html)
const HTMLPlugins = [] // html-webpack-plugin 实例
const Enties = {} // entry 入口
HTMLArr.forEach((page) => {
  HTMLPlugins.push(new HtmlWebpackPlugin({
    template: `./src/views/${page}/index.html`,
    filename: `${page}.html`,
    chunks: [page],
    // chunksSortMode: 'manual',
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      minifyCSS: true,
      minifyJS: true,
      removeComments: false
    }
  }))
  Enties[page] = `./src/views/${page}/index.js`;
})
const baseCofig = {
  entry: Enties,
  output: {
    filename: 'js/[name]_[chunkhash:8].js',
    path: build,
  },
  resolve: {
    alias,
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'], // 文件查询扩展
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif|jpeg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'img/[name]_[hash:8].[ext]',
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    ...HTMLPlugins
  ]
}

module.exports = baseCofig
