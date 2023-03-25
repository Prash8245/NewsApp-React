import React, { useState, useEffect } from "react";
import logo1 from './My project-2.png';
import logo2 from './My project-1.png';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    return (
        <div className={scrolled ? "container-fluid bg-dark mb-5 fixed-top" : "container-fluid nav-scrolled mb-5 fixed-top" }>
            <nav className="navbar fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src={scrolled ? logo2 :logo1 } alt="Logo" width="150" height="150" className="d-inline-block align-text-top" />
                    {/* <h1 style={{textAlign:"center"}}>Welcome To News Buddy</h1><span className=''>News Buddy</span> */}
                    </a>
                </div>
        </nav>
            <div className='container-fluid p-4' style={{height:"150px"}}>
                <h1 className='mb-4 fs-1' style={{textAlign:"center", color: scrolled ? "white" :"black"}}>Welcome To News Buddy</h1>
            </div>
        </div>
    );
}
