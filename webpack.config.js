const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['index', 'project'];

module.exports = {
  mode: 'development',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [].concat(
    pages.map(
      (page) => new HtmlWebpackPlugin({
        inject: true,
        template: `./src/${page}.html`,
        filename: `${page}.html`,
        favicon: './src/images/favicon.png',
        chunks: [page],
      }),
    ),
  ),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};