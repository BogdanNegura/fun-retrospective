import React from "react"
import { Avatar, Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { setUserInfo } from "../../actions/user"

export const TopMenuOption = ({ avatar, Icon, title, button, onClick }) => {
  // const user = useSelector(setUserInfo())
  return (
    <div onClick={onClick}>
      {Icon && <Icon />}
      {/* {avatar && <Avatar src={user?.photoURL}>{user?.email[0]}</Avatar>} */}
      {avatar && <Avatar />}
      {button  && <Button />}
      <h3>{title}</h3>
    </div>
  )
}