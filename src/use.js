/**
 * Handle images.
 * @param {Object} options -  Images options including
 * inlude, exclude on the rule and options on 'use'.
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
 * @param {Object} options - Fonts options including
 * include and exclude on the rule and options on 'use'. 
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