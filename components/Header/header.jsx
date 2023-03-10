import Link from "next/link";
import classes from "./header.module.css"

export function Header() {
    return (
        <header className={classes.header}>
                <Link href="/" className={classes.anchor}>
                    Information
                </Link>
                <Link href="/about" className={classes.anchor}>
                    About
                </Link>
                <Link href="/service" className={classes.anchor}>
                    Service
                </Link>
                <Link href="/contact" className={classes.anchor}>
                    Contact
                </Link>
                <Link href="/contents" className={classes.anchor}>
                    Contents
                </Link>
                <Link href="/login" className={classes.anchor}>
                    Login
                </Link>
                <Link href="/signup" className={classes.anchor}>
                    Signup
                </Link>
            </header>
    )
}