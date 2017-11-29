# webpack-assembler
Assemble webpack configs by merging common and custom parts.

Includes two exports:
merge - the default export of webpack-merge for merging configurations
parts - a set of common parts.

# Examples

## Basic

```javascript
const {merge, parts} = require('./webpack.parts')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build/01')

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
            from: './src/index.html'
        }
    ])
])

module.exports = config
```

## Advanced
```javascript
var path = require('path')
const {merge, parts} = require('../src/index')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const DIST_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build/03')

var config = merge([
    parts.circularDependencies(),

    // Clean
    parts.clean([DIST_DIR], {root:ROOT_DIR}),
    
    parts.useFiles(),
    parts.useFonts(),

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
```

## See also

* [API documentation](https://github.com/bdmackie/webpack-assembler/blob/master/docs/API.md)