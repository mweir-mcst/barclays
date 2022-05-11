const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.html",
    module: {
        rules: [{
            test: /^.*$/i,
            type: "asset/resource",
            generator: {
                filename: "[name][ext]",
            }
        }]
    }
}