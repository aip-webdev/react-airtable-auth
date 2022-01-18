import React from 'react'
import { hydrate, render } from "react-dom"
import {BrowserRouter} from 'react-router-dom'
import {App} from "../App.tsx";

const div = document.getElementById('root')
const renderFunction = div && div.hasChildNodes() ? hydrate : render

renderFunction(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    div)
