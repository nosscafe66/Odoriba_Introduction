import classes from './login.module.css'
import React from "react";
import { useCallback, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function Login() {

    const [text, setText] = useState("")
    const handleChange = useCallback((e) => {
        e.target.value.trim()
    })

    const { isAuthenticated, loginWithRedirect } = useAuth0();


    // return (
    //     <div className={classes.Login}>
    //         <form class={classes.LoginForm} method="POST">
    //             <p className={classes.namelabel}>
    //                 <label className={classes.label} htmlFor="ID">ID<span className={classes.mustcontext}>(必須)</span></label>
    //             </p>
    //             <input className={classes.inputname} type="text" name="name" required="required" value={text}
    //                 onChange={handleChange} /><br /><br />
    //             <p className={classes.namelabel}>
    //                 <label className={classes.label} htmlFor="パスワード">パスワード<span className={classes.mustcontext}>(必須)</span></label>
    //             </p>
    //             <input className={classes.inputname} type="tel" name="phonenumber" required="required" value={text} onChange={handleChange} /><br /><br />
    //             {/* <input className={classes.inputage} type="submit" value="Login" /> */}
    //             <button onClick={() => loginWithRedirect()}>Log In</button>
    //         </form>
    //     </div>
    // )
    return isAuthenticated ? null : (
        <button onClick={() => loginWithRedirect()}>LogIn</button>
        );
}