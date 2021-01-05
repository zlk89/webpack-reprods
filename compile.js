const webpack = require('webpack');
const config = require('./webpack.config');

function webpackCompiler() {
    return new Promise((resolve, reject) => {
        const compiler = webpack(config);

        compiler.run((err, stats) => {
            const jsonStats = (stats && stats.toJson()) || {};
            console.info('Webpack compile completed.');
            if (err) {
                console.error('Webpack compiler encountered a fatal error.', err);
                return reject(err);
            }
            return resolve(jsonStats);
        });
    });
}

(async function compile() {
    try {
        console.info('Run compiler');
        const stats = await webpackCompiler();
        const filteredWarnings = stats.warnings.filter(warning => !warning.includes('Conflicting order'));
        if (filteredWarnings.length) {
            console.error('Config set to fail on warning, exiting with status code "1".');
            process.exit(1);
        }
    } catch (e) {
        console.error('Compiler encountered an error.', e);
        process.exit(1);
    }
})();
