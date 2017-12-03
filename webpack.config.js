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
        loaders: [
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
        ]
    }
}
