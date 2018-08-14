const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const basePath = __dirname;

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html', //Name of file in ./dist/
    template: 'index.html', //Name of template in ./src
    hash: true,
  })
];

if(process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new BundleAnalyzerPlugin(),
    new DuplicatePackageCheckerPlugin(),
  ];
};

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    symlinks: false,
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      'react-dom': path.resolve(__dirname, "node_modules/react-dom"),
      'history': path.resolve(__dirname, "node_modules/history")
    },
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
    port: 3000,
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
  optimization: {
    nodeEnv: process.env.NODE_ENV,
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     app1: {
    //       chunks: 'async',
    //       name: 'app1',
    //       test: /app1/,
    //       priority: 100,
    //       enforce: true,
    //     },
    //     app2: {
    //       chunks: 'async',
    //       name: 'app2',
    //       test: /app2/,
    //       priority: 100,
    //       enforce: true,
    //     },
    //     framework: {
    //       chunks: 'all',
    //       name: 'framework',
    //       test: /[\\/](react|react-dom|history|react-router-dom)[\\/]/,
    //       priority: 22,
    //       enforce: true,
    //     },
    //     vendor: {
    //       chunks: 'all',
    //       name: 'vendor',
    //       test: /node_modules/,
    //       priority: 10,
    //       enforce: true,
    //     },
        
    //   }
    // }
  },
  plugins: plugins,
};
