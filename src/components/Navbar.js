import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className="header">
            <div className="container">
                <h1> <span className="primary">Bitci</span>Global</h1>
                <ul className={click ? 'nav-menu active :' : 'nav-menu'}>
                    <li>
                        <button className="btnBeyazMenu">Home</button>
                    </li>
                    <li>
                        <button className="btnBeyazMenu">Featured</button>
                    </li>
                    <li>
                        <button className="btnBeyazMenu">Earn</button>
                    </li>
                    <li>
                        <button onClick={() => window.location.href = "https://www.bitci.com.tr/account/login"} className="btnBeyazMenu">Login</button>
                    </li>
                </ul>
                <div className="btn-group">
                    <button onClick={() => window.location.href = "https://www.bitci.com.tr/account/register"} className="btn">Create Account</button>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : <FaBars size={20} style={{ color: '#333' }} />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;