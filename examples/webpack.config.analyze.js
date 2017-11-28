const {merge, parts} = require('../src/index')

module.exports = merge(
    require('./webpack.config.04.js'),
    parts.analyze()
)