const path = require('path');

module.exports = {
  mode: "development",
  entry: './main.js',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx", {pragma: "createElement"}]]
          }
        }
      }
    ]
  },
}