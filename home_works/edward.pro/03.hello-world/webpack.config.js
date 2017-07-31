var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.join(__dirname, './src/app.js'),
        style: path.join(__dirname, './src/skeleton.css')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, /build/]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                exclude: [/node_modules/, /build/]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(__dirname, 'index.html')
        })
    ],
    watch: true,
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000
    }
};