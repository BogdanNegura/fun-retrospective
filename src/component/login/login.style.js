import { Button, Input, TextField } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from "styled-components"

export const StyledLoginWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const StyledLoginFormButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const StyledEmailTextField = styled.input`
  height: 40px;
  border: 1px solid grey;
  background-color: white;
  border: 2px solid grey;
  font-size: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`

export const StyledLGithubButton = styled(Button)`
  width: 250px;
  height: 50px;
  font-size: 15px;
  color: white !important;
  background-color: #0074b1 !important;
`

export const StyledLeftLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    color: grey;
    display: flex;
    justify-content: center;
  }
`

export const StyledGithubIcon = styled(GitHubIcon)`
  margin-right: 7px; 
`

export const StyledLoginButton = styled(Button)`
  background-color: #0074b1 !important; 
`

export const StyledLoginRegister = styled.p`
  display: flex;
  justify-content: center;

  & > span {
    padding-left: 5px;
    cursor: pointer;
    color: #0074b1;
  }
`