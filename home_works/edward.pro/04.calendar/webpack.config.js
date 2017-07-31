var path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'src/app.js'),
        style: path.join(__dirname, 'src/skeleton.css')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
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
    watch: true,
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3001,
        hot: true
    }
};