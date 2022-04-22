const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type { import("webpack").Configuration }
 */
module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: ["./src/main.js"],
  output: { filename: "main.js", path: path.resolve(__dirname, "assets") },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              // Use liquid expressions for asset resolution
              // Example: url("{{ logo.svg | asset_url }}");
              url: false,
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Put CSS bundle in the assets folder as a liquid file.
    // Shopify will process the file upon request and return a normal CSS file.
    // Example: {{ theme.css | asset_url | stylesheet_tag }}
    new MiniCssExtractPlugin({
      filename: "main.css.liquid",
    }),
  ],
};
