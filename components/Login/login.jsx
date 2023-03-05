import classes from './login.module.css'
import { useCallback, useState } from "react";

export function Login() {

    const [text, setText] = useState("")
    const handleChange = useCallback((e) => {
        e.target.value.trim()
    })


    return (
        <div className={classes.Login}>
            <form class={classes.LoginForm} method="POST">
                <p className={classes.namelabel}>
                    <label className={classes.label} htmlFor="ID">ID<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <input className={classes.inputname} type="text" name="name" required="required" value={text}
                    onChange={handleChange} /><br /><br />
                <p className={classes.namelabel}>
                    <label className={classes.label} htmlFor="パスワード">パスワード<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <input className={classes.inputname} type="tel" name="phonenumber" required="required" value={text} onChange={handleChange} /><br /><br />
                <input className={classes.inputage} type="submit" value="Login" />
            </form>
        </div>
    )
}