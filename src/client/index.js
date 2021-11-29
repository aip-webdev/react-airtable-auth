import * as React from 'react';
import { hydrate, render } from "react-dom"

import {App} from "../App";
import {BrowserRouter} from "react-router-dom";
const renderMethod = module.hot ? render : hydrate;
window.addEventListener('load', () => {
    renderMethod(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    document.getElementById('root'));
});
