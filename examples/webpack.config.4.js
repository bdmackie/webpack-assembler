const {merge, parts} = require('../src/index')

module.exports = merge(
    require('./webpack.config.3.js'),
    parts.analyze()
);