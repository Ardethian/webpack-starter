const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    js: path.resolve(__dirname, 'src/js'),
};

module.exports = env => {

    let plugins = [
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ];

    if(env.prod) {
        plugins.push(new MinifyPlugin());
    }

    return {
        entry: path.join(paths.js, 'app.js'),
        output: {
            path: paths.dist,
            filename: 'app.bundle.js',
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: env.dev,
                                    minimize: !env.dev
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: !!env.dev
                                }
                            }
                        ]
                    })),
                },
                {
                    test: /\.css$/,
                    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            }
                        ]
                    })),
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
        devtool: (env.dev) ? 'cheap-source-map' : false,
        resolve: {
            extensions: ['.js']
        },
    };
}