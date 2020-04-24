
module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
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
};
