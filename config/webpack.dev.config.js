'use strict';

const path = require('path');
const webpack = require('webpack');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

const PATHS = {
  app: path.join(__dirname, '..', 'app'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
  ],
  module: {
    loaders: [
      // local files: css modules
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]',
          'postcss',
        ],
        include: PATHS.app,
      },
      // external css files
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: PATHS.app,
      },
    ],
  },
  postcss() {
    return [
      stylelint(),
      reporter(),
    ];
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
