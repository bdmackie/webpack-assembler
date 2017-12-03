var path = require('path')
const {merge, parts} = require('../../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

var config = merge([
    // Page hosted entry
    parts.page({
        entry: {
            app: SRC_DIR + '/index.js'
        },
        template: SRC_DIR + '/index.html'
    }),

    // Output
    parts.output({
        // entry: SRC_DIR + '/index.js',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.[hash:8].js'
        },
        clean: true
    })
])

module.exports = config