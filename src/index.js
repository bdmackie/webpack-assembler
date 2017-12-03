exports.merge = require('webpack-merge')

var parts = {
    assign: function(parts) {
        Object.assign(this, parts)
        return this
    }
}

parts.assign(require('./core'))
    .assign(require('./use'))
    .assign(require('./output'))
    .assign(require('./bundles'))

exports.parts = parts