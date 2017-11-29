const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Output settings for a library.
 * Defaults to UMD format.
 * @param {Object} options - library options including
 * path, filename, library, libraryTarget and externals 
 */
exports.library = ({
    path, 
    filename, 
    library, 
    libraryTarget = 'umd', 
    externals} = {}) => {
    var output = { path, filename, library, libraryTarget }
    // console.log('output: ', JSON.stringify(output))
    return {
        output,
        externals
    }
}

/**
 * Output settings for a page.
 * @param {Object} options - library options including
 * path, template, title, entry and chunks.
 */
exports.page = ({
    path = '',
    template = require.resolve('html-webpack-plugin/default_index.ejs'),
    title,
    entry,
    chunks
} = {}) => ({
    entry,
    plugins: [new HtmlWebpackPlugin({
        chunks,
        filename: `${path && path + '/'}index.html`,
        template,
        title
    })]
})