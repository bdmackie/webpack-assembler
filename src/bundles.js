const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Splits bundles.
 * @param {Object[]} bundles - An array of bundle configuration passed
 * through to CommonsChunkPlugin
 */
exports.split = (bundles) => ({
    plugins: bundles.map((bundle) => (
        new webpack.optimize.CommonsChunkPlugin(bundle)
    ))
})

/**
 * Checks if a bundle is a vendor bundle
 * i.e. is installed in node_modules
 * Used as an include filter for split to 
 * create a 'vendor bundle'.
 * @param {Object} options
 */
exports.isVendor = ({ resource }) => {
    return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/)
}

/**
 * Analyzes bundles for diagnostics.
 */
exports.analyze = () => ({
    plugins: [
        new BundleAnalyzerPlugin(),
    ]
})