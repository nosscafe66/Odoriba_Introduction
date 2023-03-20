import Link from "next/link";
import { LoginButton } from "../Login/login";
import { LogoutButton } from "../Logout/logout";
import classes from "./header.module.css"

export function Header() {
    return (
        <header className={classes.header}>
            <Link href="/information" className={classes.anchor}>
                Information
            </Link>
            <Link href="/about" className={classes.anchor}>
                About
            </Link>
            <Link href="/service" className={classes.anchor}>
                Service
            </Link>
            <Link href="/contents" className={classes.anchor}>
                Contents
            </Link>
            <Link href="/contact" className={classes.anchor}>
                Contact
            </Link>
            <Link href="/map" className={classes.anchor}>
                Map
            </Link>
        </header>
    )
}