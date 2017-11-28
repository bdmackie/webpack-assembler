exports.merge = require('webpack-merge')

var parts = {
    add: function(parts) {
        Object.assign(this, parts)
        return this
    }
}

parts.add(require('./core'))
    .add(require('./use'))
    .add(require('./output'))
    .add(require('./bundles'))

exports.parts = parts