import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import helmet from 'helmet';

import {App} from "../App"
import {indexTemplate} from "./indexTemplate";
import React from "react";

const PORT = process.env.PORT || 3000;

const app = express();
if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }))
}
app.use('/static', express.static('./dist/client'));
app.use('/img-src', express.static('./dist/img-src'));

app.get('*', async (req, res) => {
    await res.send(
        indexTemplate(ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                {App()}
            </StaticRouter>
        ))
    );
});

app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'production') console.log(`Server started on http://localhost:${PORT}`);
})


