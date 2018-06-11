const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const InlineManifestPlugin = require('inline-manifest-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const version = require('../package.json').version
const isProduction = process.env.NODE_ENV === 'production'
const config = {
  context: __dirname,

  entry: {
    app: [
      './main.js'
    ],

    vendor: [
      'vue',
      'vue-router'
    ]
  },

  devtool: 'source-map',

  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../docs/demo')
  },

  resolve: {
    alias: {},
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
        loader: ExtractTextPlugin.extract('css-loader?minimize')
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),

    new webpack.HashedModuleIdsPlugin(),

    new WebpackChunkHash(),

    new InlineManifestPlugin({
      name: 'webpackManifest'
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
      version: 'v' + version
    }),

    new ExtractTextPlugin('css/[name].[contenthash].css')
  ]
}

if (isProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    })
  )
}

module.exports = config
