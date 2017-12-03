const {merge, parts} = require('../../src/index')

module.exports = merge(
    require('./webpack.config.js'),
    parts.analyze()
)