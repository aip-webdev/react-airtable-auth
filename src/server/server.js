import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import helmet from 'helmet';

import {App} from "../App"
import {indexTemplate} from "./indexTemplate";
import React from "react";
const IS_DEV = process.env.NODE_ENV !== 'production';

const PORT = IS_DEV ? process.env.PORT || 4000 : process.env.PORT || 3000;

const app = express();
if (!IS_DEV) {
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
    console.log(`Server started on http://localhost:${PORT}`);
})


