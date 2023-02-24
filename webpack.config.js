const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const BundleAnalyzer = require("webpack-bundle-analyzer");

const performanceConfig = {
  hints: "warning",
  maxEntrypointSize: 50000,
  maxAssetSize: 100000
};

module.exports = env => {
  const mode = env.mode ? env.mode : "production";

  // added to  changing the hash function to one that is not deprecated
  console.log("mode: ", mode);
  const crypto = require("crypto");
  const crypto_orig_createHash = crypto.createHash;
  crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

  return {
    mode,
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: { collapseWhitespace: true, removeComments: true },
        inject: true
      }),
      new CopyPlugin([
        { from: "src/assets/", to: "assets/", ignore: [".DS_Store"] }
      ]),
      new BundleAnalyzer.BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "bundle-analyzer.html"
      }),
      
      // new CopyPlugin({
      //   patterns: [
      //   { from: "src/assets/", to: "assets/"   }
      //   ]
      // }),
      new WorkboxPlugin.InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "sw.js"
      })
    ],
    devtool: "source-map",
    performance: mode === "production" ? performanceConfig : {}
  };
};
