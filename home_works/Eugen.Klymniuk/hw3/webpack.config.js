/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		app: path.join(__dirname, 'src/app.js'),
		style: path.join(__dirname, 'src/style.css'),
	},
	
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js'
	},
	
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.js$/,
				loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
				exclude: [ /node_modules/, /build/]
			},
			{
				test: /\.css$/,
				use:  ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
				})
			}
		]
	},
	
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html'
		})
	],
	
	devtool: 'source-map'
};