const path = require("path");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },

  // 새로고침 없이 결과물 출력.
  devServer: {
    contentBase: "./dist",
  },
};
