var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VersionFile = require('webpack-version-file');

module.exports = {
    entry:{
        entry: path.join(__dirname, 'src/init.js'),
    },

    output:{
        path: path.join(__dirname, 'build'),
		filename: 'bundle.[chunkhash].js',
    },

    resolve: {
        extensions: ['.js','.html','.css']
    },

    plugins: [
		new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true 
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new VersionFile({
              output: './build/version.txt',
              package: './package.json'
        })
	],
    module:{
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports-loader?this=>window"
            },
            {
               test: /\.css$/,
               use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: 'source-map',
	watch: true

};