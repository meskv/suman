import React from "react";

const Navbar = () => {
    return (
        <>
            <nav id="nav" className="nav">
                <div className="logo">
                    <a className="logo-text" href="/">Portfolio</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                </ul>
                <div className="toggle-icon">
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
            </nav>
        </>
    )
}

export default Navbar;