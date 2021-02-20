import React from "react"
import {  Router } from "@reach/router"
import { TopMenu } from "../top-menu/top-menu.component"
import { Login } from "../login"
import { Welcome } from "../welcome/welcome.component"
import { Despre } from "../despre/despre.component"
 
export const Retrospective = () => {
    return (
        <div>
            <TopMenu />
            <Router>
                <Login path="/login"/>
                <Welcome path="/"/>
                <Despre path="/despre"/>
            </Router>
        </div>
    )
}
