const path = require('path');
const webpack = require('webpack');
const webpackDev = require('./webpack.common');

webpackDev.output.publicPath = '/dev-build';
webpackDev.output.path = path.resolve(__dirname, 'dev-build/');
webpackDev.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackDev.devServer = {
  historyApiFallback: true,
    contentBase: './',
    // outputPath: path.resolve(__dirname, 'dev-build/')
};

module.exports = webpackDev;