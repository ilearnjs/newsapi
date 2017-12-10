const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'whatwg-fetch',
		'./src/scripts/news',
	],

	output: {
		filename: 'news-bundle.js',
		path: path.resolve(__dirname, 'src'),
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
