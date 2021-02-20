import React from "react"
import { render } from "react-dom"
import { Retrospective } from "./component/retrospective/retrospective.component"

const app = <Retrospective />
const here = document.querySelector('#react-will-render-here')

render(app, here)