const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const htmlHandler = require('./html-handler');
const forEach = require('lodash/forEach');
const glob = require('glob');

function getEntriesWithHMR(globPath) {
  const entries = {}
  glob.sync(globPath).forEach(entry => {
    const tmp = entry.split('/').splice(-2)
    entries[tmp[0]] = ['eventsource-polyfill', entry]
  })
  return entries
}

const plugins = [
  new ExtractTextPlugin({
    filename: 'css/[name].css'
  }),
  new VueLoaderPlugin()
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //     drop_debugger: true,
  //     drop_console: true
  //   }
  // })
]

module.exports = (options = {}) => ({
  entry: getEntriesWithHMR('./src/*/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   use: [{
      //     loader: 'eslint-loader',
      //     options: {
      //       formatter: require('eslint-friendly-formatter')
      //     }
      //   }]
      // },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ['vue-style-loader', {
                loader: 'css-loader'
              }]
            }
          }
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: path.resolve(__dirname, '/node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        // use: ["style-loader", "css-loader", "sass-loader"]
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'test.html',
  //     filename: 'view/home.html',
  //     favicon: path.resolve(__dirname, '../public/favicon.ico'),
  //     template: path.resolve(__dirname, '../public/index.html')
  //   }),
  plugins: plugins.concat(
    htmlHandler({
      template: path.resolve(__dirname, '../public/index.html'),
      // chunks: ['vendor', 'manifest'],
      // // If you use multiple chunks with commonChunksPlugin, this is the necessary
      // // setting in order to put webpack runtime code (manifest) in front of
      // // all chunks
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ),
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      dist: path.resolve(__dirname, '../dist')
    }
  },
  // devServer
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: '127.0.0.1',
    port: 8009,
    // proxy: {
    //   'api': {
    //     target: 'http://127.0.0.1:8009',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    historyApiFallback: true
  }
})
