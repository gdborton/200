const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({})
  ]
}
