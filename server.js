'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('proxy-middleware');
const url = require('url');
const morgan = require('morgan');
const config = require('./webpack.config.babel');

const argv = require('yargs').argv;

const logger = console;
// Azure 1
const backendUrl = 'http://bemecdev01.intra.sps.com:8000';
// Azure 2
// const backendUrl = 'http://svbe-dev01.vpkgrp.int:8000';
// Azure 3
// const backendUrl = 'http://rdwdcr01.bt.dcsc.be:8000';

const production = !!argv.production;
const port = 3015;
const host = 'localhost';

const app = express();

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  index: path.join(__dirname, 'dist', 'index.html'),
};

if (!production) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      timings: true,
      chunks: false,
    },
  });

  app.use(morgan('dev'));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('/sap/bc', proxy(url.parse(`${backendUrl}/sap/bc`)));

  app.get(/^((?!\/sap).)*$/, (req, res) => {
    res.write(middleware.fileSystem.readFileSync(PATHS.index));
    res.end();
  });
} else {
  logger.info('serving production');
  app.use(express.static(PATHS.dist));
  app.use('/sap/bc', proxy(url.parse(`${backendUrl}/sap/bc`)));

  app.get(/^((?!\/sap).)*$/, (req, res) => {
    res.sendFile(PATHS.index);
  });
}

if (process.env.PORT) {
  app.listen(process.env.PORT);
} else {
  app.listen(port, host, (err) => {
    if (err) {
      logger.log(err);
    }
    logger.info('==> Open up http://%s:%s in your browser.', host, port);
  });
}
