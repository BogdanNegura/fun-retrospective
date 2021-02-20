import { Link } from "@reach/router"
import React from "react"
import * as TMS from "./top-menu.style"

export const TopMenu = () => {
    return (
        <nav>
            <Link to="/">Acasa</Link>
            <Link to="/despre">Despre</Link>
        </nav>
    )
}