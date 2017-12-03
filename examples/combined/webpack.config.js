var path = require('path')
const {parts, assemble} = require('../../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

const genBase = (env) => ([
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
])

const genDev = () => ([
    parts.clean([BUILD_DIR + './dev'], {root:ROOT_DIR}),

    {
        output: {
            path: BUILD_DIR + '/dev',
            filename: '[name].bundle.js'
        },

        devtool: 'eval-source-map',

        devServer: {
            inline: true,
            contentBase: 'src',
            port: '3001'
        }
    }
])

const genProd = () => ([
    parts.clean([BUILD_DIR + './prod'], {root:ROOT_DIR}),

    {
        output: {
            path: BUILD_DIR + '/prod',
            filename: '[name].bundle.[chunkhash].js'
        },

        devtool: false,
        //devtool: "source-map",
    }
])

module.exports = assemble(genBase, genDev, genProd)