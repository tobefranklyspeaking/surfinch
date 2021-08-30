const path = require('path');

var SRC_DIR = path.join(__dirname, '/client/');
var PUB_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: `${SRC_DIR}index.js`,
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: PUB_DIR
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
}