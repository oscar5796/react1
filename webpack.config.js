module.exports = {
  // JavaScript entry point
  entry: './main.js',
  // JavaScrip bundle file
  output: {
    path: '/',
    filename: 'index.js',
    sourceMapFilename: 'index.map'
  },
  devtool: '#source-map',
  // Setup server
  devServer: {
    inline: true,
    port: 8081
  },
  module: {
    // JS, JSX and SASS loaders
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};