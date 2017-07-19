var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackAutoInject = require('webpack-auto-inject-version');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: {
        jquery: './js/jquery-3.2.1.js',
        script: './js/script.js',
        style: './css/style.css'
    },

    output: {
        filename: '[name].[hash].js', //Как слить все js файлы в один? http://take.ms/RtljG
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', 'css']
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }) //loader: ExtractTextPlugin.extract('style-loader', 'css-loader') не работает!
            }
        ]
    },

    plugins: [
        new UglifyJsPlugin({
            compress: true,
            extractComments: true,
            sourceMap: false //В чем разница между sourceMap Uglify Plugin и devtool: 'source-map' ?
        }),
        new HtmlWebpackPlugin({
            filename : 'index.html',
            title: 'HomeWork 02',
            template: './index.html',
            inject: 'body',
            favicon: './img/favicon.png',
            //minify: false, //Можно минифицировать HTML (https://github.com/kangax/html-minifier#options-quick-reference), но это не требуется условиями задачи
            hash: false //Хеш добавляется к имени файла при output
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['jquery', 'script'],
            filename: 'bundle.[hash].js',
        }),
        /*
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: true,
                InjectAsComment: true
            },
            componentsOptions: {
                InjectAsComment: {
                    tag: 'Build version: {version} - {date}'
                }
            }
        })
        */
    ],

    /*
    //Сервер стартует командой npm start
    devServer: {
        inline: true,
        hot: true
    },
    */
    devtool: 'source-map',
    watch: true
};
