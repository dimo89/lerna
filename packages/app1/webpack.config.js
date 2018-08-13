const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    library: 'app1',
    libraryTarget: 'umd'
  },
  mode: 'development',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    symlinks: false
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
    ]
  },
  externals: [
    'react',
    'react-dom',
    '@material-ui/core',
    '@material-ui/icons',
    'react-router-dom',
  ]
};
