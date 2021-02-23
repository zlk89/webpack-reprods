const path = require('path');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[contenthash].js',
        chunkFilename: '[contenthash].chunk.js',
        crossOriginLoading: "anonymous",
    },
    optimization: {
        moduleIds: 'deterministic',
        realContentHash: true,
        chunkIds: 'deterministic',
        runtimeChunk: 'single',
    },
    plugins: [
        new SubresourceIntegrityPlugin({
            hashFuncNames: ['sha384'],
            enabled: true,
        }),
    ]
};
