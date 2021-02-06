const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    plugins: [
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: '[fullhash].css',
            chunkFilename: '[fullhash].chunk.css',
        }),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[contenthash].js',
        chunkFilename: '[contenthash].chunk.js',
    },
};
