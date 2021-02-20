import { Button, TextField } from "@material-ui/core"
import React from "react"

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <TextField />
            </div>
            <div>
                <TextField type="password"/>
            </div>
            <div>
                <Button type="submit" variant="cantained" color="primary">Submit</Button>
            </div>
        </div>
    )
}