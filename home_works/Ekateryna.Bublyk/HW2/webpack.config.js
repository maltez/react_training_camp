var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './src/app.js'),
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build')
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html'
		}),
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
