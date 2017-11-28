const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

/**
 * Setup the node process environment.
 * e.g. 
 *  parts.env({NODE_ENV: 'development'})
 *  => process.env.NODE_ENV === 'development
 * @param {*} vars - An object of variables to set.
 */
exports.env = (vars) => ({
    plugins: [
        new webpack.EnvironmentPlugin(vars)
    ]
})

/**
 * 
 * @param {*} paths - an array of paths to clean
 * @param {*} options - options for clean-webpack-plugin
 * @param {*} noDefaults - Indicates to not use this library's defaults
 */
exports.clean = (paths, options, noDefaults) => {
    let allOptions = noDefaults
        ? {}
        : {
            verbose: true,
            dry: false
        }
    if (options)
        Object.assign(allOptions, options)
    // console.log('clean-webpack-plugin: root is ' + allOptions.root)
    return {
        plugins: [
            new CleanWebpackPlugin(paths, allOptions),
        ]
    }
}

/**
 * Copy straight from source to destination.
 * @param {*} patterns - Patterns to copy, passed through to copy-webpack-plugin
 */
exports.copy = (patterns) => ({
    plugins: [
        new CopyWebpackPlugin(patterns)
    ]
})

/**
 * Detect circular dependencies.
 * @param {*} options - options to pass through to circular-dependency-plugin
 * @param {*} noDefaults - Indicates to not use this library's defaults
 */
exports.circularDependency = (options, noDefaults = false) => {
    // console.log('FLAG')
    const allOptions = noDefaults 
        ? {} 
        : {
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true
        }
    if (options)
        Object.assign(allOptions, options)
    // console.log('options', JSON.stringify(allOptions))
    return {
        plugins: [
            new CircularDependencyPlugin(allOptions)
        ]
    }
}