const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackConfig = require('./config/webpack.common.config')

module.exports = (env, argv) => {
    const modeEnv = argv.mode || 'development'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        minimizer: [
            new TerserPlugin(),
        ],
    }

    return {
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
        ],
        resolve: config.resolve,
        module: {
            rules: [
                config.modules.ts,
                config.modules.sass,
                config.modules.globalCss,
            ],
        },
        entry: {
            main: './src/server/server.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './public/dist/server'),
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
        target: 'node',
        externals: [nodeExternals()],
    }
}
