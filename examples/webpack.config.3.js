var webpack = require('webpack');
var path = require('path');
const parts = require('../src/index.js');

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const DIST_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './dist')

var config = parts.merge([
    // Clean
    parts.clean([DIST_DIR], {root:ROOT_DIR}),

    // Page hosted entry
    parts.page({
        entry: {
            app: SRC_DIR + '/index.js'
        }
    }),

    // Output
    {
        // entry: SRC_DIR + '/index.js',
        output: {
            path: DIST_DIR,
            filename: '[name].bundle.[hash:8].js'
        }
    },

    // Extract bundles.
    parts.extract([
        // Extract remaining vendor bundles.
        {
            name: 'vendor',
            minChunks: parts.isVendor
        },

        // Extract the webpack manifest.
        // This changes with every build.
        {
            name: 'runtime',
            minChunks: Infinity,
        },

    ]), // extractBundles
]);

module.exports = config;