const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    js: path.resolve(__dirname, 'src/js'),
};

module.exports = {
    entry: path.join(paths.js, 'app.js'),
    output: {
        path: paths.dist,
        filename: 'app.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        watchContentBase: true,
        compress: true,
        port: 9000,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};