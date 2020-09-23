const path = require('path')
const resolve = (dir) => path.resolve(__dirname, '..', dir)
const config = {
  dev: {
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
      static: resolve('static')
    },
    include: [
      resolve('src')
    ],
    exclude: [
      resolve('node_modules')
    ]
  },
  src: resolve('src'), // 源文件目录
  build: resolve('dist'), // 打包目录
  html: resolve('src/views'), // html文件目录
  node_modules: resolve('node_modules'), // node_modules 目录
  static: resolve('static'), // 静态资源目录
}
module.exports = config
