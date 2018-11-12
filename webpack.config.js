const { resolve } = require('path');

const PUBLIC_PATH = resolve(__dirname, 'public');
const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: `${SRC_PATH}/index.js`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tpl$/,
        use: 'raw-loader'
      }
    ]
  },
  devServer: {
    contentBase: PUBLIC_PATH
  }
};