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
        await webpackCompiler();
    } catch (e) {
        console.error('Compiler encountered an error.', e);
        process.exit(1);
    }
})();
