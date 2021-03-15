const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }, devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 6060
    }, plugins: [ new HTMLPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}