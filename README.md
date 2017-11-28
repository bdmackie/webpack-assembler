# webpack-assembler
Assemble webpack configs by merging common and custom parts.

Includes two exports:
merge - the default export of webpack-merge for merging configurations
parts - a set of common parts.

## Example

```javascript
const {merge, parts} = require('./webpack.parts')

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
            from: './src/index.html'
        }
    ])
])

module.exports = config
```
