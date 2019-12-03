const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: {
        index: path.resolve(__dirname,'../src/index.js')
    },
    output: {
      path: path.resolve(__dirname,'../dist'), // '/Users/stanleyxu/Documents/qrcode/tool/dist',
      filename: '[name].js',
      publicPath: '',
      library: 'input',
      libraryTarget: 'umd'
    },
    watch:true,
    watchOptions:{
        poll:1000,  //轮询间隔时间
        aggregateTimeout:500, //防抖（在输入时间停止刷新计时）
        ignored:/node_modules/
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.json',
        '.vue',
        '.jsx'
      ]
    },
    module: {
      rules: [
        /* config.module.rule('babel') */
        {
          test: /\.js|jsx|mjs$/,
          include: [
            path.resolve(__dirname,'../src')
          ],
          exclude: [
            /(node_modules|bower_components)/
          ],
          use: [
            /* config.module.rule('babel').use('babel') */
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                ],
                plugins: [
                  '@babel/plugin-transform-runtime',
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-object-rest-spread',
                  "@babel/plugin-transform-async-to-generator"
                ]
              }
            }
          ]
        },
        /* config.module.rule('eslint') */
        {
          test: /\.js$/,
          enforce: 'pre',
          include: [
            path.resolve(__dirname,'../src')
          ],
          exclude: [
            /(node_modules|bower_components)/
          ],
          use: [
            {
              loader: 'eslint-loader',
              options: {
                formatter: require('eslint-friendly-formatter')
              }
            }
          ]
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
  };