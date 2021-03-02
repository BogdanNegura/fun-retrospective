import { Avatar, Button, Menu, MenuItem } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { isLoggedOut, resetUserInfo } from "../../actions/user"
import { TopMenuOption } from "../topmenu-option/topmenu-option.component"
import * as TMS from "./top-menu.style"

export const TopMenu = () => {
  const [userDropdownElement, updateUserDropdownElement] = useState(null)  
	const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("......TEST");
        dispatch(isLoggedOut())
        dispatch(resetUserInfo())
    }

		const handleOpenMenuClick = e => {
			updateUserDropdownElement(e.currentTarget)
			console.log("click now!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		}

		const handleCloseMenuClick = e => {
			updateUserDropdownElement(null)
		}

    return (
        <TMS.Nav>
						<MenuItem><TMS.StyledLink to="/">Home</TMS.StyledLink></MenuItem>
						<MenuItem><TMS.StyledLink to="/about">About</TMS.StyledLink></MenuItem>
						<MenuItem><TMS.StyledLink to="/dashboard">Dashboard</TMS.StyledLink></MenuItem>
						<Button aria-controls="simple-menu" aria-haspopup={true} onClick={handleOpenMenuClick}><Avatar/></Button>
							<Menu anchorEl={userDropdownElement} keepMounted open={Boolean(userDropdownElement)}>
									<MenuItem onClick={handleCloseMenuClick}>My account</MenuItem>
									<MenuItem onClick={handleCloseMenuClick}>Profile</MenuItem>
									<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
        </TMS.Nav>
    )
}