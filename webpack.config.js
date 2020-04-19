
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.html'
  //   })
  // ]
};
