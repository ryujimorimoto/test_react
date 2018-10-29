module.exports = {
  entry: './src/js/App.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets:['env', 'react']
        }
      }
    ]
  }
};
