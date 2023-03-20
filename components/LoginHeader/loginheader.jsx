import Link from "next/link";
import { Login } from "../Login/login";
import classes from "./loginheader.module.css"

export function LoginHeader() {
    return (
        <header className={classes.header}>
            <Link href="/login" className={classes.anchor}>
                <Login />
            </Link>
        </header>
    )
}