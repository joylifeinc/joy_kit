const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const minimist = require('minimist');
const options = minimist(process.argv.slice(2));

// Paths
const ROOT = path.resolve(".");
const _source = ROOT + "/src/";
const _dist = ROOT + "/dist/";
const _pages = ROOT + "/docs/";
const _example = ROOT + '/example/';
const _example_source = ROOT + '/example/src/';


const generateEntry = (example) => {
  return (example) ? ([
      _source + 'index.ts',
      _example_source + 'app.tsx'
    ]) : ({
      index: _source + 'index.ts'
    })
};

const generateOutput = (example) => {
  return (example) ? ({
    path: _pages,
    filename: '[name].js'
  }) : ({
    path: _dist,
    filename: "[name].js",
    library: ['JoyKit'],
    libraryTarget: 'umd',
    publicPath: '/dist/'
  })
};

/**
 * Webpack config Command Line Arguments
 * 
 * @param {any} env build | example
 */
module.exports = (env) => {

  const example = !!(env === 'example');
  const buildexample = !!(env === 'buildexample');

  let entry = generateEntry((example || buildexample));
  let output = generateOutput((example || buildexample));

  const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new CleanWebpackPlugin([_dist], { allowExternal: true })
  ];

  const tsLoader = {
    test: /\.tsx?$/,
    loader: (example || buildexample) ? 
      [`ts-loader?${JSON.stringify({ configFile: ROOT + '/tsconfig.pages.json' })}`] :
      [`ts-loader?${JSON.stringify({ configFile: ROOT + '/tsconfig.json' })}`],
    exclude: /node_modules/
  };

  const cssLoader = {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  };

  const sassLoader = {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/,
    loader: 'url-loader?limit=512',
    options: {
      publicPath: 'src/assets'
    }
  };

  if (example) {
    entry.splice(0, 0, 'react-hot-loader/patch')
    entry.splice(0, 0, 'webpack/hot/only-dev-server')
    tsLoader.loader.splice(0, 0, 'react-hot-loader/webpack');
    plugins.push(
      new HtmlWebpackPlugin({
        template: _example_source + 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    )
  };

  if (buildexample) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: _example_source + 'index.html'
      }),
      new webpack.optimize.UglifyJsPlugin()
    )
  }

  const externals = ((example | buildexample)) ? undefined : ([
    'react',
    'react-dom',
    'react-portal',
    'velocity-animate',
    'velocity-animate/velocity.ui',
    'velocity-react',
    'glamor',
    'debug'
  ]);

  const devServer = {
    contentBase: _pages,
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    port: 9000,
    open: true
  };

  return {
    context: ROOT,
    devtool: 'inline-source-map',
    entry,
    output,
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    plugins,
    module: {
      rules: [
        tsLoader,
        cssLoader,
        sassLoader,
        assetLoader
      ]
    },
    externals,
    devServer
  }
};