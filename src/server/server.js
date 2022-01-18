import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server';
import {StaticRouter} from "react-router-dom/server";
import {App} from '../App'
import {indexTemplate} from './indexTemplate'
import helmet from "helmet";

const port = 3000
const app = express()
const jsFiles = []

fs.readdirSync('./public/dist/assets')
    .forEach(file => {
        if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
    })

app.use('/assets', express.static('./public/dist/assets'))
app.use(helmet({contentSecurityPolicy: false}))
app.get('*', async (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(
            <StaticRouter location={req.url}>
                <App/>
            </StaticRouter>
            ),
            ReactDOM.renderToString(
                jsFiles.map((script, index) => <script src={script} key={index}/>)
            )
        ))
})

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
