const path = require("path");

module.exports = {
  entry: "./public/js/public-app.js",
  output: {
    filename: "app-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: false
};
