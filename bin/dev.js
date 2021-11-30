const webpack = require('webpack');
const [ webpackClientConfig, webpackServerConfig ] = require('../webpack.config.js');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');
const IS_DEV = process.env.NODE_ENV === 'development';
const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(require('webpack-dev-middleware')(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,

}));
hmrServer.use(require('webpack-hot-middleware')(clientCompiler, {
    path: '/static/__webpack_hmr',
}));
hmrServer.listen(3001, () => {
   if (IS_DEV) console.log('HMR server start on port 3001');
});

let compiler = webpack(webpackServerConfig);
let isFirstRun = true;


 compiler.run( (err) => {
     if (err) {
         if (IS_DEV) console.log('Compilation failed: ', err);
     }
     compiler = webpack(webpackServerConfig);

     compiler.watch({}, (err) => {
         if (err) {
             if (IS_DEV) console.log('Compilation failed: ', err);

         }
         if (IS_DEV) console.log('Compilation was successfully');
     })

     if (isFirstRun) {
         nodemon({
             script: path.resolve(__dirname, '../dist/server/server.js'),
             watch: [
                 path.resolve(__dirname, '../dist/server'),
                 path.resolve(__dirname, '../dist/client'),
             ]
         });
         if (IS_DEV) console.log('Nodemon started');

         isFirstRun = false;
     }
 });







