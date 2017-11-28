const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Output settings for a library.
 * Defaults to UMD format.
 * @param {*} param0 
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
 * @param {*} param0 
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