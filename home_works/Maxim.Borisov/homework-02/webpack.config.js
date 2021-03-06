var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        script: path.join(__dirname, './src/js/script.js'),
        style: path.join(__dirname, './src/css/style.css')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new UglifyJsPlugin({
            compress: true,
            extractComments: true,
            sourceMap: false //В чем разница между sourceMap Uglify Plugin и devtool: 'source-map'?
        }),
        new HtmlWebpackPlugin({
            filename : 'index.html',
            title: 'HomeWork 02',
            template: './src/index.html',
            inject: 'body',
            favicon: './src/img/favicon.png',
            //minify: false, //Можно минифицировать HTML (https://github.com/kangax/html-minifier#options-quick-reference), но это не требуется условиями задачи
            hash: false //Хеш добавляется к имени файла при output'е
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module:{
        loaders:[
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: 'source-map',
    watch: false
};
