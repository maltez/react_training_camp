/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
var     path = require('path');
var     HtmlWebpackPlugin = require('html-webpack-plugin');
var     webpack = require('webpack');
var     UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	context: path.join(__dirname, 'src'),
	
	entry: './app.js',
	
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build')
	},
	
	resolve: {
		extensions: ['.js']
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'HW #2 - jQuery validation',
			hash: true,
			template: './index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		}),
		new UglifyJsPlugin({ sourceMap: true })
	],
	
	devtool: 'source-map'
};