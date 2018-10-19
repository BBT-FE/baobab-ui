process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const config = require('./base')

webpack(config, (err, stats) => { // 相当于命令行 webpack --config
  if (err) throw err
  console.log(stats.toString({ // stats 准确控制显示哪些包信息
    colors: true, // 等同于 webpack --color
    chunks: false, // 包信息, 设置为false能允许较少的冗长输出
    children: false // 子级信息
  }))
})
