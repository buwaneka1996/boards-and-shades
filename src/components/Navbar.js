import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/greeninclogo.jpeg"; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();  // Get current path
  const navigate = useNavigate();
  
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="logo-container" onClick={() => navigate("/")}>
          <img src={logo} alt="Boards & Shades Logo" className="logo-image" />
          <h1 className="logo-text">Boards & Shades</h1>
        </div>
        <ul className={isMobile ? "nav-links mobile-nav" : "nav-links"}>
          <li><Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/products" onClick={closeMenu} className={location.pathname === "/products" ? "active" : ""}>Product</Link></li>
          <li><Link to="/process" onClick={closeMenu} className={location.pathname === "/process" ? "active" : ""}>Process</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        </ul>
        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes className="icon" /> : <FaBars className="icon"/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;