const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const dist = path.resolve(__dirname, "dist")
const public = path.resolve(__dirname, "public")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: dist,
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html?$/,
        use: "html-loader",
      },
      {
        test: /\.(css|scss|sass)/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@/config": path.resolve(__dirname, "src/config"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/routes": path.resolve(__dirname, "src/routes"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    static: { directory: public },
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendor: {
          name() {
            return "vendor"
          },
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // minimize: true,
    // minimizer: [new TerserWebpackPlugin()],
    providedExports: true,
    usedExports: true,
    mangleExports: "deterministic",
  },
}

if (process.env.NODE_ENV === "development") {
  module.devtool = "inline-source-map"
}
