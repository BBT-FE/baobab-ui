const path = require('path') // 处理路径

// 引入webpack进行打包
const webpack = require('webpack')

// ===== 引入webpack相关插件进行辅助打包 =====
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 主要是抽离css样式
const InlineManifestPlugin = require('inline-manifest-webpack-plugin') // 内联manifest.js 和 保存http请求 - 缓存文件资源

// 引入webpack-chunk-hash
const WebpackChunkHash = require('webpack-chunk-hash') // webpack-md5-hash 实现持久化缓存

// 提取公共模块
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

// 引入package.json文件中的版本号
const version = require('../package.json').version

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  context: __dirname,

  // 多入口 - app/vendor/libs/chunk(低频率工具/代码)
  // 在这里我们划分了公共模块, 那么之后需要提取出频繁共用的公共模块, 做好持久化缓存
  // code splitting 代码分割 - webpack提供了几种添加分割点的方法: COMMONJS/AMD/ES6 webpack2.x 已经支持这三种, 实现按需加载, 加速应用
  entry: {
    // 业务代码 打包入口
    app: [
      './main.js'
    ],

    // 第三方 打包入口
    vendor: [
      'vue',
      'vue-router'
    ]
  },

  devtool: 'source-map',

  // filename/path
  output: {
    filename: 'js/[name].[chunkhash].js', // 如果是开发环境 不要用chunkhash, 减少编译时间
    path: path.resolve(__dirname, '../docs/demo')
  },

  // webpack解析
  resolve: {
    alias: {}, // 解析别名, 引入更简单
    extensions: ['.js', '.vue'] // 自动解析指定扩展名, 使得引入时不带扩展名
  },

  // 指定webpack处理不同模块所使用的loader
  module: {
    rules: [
      {
        test: /.tpl$/,
        loader: 'vue-template-loader', // 使用vue-template-compiler预编译, 提供一个函数将render函数插入到vue组件的选项对象中
        options: {
          transformToRequire: { // 将模板中的img 资源路径 转换成require表达式, 供webpack使用
            img: 'src'
          }
        }
      },
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize') // 开启css 压缩
      },
      {
        test: /.styl$/,
        loader: ExtractTextPlugin.extract(['css-loader?minimize', 'stylus-loader'])
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract({
              use: 'css-loader?minimize!stylus-loader'
            })
          }
        }
      }
    ]
  },

  plugins: [
    // 这里定义的变量都是全局可以访问到的
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    // 指定chunk来 提取公共模块(公共模块分两种：频繁共用的第三方库/页面间公用的组件)
    // 指定共用的vendor来提取公共的库和组件
    // 指定共用的manifest来提取runtime，由于生成的文件很小，为了减少请求个数, 可以将manifest这个js文件内联到html文件中
    new CommonsChunkPlugin({
      name: ['vendor', 'manifest'] // manifest在这里的作用是抽取变动的webpack runtime部分，防止chunk改变依然会引起公共部分的改变, 即 防止 此时的vendor
    }),

    new webpack.HashedModuleIdsPlugin(), // 生成稳定的模块ID, 使缓存持久化, webpack-md5-hash 有时会失效

    new WebpackChunkHash(),

    // 将manifest内联到html中, 减少请求个数
    new InlineManifestPlugin({
      name: 'webpackManifest'
    }),

    // 生成html文件, 并将打包后的模块自动引入到html中
    new HtmlWebpackPlugin({
      template: './index.html',
      version: 'v' + version
    }),

    // extract css into its own file
    new ExtractTextPlugin('css/[name].[contenthash].css')
  ]
}

if (isProduction) {
  config.plugins.push(
    // tree shaking
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    })
  )
}

module.exports = config
