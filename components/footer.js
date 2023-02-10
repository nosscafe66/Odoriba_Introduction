import Link from "next/link";
import classes from "./footer.module.css"

export function Footer() {
    return (
        <footer className={classes.footer}>
            <Link href="/" className={classes.anchor}>
                Index
            </Link>
            <Link href="/about" className={classes.anchor}>
                About
            </Link>
        </footer>
    )
}