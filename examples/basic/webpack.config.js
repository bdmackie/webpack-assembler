var path = require('path')
const {merge, parts} = require('../../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

var config = merge([
    parts.env({
        NODE_ENV: 'development',
        DEBUG: true
    }),

    // Clean
    parts.clean([BUILD_DIR], {root:ROOT_DIR}),

    // Simple entry and output.
    {
        entry: SRC_DIR + '/index.js',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js'
        }
    },

    // Copy hosting page.
    parts.copy([
        {
            from: SRC_DIR + '/index.html'
        }
    ]),
])

module.exports = config