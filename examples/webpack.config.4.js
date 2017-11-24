const parts = require('../src/index').parts;

module.exports = parts.merge(
    require('./webpack.config.3.js'),
    parts.analyze()
);