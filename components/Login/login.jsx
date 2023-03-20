import classes from './login.module.css'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function LoginButton() {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    return isAuthenticated ? (
        <button className={classes.loginbutton} onClick={() => loginWithRedirect()}>Login</button>) : null;
}