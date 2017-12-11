const path = require('path');

module.exports = {
	entry: {
		index: [
			'babel-polyfill',
			'whatwg-fetch',
			'./src/scripts/index'
		]
	},

	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env'],
						plugins: ['syntax-dynamic-import'],
					}
				},
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader",
				}, {
					loader: "css-loader",
				}, {
					loader: "sass-loader",
				}],
			},
		],
	},
}
