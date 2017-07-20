/**
 * Created by Edward on 18-Jul-17.
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/application.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(__dirname, './src/index.html')
        })
    ]
};