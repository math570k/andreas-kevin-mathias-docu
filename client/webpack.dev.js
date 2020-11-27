const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        host: '0.0.0.0',
        historyApiFallback: true,
        proxy: {
            context: ['/refresh_token', '/graphql', '/remove_refresh_token'],
            target: 'http://server:8000/',
        }
    }
});