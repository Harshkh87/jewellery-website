import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from './hamburger.svg';
import './style.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h3 onClick={()=>navigate('/')}>LOGO</h3>
          {/* <Logo /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburger} className="App-logo" alt="logo" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <Link className="ring" to='/engagementRing'>Engagement Ring</Link>
            </li>
            <li>
              {/* <Link to="/blogs">Blogs</Link> */}
              <Link className="ring" to='/weddingRing'>Wedding Ring</Link>
            </li>
            <li>
              {/* <Link to="/projects">Projects</Link> */}
              <Link className="ring" to='/diamons'>Diamons</Link>
            </li>
            <li>
              {/* <Link to="/about">About</Link> */}
              <Link className="ring" to='/productdetail'>Gemstones</Link>
            </li>
            <li>
              {/* <Link to="/contact">Contact</Link> */}
              <Link className="ring" to='/ringbuilder'>Fine Jewelry</Link>
            </li>
            {/* <li>
              <Link className="ring" to='/ringbuilder'>Education</Link>
            </li> */}
            <li>
              <Link className="ring" to='/contact'>Contact</Link>
            </li>
            {/* <button>contact</button> */}
            <button onClick={()=>navigate('/login')} className="button-sy">Login</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;