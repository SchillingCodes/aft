const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const loadPresets = require("./build-utils/presets/loadPresets")

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) =>
  merge(
    {
      entry: "./src/index.js",
      mode: mode,
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      plugins: [new HtmlWebpackPlugin()]
    },
    modeConfig(mode)
  );
