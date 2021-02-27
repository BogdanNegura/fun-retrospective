import React from "react"
import {  Router } from "@reach/router"
import { TopMenu } from "../top-menu/top-menu.component"
import { Login } from "../login"
import { Welcome } from "../welcome/welcome.component"
import { Dashboard } from "../dashboard/dashboard.component"
import { Room } from "../room/room.component"
import { About } from "../about"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { auth } from "../../config/firebase"
 
export const Retrospective = () => {
    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    console.log(user);
    // useEffect(() => {
    //     auth.onAuthStateChanged(userAuth => {
    //         if (userAuth) {
    //             dispatch(login({
    //                 email: userAuth.email,
    //                 uid: userAuth.uid,
    //                 displayName: userAuth.displayName,
    //                 photoURL: userAuth.photoURL
    //             }))
    //         } else {
    //             dispatch(logout())
    //         }
    //     })
    // }, [])

    return (
      <div className="app">
        <TopMenu />
        {!user.logged ? 
          <Login path="/login" /> :
            <Router>
              <Welcome path="/" />
              <About path="/about"/>
              <Dashboard path="/dashboard" />
              <Room path="/room/:dasta" />
            </Router>
        }
      </div>
    )
}
