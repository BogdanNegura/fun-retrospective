import React from "react"
import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { setUserInfo } from "../../actions/user"

export const TopMenuOption = ({ avatar, Icon, title }) => {
  // const user = useSelector(setUserInfo())
  return (
    <div>
      {Icon && <Icon />}
      {/* {avatar && <Avatar src={user?.photoURL}>{user?.email[0]}</Avatar>} */}
      {avatar && <Avatar />}
      <h3>{title}</h3>
    </div>
  )
}