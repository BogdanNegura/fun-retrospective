import { Button, TextField } from "@material-ui/core"
import React from "react"
import * as LS from "./login.style"
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { auth, GitHubProvider } from "../../config/firebase";

const user = window.localStorage.getItem('fun-retrospective')
    ? JSON.parse(window.localStorage.getItem('fun-retrospective'))
    : ''
console.log(user);

export const Login = () => {
    const loginToApp = () => {
        auth
        .signInWithPopup(GitHubProvider)
        .then(({ user }) => {
            const { email, uid, displayName, photoURL } = user
            console.log(email);
            console.log(uid);
            console.log(displayName);
            console.log(photoURL);

            window.localStorage.setItem('fun-retrospective', JSON.stringify({
                email,
                uid,
                displayName,
                photoURL
            }))
        })
        .catch(() => {
            console.log('Error');
        })
    }

    const logout = () => {
        window.localStorage.setItem('fun-retrospective', '')
    }

    return (
        <LS.StyledLoginWrapper>
            <div><GitHubIcon /></div>
            <div>
                <TextField type="text" placeholder="email"/>
            </div>
            <div>
                <TextField type="password" placeholder="password"/>
            </div>
            {!user && <div><Button type="submit" variant="contained" color="primary" onClick={loginToApp}>Login</Button></div>}
            {user && <div><Button type="submit" variant="contained" color="primary" onClick={logout}>Logout</Button></div>}
        </LS.StyledLoginWrapper>
    )
}