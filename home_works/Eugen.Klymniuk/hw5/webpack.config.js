/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
var path = require('path');


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

	watch: true
};