const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const loadPresets = require("./build-utils/presets/loadPresets")
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode: mode,
      entry: {
        main: './src/js/index.js'
      },
      output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
      },
      target: 'web',
      devtool: 'source-map',
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
          new OptimizeCssAssetsPlugin({})
        ]
      },
      module: {
        rules: [
          {
            // Transpiles ES6-8 into ES5
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            // Loads the javacript into html template provided.
            // Entry point is set below in HtmlWebPackPlugin in Plugins 
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: "file-loader"
              }
            ]
          }
        ]
      }
    },
    modeConfig(mode)
  );
}