const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: {
    app: './src/js/app.js',
    another: './src/js/another.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
        },
        vendorModules: {
          test: /src[\\/]js[\\/]modules/, // 分割の対象
          name: 'vendor-modules', // 出力ファイル名
          minSize: 0,
          minChunks: 2, // モジュールがいくつの場所で使われていれば分割の対象になるか
        },
      }
      
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // loaderの処理体調
        exclude: /node_modules/, // loaderの処理対象外。基本的にnode_moduleはその内部でES5対応をしているので、excludeでOK
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'another.html', // 出力ファイル名
      template: './src/html/another.html', // 入力ファイル名
      chunks: ['another'], // バンドルしたjsのどれを読み込むか。指定がなければすべて読み込まれる
    }),
  ]
};