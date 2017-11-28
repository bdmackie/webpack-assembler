const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Splits bundles.
 * @param {*} bundles 
 */
exports.split = (bundles) => ({
    plugins: bundles.map((bundle) => (
        new webpack.optimize.CommonsChunkPlugin(bundle)
    ))
})

/**
 * Determines if a bundle is a vendor bundle
 * i.e. is installed in node_modules
 * @param {*} param0 
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