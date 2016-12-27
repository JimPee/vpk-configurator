'use strict';

const merge = require('webpack-merge');
const baseConfig = require('./config/webpack.base.config');
const devConfig = require('./config/webpack.dev.config');
const prdConfig = require('./config/webpack.prd.config');

const TARGET = process.env.npm_lifecycle_event;

let config = {}; // eslint-disable-line
switch (TARGET) {
  case 'dist':
    config = merge.smart(baseConfig, prdConfig);
    break;
  default:
    config = merge.smart(baseConfig, devConfig);
}

module.exports = config;
