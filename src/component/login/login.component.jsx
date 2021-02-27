import { Button, TextField } from "@material-ui/core"
import React from "react"
import * as LS from "./login.style"
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { auth, GitHubProvider, emailAndPassProvider } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { isLoggedIn, setUserInfo } from "../../actions/user"

const user = window.localStorage.getItem('fun-retrospective')
  ? JSON.parse(window.localStorage.getItem('fun-retrospective'))
  : ''


export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const dispatch = useDispatch()

  const logInWithEmail = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then(res => {
      const userObject = {
        email: res.user.email,
        uid: res.user.uid,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL
      }
      console.log(userObject);
      dispatch(isLoggedIn())
      dispatch(setUserInfo(userObject))
    })
  }

  const loginToApp = () => {
    
    console.log('...............................');
    auth
    .signInWithPopup(GitHubProvider)
    .then(({ user }) => {
      const { email, uid, displayName, photoURL } = user
      console.log(email);
      console.log(uid);
      console.log(displayName);
      console.log(photoURL);

      // window.localStorage.setItem('fun-retrospective', JSON.stringify({
      //   email,
      //   uid,
      //   displayName,
      //   photoURL
      // }))
    })
    .catch(() => {
      console.log('Error');
    })
  }

  const register = () => {
    // if (!name) {
    //   return alert("Please enter a full name")
    // }

    // auth.createUserWithEmailAndPassword((email, password).then(
    //   userAuth => {
    //     userAuth.user.updateProfile({
    //       displayName: name,
    //       photoURL: profilePicture
    //     }).then(() => {
    //       dispatch(login({
    //         email: userAuth.user.email,
    //         uid: userAuth.user.uid,
    //         displayName: name,
    //         photoURL: profilePicture
    //       }))
    //     }).catch(error => alert(error))
    //   }
    // ) 
    // )
  }

  const logout = () => {
    window.localStorage.setItem('fun-retrospective', '')
  }

  return (
    <LS.StyledLoginWrapper>
      <form >
        <div>
          <TextField type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <TextField type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          {!user && <div><Button type="submit" variant="contained" color="primary" onClick={logInWithEmail}>Login</Button></div>}
          {user && <div><Button type="submit" variant="contained" color="primary" onClick={logout}>Logout</Button></div>}
        </div>
      </form>
      <p>
        Not a member?{""}
        <span onClick={register}>Register now</span>
      </p>
      <div><GitHubIcon /></div>
    </LS.StyledLoginWrapper>
  )
}