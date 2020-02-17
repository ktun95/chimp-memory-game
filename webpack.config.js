module.exports = {
    mode: 'development',
    entry: [
        './react/index.js'
    ],
    output: {
        path: __dirname,
        filename: './game/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}