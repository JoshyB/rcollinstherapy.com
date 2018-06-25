const webpack = require("webpack"),
  path = require("path"),
  imagemin = require('imagemin');

module.exports = {
  entry: "./public/js/main.js",
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: "/js/app-bundle.js"
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "./images/[name].[ext]"
            }
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-mozjpeg")({
                  progressive: true,
                  arithmetic: false
                }),
                require("imagemin-optipng")({
                  optimizationLevel: 7
                })
              ]
            }
          }
        ]
      }
    ]
  }
};
