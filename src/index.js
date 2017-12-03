const merge = require('webpack-merge')
exports.merge = merge

var parts = {
    /**
     * Assign custom part methods to the
     * assembler parts object.
     * @param {*} parts 
     */
    assign : function(parts) {
        if (parts && parts.hasOwnProperty('parts'))
            Object.assign(this, parts.parts)
        else
            Object.assign(this, parts)
        return this
    }
}

parts.assign(require('./core'))
    .assign(require('./use'))
    .assign(require('./output'))
    .assign(require('./bundles'))

exports.parts = parts

// Utility function to merge if an array is passed,
// otherwise return the passed config.
const ensureConfig = (config) => (
    Array.isArray(config) ? merge(config) : config
)

/**
 * Assembles a configuration function that recieves a single
 * "env" object contianing the environment commmand line
 * argument passed thorugh to wepack
 * @param {*} genBase - A function to return a base config / parts array.
 * @param {*} genDev - A function to return a dev config / parts array.
 * @param {*} genProd - A function to return a prod config / parts array.
 */
exports.assemble = (genBase, genDev, genProd) => {
    return (env) => {
        var config = genBase ? ensureConfig(genBase(env)) : {}

        if (env && env.production) {
            if (genProd)
                config = merge(config, ensureConfig(genProd(env)))
        } else {
            if (genDev)
                config = merge(config, ensureConfig(genDev(env)))
        }

        // Merge in analyzer if specified as env variable.
        if (env && env.analyze)
            config = merge(config, parts.analyze())

        // config.baseConfig = baseConfig;
        return config
    }
}