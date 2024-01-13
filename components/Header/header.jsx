import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Login } from "../Login/login";
import classes from "./header.module.css";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 0);
      
            // Define the section IDs in the order they appear on the page
            const sections = ['information', 'about', 'service', 'contents', 'contact'];
      
            // Check which section is currently in view
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    console.log("element:" + element);
                    const elementTop = element.offsetTop;
                    console.log("elementTop:" + elementTop);
                    const elementHeight = element.offsetHeight;
                    console.log("elementHeight:" + elementHeight);
                    return scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight;
                }
                return false;
            });
      
            setActiveSection(currentSection || '');
        };
        
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

    return (
        <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
            <div className={classes.serviceName}>Odoriba</div>
            <div className={classes.hamburger} onClick={toggleMenu}>
                ☰
            </div>

            <nav className={`${classes.nav} ${isOpen ? classes.open : ''}`}>
                <a href="#information" className={`${classes.anchor} ${activeSection === 'information' ? 'active' : ''}`}>Information</a>
                <a href="#about" className={`${classes.anchor} ${activeSection === 'about' ? 'active' : ''}`}>About</a>
                <a href="#service" className={`${classes.anchor} ${activeSection === 'service' ? 'active' : ''}`}>Service</a>
                <a href="#contents" className={`${classes.anchor} ${activeSection === 'contents' ? 'active' : ''}`}>Contents</a>
                <a href="#contact" className={`${classes.anchor} ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>
        </header>
    );
}
