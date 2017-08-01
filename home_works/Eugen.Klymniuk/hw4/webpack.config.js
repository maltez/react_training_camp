/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: path.join(__dirname, 'src/app.js'),
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build'),
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: [ /node_modules/, /build/ ]
			}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			template:  path.join(__dirname, 'src/index.html'),
			hash: true
		}),
	],
	
	watch: true
};