const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    symlinks: false,
  },
  entry: ['./index.tsx'],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
  ],
};