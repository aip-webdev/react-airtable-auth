import express from 'express';
import ReactDOMServer from 'react-dom/server';

import {App} from "../App"
import {indexTemplate} from "./indexTemplate";
import React from "react";

const app = express();
app.use('/static', express.static('./dist/client'));
app.use('/img-src', express.static('./dist/img-src'));

app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOMServer.renderToString(App()))
    );
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


