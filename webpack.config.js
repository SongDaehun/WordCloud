'use strict'
const path = require('path');

module.exports = {
	mode : "development",
	entry : {
		main : ['./src/main.js']
	},
	output : {
		path : path.resolve(__dirname, './build'),
		filename : '[name].js'
	},
	module : {
		rules : [{
			test : /\.js$/,
			include : path.resolve(__dirname, './src'),
			loaders : 'babel-loader'
		}]
	},
	plugins :[],
	devServer:{
		inline : false,
		contentBase : './public',
		host : 'localhost',
		port : 8080
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
	
}