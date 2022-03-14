const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
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
  },
});