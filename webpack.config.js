const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    optimization: {
        moduleIds: 'deterministic',
        realContentHash: true,
        chunkIds: 'deterministic',
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[contenthash].css`,
            chunkFilename: `[contenthash].chunk.css`,
        }),
        new SubresourceIntegrityPlugin({
            hashFuncNames: ['sha384'],
            enabled: true,
        }),
        new HtmlWebpackPlugin()
    ]
};
