module.exports = {
    entry: './src/scripts/news',
    output: {
        filename: './src/news-bundle.js',
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },

    devtool: 'sourcemap',
}