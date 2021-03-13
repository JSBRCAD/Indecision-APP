const path = require ('path');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'public'),
        filename:"bundle.js"
    },

    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modulles/ 
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader' // Had to intall via yarn all these loader so babel can understand scss*
            ]
        }]

    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase:path.join(__dirname,'public')
    }

};