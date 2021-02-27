import React from "react"
import * as TMS from "./top-menu.style"

export const TopMenu = () => {
    return (
        <TMS.Nav>
            <TMS.StyledLink to="/">Acasa</TMS.StyledLink>
            <TMS.StyledLink to="/about">About</TMS.StyledLink>
            <TMS.StyledLink to="/dashboard">Dashboard</TMS.StyledLink>
        </TMS.Nav>
    )
}