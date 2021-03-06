const assembler = require('../../src/index')

var parts = {}

parts.customOutput = ({path, filename}) => (
    {
        // entry: SRC_DIR + '/index.js',
        output: {
            path: path,
            filename: filename
        }
    }
)

assembler.parts.assign(parts)
module.exports = assembler