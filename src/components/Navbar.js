import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo2.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" aria-label="Kwik-Wind-O-Kleen Home">
          <img src={Logo} alt="Kwik-Wind-O-Kleen Logo" />
          <span className="company-name">Kwik-Wind-O-Kleen</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              aria-label="Home"
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              aria-label="About"
            >
              <i className="fas fa-info-circle"></i> About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/service"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              aria-label="Service"
            >
              <i className="fas fa-concierge-bell"></i> Service
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              aria-label="Contact"
            >
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick} aria-label="Toggle Menu">
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;