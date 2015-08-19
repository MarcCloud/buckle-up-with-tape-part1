module.exports = {
    entry: './index.js',
    output: {
        filename: './dist/scripts/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.json', '.jsx']
    }
};