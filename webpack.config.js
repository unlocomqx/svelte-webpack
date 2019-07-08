// Imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { less } = require('svelte-preprocess-less');
const fs = require('fs');
const path = require('path');

// Constants
const constants = {
  isDevelopment: process.env.NODE_ENV === 'development',
};

// Exports
module.exports = {
  devtool: constants.isDevelopment ? 'source-map' : false,
  entry: {
    app: './src/application.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].js',
    path: __dirname + '/dist',
  },
  mode: process.env.NODE_ENV,
  target: 'web',
  resolve: {
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              dev: constants.isDevelopment,
              hotReload: true,
              // emitCss: true,
              legacy: true,
              preprocess: {
                style: less({}, { all: true }),
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: constants.isDevelopment,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'distribution'),
    compress: true,
    port: 1339,
    https: {
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
