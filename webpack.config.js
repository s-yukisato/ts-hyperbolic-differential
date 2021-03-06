const path = require('path')

module.exports = {
    mode:"production",
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname,"docs"),
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