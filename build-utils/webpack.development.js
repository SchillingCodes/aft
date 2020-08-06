const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html",
            excludeChunks: [ 'server' ]
        })
    ]
});