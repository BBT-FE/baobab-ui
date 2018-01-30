process.env.NODE_ENV = 'production' // node中设置系统环境变量
const path = require('path') // 该模块用来解析路径
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {

  context: __dirname, // entry配置项的根目录(绝对路径)

  devtool: 'source-map', // 本地开发调试工具, 产生.map文件, 使得原始代码和运行时代码产生映射关系, 类似的eval包裹代码块\

  // 入口文件配置
  entry: {
    index: './src/index.js'
  },

  // 输出文件配置
  output: {
    path: path.resolve(__dirname, './lib'), // 输出地址
    filename: 'baobab-ui.js', // 指定输出后的文件名
    library: 'baobab-ui', // 指定库的名称
    libraryTarget: 'umd' // 指定库的模块输出类型
  },

  externals: { // 依旧可以通过AMD、CMD等模块化引入方式对未被webpack处理的第三方库进行引用
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },

  resolve: {
    extensions: ['.js', '.vue']
  },

  module: {
    rules: [
      {
        test: /.tpl$/,
        loader: 'vue-template-loader',
        options: {
          transformToRequire: {
            img: 'src'
          }
        }
      },
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap']
        })
      },
      {
        test: /.styl$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap', 'stylus-loader?sourceMap']
        })
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
              use: ['css-loader?sourceMap', 'postcss-loader?sourceMap', 'stylus-loader?sourceMap']
            })
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    }),

    new ExtractTextPlugin('baobab-ui.css')
  ]
}

webpack(config, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    chunks: false,
    children: false
  }))
})
