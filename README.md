- Create a directory which will be your app directory 
- In your react app directory:-

$ npm init -y
$ npm i -S react react-dom
$ npm i -D babel-core babel-loader babel-preset-latest babel-preset-react react-hot-loader webpack webpack-dev-server
$ npm i -g webpack webpack-dev-server



- Create a webpack.config.js file and type this in:

var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map', 
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	resolve: {
		// modulesDirectories is deprecated
		modules: ['node_modules', 'src'],

		// The '*' allows resolution of modules with other extensions
		extensions: ['.js', '*']      
	},

	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_module/,

			// use react-hot-loader and babel-loader instead of only react-hot and babel
			loader: ['react-hot-loader', 'babel-loader?presets[]=react']
		}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		// .NoErrorsPlugin deprecated, use .NoEmitOnErrorsPlugin instead
		new webpack.NoEmitOnErrorsPlugin()
	]
}

$ webpack-dev-server

- Create index.html  
- Create a directory called 'src' with an index.js file
- Create a directory called 'components' for all your react components and add an app.js file

-npm i -S lodash