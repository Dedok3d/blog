const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const mode = process.env.NODE_ENV || dotenv.NODE_ENV || 'development';
const api = process.env.API || dotenv.API;

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: (mode === 'development' ? 'source-map' : false),
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            configFile: 'tsconfig.json'
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './assets/law.svg'
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({ filename: 'style.[contenthash].css', }),
  ],
}