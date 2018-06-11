process.env.NODE_ENV = 'production' // node中设置系统环境变量
const path = require('path') // 该模块用来解析路径
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {

  context: __dirname,

  devtool: 'source-map',

  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'baobab-ui.js',
    library: 'baobab-ui',
    libraryTarget: 'umd'
  },

  externals: {
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
        }),
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

    new ExtractTextPlugin('baobab-ui.css'),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      minimize: true
    })
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
