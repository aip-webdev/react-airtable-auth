import * as React from 'react';
import { hydrate, render } from "react-dom"
import {BrowserRouter} from "react-router-dom";
import {App} from "../App";

const renderMethod = module.hot ? render : hydrate;
window.addEventListener('load', () => {
    renderMethod(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    document.getElementById('root'));
});
