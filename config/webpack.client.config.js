const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()];

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom':'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
        path.resolve(__dirname, '../src/client/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test:/\.[jt]sx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? DEV_PLUGINS : [],
    watchOptions: {
        ignored: /dist/,
    },
    stats: "errors-only",
};
