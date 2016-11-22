var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    'test': /\.js?$/,
    'exclude': /node_modules/,
    'loader': 'babel',
    'query': {
      'presets': [
        'es2015',
        'react',
        'stage-0'
      ],
      'plugins': [
        ['transform-react-jsx', { 'pragma': 'h' }]
      ]
    }
  }
];

module.exports = {
  devtool: 'source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  }
};
