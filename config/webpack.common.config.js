const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
module.exports = (env) => {
    const isProd = env === 'production'
    const modules = {
        ts: {
            test: /\.[tj]sx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: !isProd ? 'tsconfig.dev.json' : 'tsconfig.json',
                    transpileOnly: true,
                    ...(!isProd && {
                        getCustomTransformers: () => ({
                            before: [ReactRefreshTypeScript()],
                        }),
                    }),
                },
            }]
        },
        minicss: {
            test: /\.[sc]ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }]
        },
        sass: {
            test: /\.[sc]s$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        }
                    }
                },
                'sass-loader',

            ],
            exclude: GLOBAL_CSS_REGEXP,
        },
        globalCss: {
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    }

    if (env === 'production') {
        modules.sass.use.splice(3, 0, "postcss-loader")
        modules.globalCss.use.splice(3, 0, "postcss-loader")
    }

    const prodPlugins = [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/Html/Browser.html',
        }),
        new WebpackNotifierPlugin({onlyOnError: true, alwaysNotify: false}),
    ]

    const devPlugins = [...prodPlugins, new ReactRefreshPlugin()]

    const plugins = isProd ? prodPlugins : devPlugins

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            'react-dom': 'react-dom',
        },
    }

    return {
        modules,
        plugins,
        resolve
    }
}
