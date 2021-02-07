var CustomResolverPlugin = require("./plugins/custom-resolver-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    plugins: [new CustomResolverPlugin()],
  },
  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
  },
};
