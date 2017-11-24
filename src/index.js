// Using a parts based way of configuring webpack by concern.
// Inspired by 
// - https://survivejs.com/webpack/building/bundle-splitting/
// - https://github.com/survivejs-demos/webpack-demo/blob/master/webpack.parts.js

const _ = require('lodash');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const callerPath = require('caller-path');
const path = require('path')

exports.merge = merge;

exports.env = (vars) => ({
  plugins: [
    // Setup process environment.
    new webpack.EnvironmentPlugin(vars)
  ],
});

const defaultCleanOptions = {
  verbose: true,
  dry: false
}

exports.clean = (paths, options, forceOptions) => {
  if (!options) {
    options = defaultCleanOptions
  }
  if (!forceOptions) {
    options = _.merge(defaultCleanOptions, options)
  }
  console.log('clean-webpack-plugin: root is ' + options.root)
  return {
    // Separate attempts to remove files in the dir before removing the dir itself.
    plugins: [
      new CleanWebpackPlugin(paths, options),
    ]
  }
}

exports.copy = (patterns) => ({
  plugins: [
    new CopyWebpackPlugin(patterns),
  ],
});

exports.page = ({
  path = '',
  template = require.resolve('html-webpack-plugin/default_index.ejs'),
  title,
  entry,
  chunks
} = {}) => ({
  entry,
  plugins: [new HtmlWebpackPlugin({
      chunks,
      filename: `${path && path + '/'}index.html`,
      template,
      title
    })]
});

exports.extract = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
});

exports.isVendor = ({ resource }) => {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}

exports.analyze = () => ({
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
});