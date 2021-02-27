import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Retrospective } from "./component/retrospective/retrospective.component"
import { store } from "./store"

const app = <Provider store={store}><Retrospective /></Provider>
const here = document.querySelector('#react-will-render-here')

render(app, here)