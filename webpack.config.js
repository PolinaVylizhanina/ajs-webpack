const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
    ]
};