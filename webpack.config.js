const path = require('path')

module.exports = {
    mode:"development",
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        // import時の拡張子
        extensions: [
            ".ts",
            ".js"
        ]
    }
}