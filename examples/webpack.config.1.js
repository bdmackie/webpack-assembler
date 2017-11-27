var webpack = require('webpack')
var path = require('path')
const {merge, parts} = require('../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const DIST_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './dist')

var config = merge([
    parts.env({
        NODE_ENV: 'development',
        DEBUG: true
    }),

    // Clean
    parts.clean([DIST_DIR], {root:ROOT_DIR}),

    // Simple entry and output.
    {
        entry: SRC_DIR + '/index.js',
        output: {
            path: DIST_DIR,
            filename: 'bundle.js'
        }
    },

    // Copy hosting page.
    parts.copy([
        {
            from: './examples/src/index-copy.html'
        }
    ]),
]);

module.exports = config