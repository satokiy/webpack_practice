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
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: { // 何でもOK
          test: /node_modules/, // 分割の対象
          name: 'vendor', // 出力ファイル名
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