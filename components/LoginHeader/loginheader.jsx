import Link from "next/link";
import { LoginButton } from "../Login/login";
import { LogoutButton } from "../Logout/logout";
import classes from "./loginheader.module.css"

export function LoginHeader() {
    return (
        <header className={classes.header}>
            <LoginButton />
            <LogoutButton />
        </header>
    )
}