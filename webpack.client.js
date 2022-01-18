const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
const webpackConfig = require('./config/webpack.common.config')

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [],
    }

    if (isProd) {
        optimizations.minimizer.push(new TerserPlugin())
    }

    return {
        devServer: {
            watchFiles: path.join(__dirname, "./public/dist"),
            compress: true,
            port: 3001,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: config.resolve,
        module: {
            rules: [
                config.modules.ts,
                config.modules.sass,
                config.modules.globalCss,
            ],
        },
        plugins: config.plugins,
        entry: {
            main: './src/client/client.js'
        },
        output: {
            filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
            path: path.resolve(__dirname, './public/dist'),
            publicPath: `${isProd ? '.' : ''}/`,
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
        stats: "errors-only",
    }
}
