const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

require('dotenv').config();

module.exports = merge(common, {
  mode: "production",
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.EnvironmentPlugin([
      "REACT_APP_GOOGLE_API_KEY",
      "REACT_APP_SERVER_URL",
    ]),
  ],
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].[chunkhash].js',
          reuseExistingChunk: true,
          priority: 10,
        },
        react: {
          chunks: 'all',
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          filename: '[name].[chunkhash].js',
          priority: 20,
        },
        three: {
          chunks: 'all',
          name: 'three',
          test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
          filename: '[name].[chunkhash].js',
          priority: 30,
        }
      },
    },
  }
});