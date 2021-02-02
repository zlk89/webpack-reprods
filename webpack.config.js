const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
    },
    module: {
        rules: [
            {
                test: /\.m?([jt])sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.js', '.json', '.ts', '.tsx']
    }
};
