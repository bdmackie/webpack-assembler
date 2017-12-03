var path = require('path')
const {parts, assemble} = require('../../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

const genBase = (env) => [
    // Env
    parts.env({
        NODE_ENV: (env && env.production) ? 'production' : 'development',
        DEBUG: !env || !env.production
    }),
    parts.circularDependency(),
    
    // Page hosted entry
    parts.page({
        entry: {
            app: SRC_DIR + '/index.js'
        }
    }),

    // Handle extracted bundles.
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
    ]), // extractBundles
]

const genDev = () => [
    // Output
    parts.output({
        // entry: SRC_DIR + '/index.js',
        output: {
            path: BUILD_DIR + '/dev',
            filename: '[name].bundle.[hash:8].js'
        },
        clean: true
    }),

    // Dev server
    {
        devtool: 'eval-source-map',
        devServer: {
            inline: true,
            contentBase: 'src',
            port: '3001'
        }
    }
]

const genProd = () => [
    // Output
    parts.output({
        output: {
            path: BUILD_DIR + '/prod',
            filename: '[name].bundle.[hash:8].js'
        },
        clean: true
    }),

    {
        devtool: false,
    }
]

module.exports = assemble(genBase, genDev, genProd)