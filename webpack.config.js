var path = require("path");
module.exports = {
  entry:  "./src/main.jsx",
  output: {
    path: "build",
    filename: "bundle.js"
  },
  devServer: {
     inline: true,
     port: 8080
  },
  module: {
     loaders: [
        {
           test: /\.jsx$/,
           exclude: /node_modules/,
           loader: 'babel',

           query: {
              presets: ['react']
           }
        }
     ]
  }
};
