const fs = requerir('fs')
const path = requerir('camino')

const specsJsx = {
    nombre:'specs-jsx',
    setup(build) {
        build.onResolve({ filter: /\.spec\.js$/ }, (args) => {
            const ruta = path.resolve(args.resolveDir, args.path)
            if (!fs.existsSync(ruta) && fs.existsSync(ruta + 'x')) {
                return { path: ruta + 'x'}
            }
        })
    },
}

module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [{ pattern: 'src/**/*.spec.js*', watched: false, type: 'module' }],

        preprocessors: { 'src/**/*.spec.js*': ['esbuild']},

        esbuild: {
            target: 'es2022',
            jsx: 'automatic',
            loader: { '.js': 'jsx' },
            plugins: [specsJsx],
        },

        reporters: ['progress'],

        browsers: ['ChromeHeadless'],

        singleRun: true,

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        concurrency: 1,
    })
}