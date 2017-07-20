var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
	entry: {
		app: path.join(__dirname, './src/js/app.js'),
		style: path.join(__dirname, './src/css/style.css')
	},
	output: {
		//publicPath: 'http://localhost:8080/',
		filename: '[name].[hash].js',
		path: path.join(__dirname, 'build')
	},
	plugins: [
		new ExtractTextPlugin('style.[hash].css', {
			allChunks: true
		}),
		new UglifyJsPlugin({
			compress: true,
			extractComments: true,
			sourceMap: false
		}),
		/*
		new HtmlWebpackPlugin({
            filename : '../index.html',
            title: 'HomeWork 03',
            template: './index.html',
            inject: 'body',
            favicon: './src/img/favicon.png',
            //minify: false, //Можно минифицировать HTML (https://github.com/kangax/html-minifier#options-quick-reference), но это не требуется условиями задачи
            hash: false //Хеш добавляется к имени файла при output'е
        }),
        */
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /build/],
				loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader']
			}
		],
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: 'css-loader'
			})
		}]
	},
	devtool: 'source-map',
	watch: false
};
