const path = require("path");

module.exports = {
  entry: {
    index: "./index.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: path.resolve("./react-stylex-library/index.js"), //my custom loader
        options: {
          map: {
            "text/css": ["style-loader", "css-loader"],
            javascript: "babel-loader",
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
};
