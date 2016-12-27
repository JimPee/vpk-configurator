'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, '..', 'app'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
        ),
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: PATHS.app,
      },
    ],
  },
  postcss() {
    return [
      autoprefixer(),
    ];
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(PATHS.dist, {
      root: process.cwd(),
      verbose: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
