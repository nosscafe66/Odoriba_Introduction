import Link from "next/link";
import classes from "./footer.module.css"

export function Footer() {
    return (
        <footer className={classes.footer}>
            <Link href="/" className={classes.anchor}>
                ©︎ 2023 noss
            </Link>
        </footer>
    )
}