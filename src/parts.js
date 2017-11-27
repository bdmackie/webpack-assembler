// Using a parts based way of configuring webpack by concern.
// Inspired by 
// - https://survivejs.com/webpack/building/bundle-splitting/
// - https://github.com/survivejs-demos/webpack-demo/blob/master/webpack.parts.js

const webpack = require('webpack')
const merge = require('webpack-merge')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const callerPath = require('caller-path')
const path = require('path')

exports.env = (vars) => ({
  plugins: [
    // Setup process environment.
    new webpack.EnvironmentPlugin(vars)
  ],
})

exports.clean = (paths, options, noDefaults) => {
  allOptions = noDefaults
    ? {}
    : {
      verbose: true,
      dry: false
    }
  if (options)
    Object.assign(allOptions, options)
  // console.log('clean-webpack-plugin: root is ' + allOptions.root)
  return {
    // Separate attempts to remove files in the dir before removing the dir itself.
    plugins: [
      new CleanWebpackPlugin(paths, allOptions),
    ]
  }
}

exports.circularDependency = (options, forceOptions) => {
  // console.log('FLAG')
  const allOptions = forceOptions
      ? {}
      : {
          // exclude detection of files based on a RegExp
          exclude: /a\.js|node_modules/,
          // add errors to webpack instead of warnings
          failOnError: true
      }
  if (options)
      Object.assign(allOptions, options)
  // console.log('options', JSON.stringify(allOptions))
  return {
      plugins: [
          new CircularDependencyPlugin(allOptions)
      ]
  }
}

exports.outputLibrary = ({
  path, 
  filename, 
  library, 
  libraryTarget = 'umd', 
  externals} = {}) => {
  var output = { path, filename, library, libraryTarget }
  // console.log('output: ', JSON.stringify(output))
  return {
      output,
      externals
  }
}

exports.copy = (patterns) => ({
  plugins: [
    new CopyWebpackPlugin(patterns),
  ],
})

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
})

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
})

exports.isVendor = ({ resource }) => {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/)
}

exports.analyze = () => ({
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
});

exports.useImages = ({ include, exclude, options } = {}) => ({
  module: {
      rules: [
          {
              test: /\.(png|jpe?g|gif|svg)$/,
              include,
              exclude,

              use: {
                  loader: 'url-loader', // loader: 'file-loader',
                  options,
              },
          },
      ],
  },
})

exports.useFonts = ({ include, exclude, options } = {}) => ({
  module: {
      rules: [
          {
              // Capture eot, ttf, woff, and woff2
              test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              include,
              exclude,

              use: {
                  loader: 'file-loader',
                  options,
              }
          },
      ],
  },
})