const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
         path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
               test: /.css$/,
               use: [
                 {
                    loader: 'style-loader'
                 },
                 {
                    loader: 'css-loader'
                 }
               ]
             },
             { test: /\.(png|woff|woff2|eot|ttf|svg|eot-fvbane)$/, loader: 'url-loader?limit=100000' },
             {
                test: /\.(ttf|eot|svg|gif|jpg|png|eot-fvbane)(\?[\s\S]+)?$/,
                use: 'file-loader'
             }
        ]
    },  plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
      ]
}

module.exports = config
