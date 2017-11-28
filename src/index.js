exports.merge = require('webpack-merge')

var parts = {}
Object.assign(parts, require('./core'))
Object.assign(parts, require('./use'))
Object.assign(parts, require('./output'))
Object.assign(parts, require('./bundles'))
exports.parts = parts