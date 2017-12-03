var path = require('path')
const {merge, parts} = require('./webpack.parts')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

var config = merge([
    // Clean
    parts.clean([BUILD_DIR], {root:ROOT_DIR}),

    // Page hosted entry
    parts.page({
        entry: {
            app: SRC_DIR + '/index.js'
        }
    }),

    // Output
    parts.output({
        path: BUILD_DIR,
        filename: 'bundle.[hash:8].js'
    })
])

module.exports = config