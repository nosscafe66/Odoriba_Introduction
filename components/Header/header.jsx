import React, { useState } from 'react';
import Link from "next/link";
import { Login } from "../Login/login";
import classes from "./header.module.css"

export function Header() {
    // メニューの開閉状態を管理するステート
    const [isOpen, setIsOpen] = useState(false);

    // メニューを開閉する関数
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={classes.header}>
            {/* スマホサイズのときのハンバーガーアイコン */}
            <div className={classes.hamburger} onClick={toggleMenu}>
                ☰
            </div>

            {/* メニューアイテム */}
            <nav className={`${classes.nav} ${isOpen ? classes.open : ''}`}>
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
                {/* <Login /> */}
            </nav>
        </header>
    )
}
