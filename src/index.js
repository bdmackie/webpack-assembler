exports.merge = require('webpack-merge')

var parts = {
    /**
     * Assign custom part methods to the
     * assembler parts object.
     */
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