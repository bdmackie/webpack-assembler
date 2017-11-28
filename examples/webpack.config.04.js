var path = require('path')
const {merge, parts} = require('../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const DIST_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build/03')

var config = merge([
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

    // Split bundles.
    parts.split([
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
        }
    ]) // extractBundles
])

module.exports = config