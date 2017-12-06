const path = require('path');
const w = require('../webpack.config');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

const ROOT = path.resolve(".");
const STORY_BOOK_STATIC = ROOT + '/docs/';

const tsLoader = {
  test: /\.tsx?$/,
  loader: [`ts-loader?${JSON.stringify({ configFile: ROOT + '/tsconfig.pages.json' })}`],
  exclude: /node_modules/
};

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.plugins = [...config.plugins, new CleanWebpackPlugin([STORY_BOOK_STATIC])],
  config.module.rules = [...config.module.rules, tsLoader];
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
