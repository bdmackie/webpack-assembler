/**
 * Handle images.
 * @param {*} param0 
 */
exports.useImages = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include,
                exclude,

                use: {
                    loader: 'url-loader', // loader: 'file-loader',
                    options
                }
            }
        ]
    }
})

/**
 * Handle fonts.
 * @param {*} param0 
 */
exports.useFonts = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                include,
                exclude,

                use: {
                    loader: 'file-loader',
                    options
                }
            }
        ]
    }
})