import React from 'react';
import logo from './My project-1.png';

export default function Header() {
    return (
        <div className='container-fluid bg-dark mb-5'>
            <nav className="navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="150" height="150" className="d-inline-block align-text-top" />
                    {/* <h1 style={{textAlign:"center"}}>Welcome To News Buddy</h1><span className=''>News Buddy</span> */}
                    </a>
                </div>
        </nav>
            <div className='container-fluid mt-1 p-4'>
                <h1 className='mb-4 fs-1' style={{textAlign:"center",color:"white"}}>Welcome To News Buddy</h1>
            </div>
        </div>
    );
}
