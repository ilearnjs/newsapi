module.exports = {
	entry: [
		'babel-polyfill',
		'whatwg-fetch',
		'./src/scripts/news'
	],

	output: {
		filename: './src/news-bundle.js',
	},

	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},

	devtool: 'sourcemap',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}
		],
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
}
