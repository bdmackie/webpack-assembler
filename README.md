# webpack-assembler
Assemble webpack configs by merging common and custom parts.

It passes through most options to the underlying webpack plugins without trying to change
the paradigm too much. The result is reduced webpack config size without too much loss of
control.

It includes two exports:
* merge - the default export of webpack-merge for merging configurations
* parts - a set of common parts.

Also easily brings in these dependencies:
- circular-dependency-plugin
- clean-webpack-plugin
- copy-webpack-plugin
- file-loader
- html-webpack-plugin
- url-loader
- webpack-bundle-analyzer
- webpack-merge

Related modules:
- [webpack-assembler-react](https://www.npmjs.com/package/webpack-assembler-react)

# Examples

## Basic

```javascript
const {merge, parts} = require('webpack-assembler')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

var config = merge([
    parts.env({
        NODE_ENV: 'development',
        DEBUG: true
    }),

    // Output
    parts.output({
        entry: SRC_DIR + '/index.js',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js'
        },
        clean: true
    }),

    // Copy hosting page.
    parts.copy([
        {
            from: './src/index.html'
        }
    ])
])

module.exports = config
```

## A bit more
```javascript
var path = require('path')
const {merge, parts} = require('webpack-assembler')

const ROOT_DIR = __dirname
const SRC_DIR = exports.SRC_DIR = path.resolve(ROOT_DIR, './src')
const BUILD_DIR = exports.DIST_DIR = path.resolve(ROOT_DIR, './build')

var config = merge([
    parts.circularDependencies(),

    // Page hosted entry
    parts.page({
        entry: {
            app: SRC_DIR + '/index.js'
        }
    }),

    // Output
    parts.output({
        output: {
            path: BUILD_DIR,
            filename: '[name].bundle.[hash:8].js'
        },
        clean: true
    }),

    // Use
    parts.useFiles(),
    parts.useFonts(),

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

## Advanced
```javascript
var path = require('path')
const {parts, assemble} = require('webpack-assembler')

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
```

## See also

* [API documentation](https://github.com/bdmackie/webpack-assembler/blob/master/docs/API.md)
* [Examples](https://github.com/bdmackie/webpack-assembler/blob/master/examples)