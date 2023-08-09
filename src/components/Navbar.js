import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <h1> <span className="primary">Bitci</span>Global</h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
            <button onClick={() => navigate('/login')} className="btnBeyazMenu">Login</button>
          </li>
        </ul>
        <div className="btn-group">
          <button onClick={() => navigate('/createaccount')} className="btn">Create Account</button>
        </div>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: '#333' }} /> : <FaBars size={20} style={{ color: '#333' }} />}
      </div>
    </div>
  );
}

export default Navbar;
