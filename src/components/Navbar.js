import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom"; 
import "./NavbarStyle.css"; 
import { MenuItems } from "./menuItems"; 

const Navbar = () => {
  // State to manage the clicked status of the menu
  const [clicked, setClicked] = useState(false);
  
  // Get current location
  const location = useLocation();

  // Function to handle menu click
  const handleClick = () => {
    setClicked(!clicked); 
  };

  return (
    <nav className="Navbaritems">
      <h1 className="navbar-logo">Kwik-Wind-O-Kleen</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map(({ cName, url, icon, title }, index) => (
          <li key={index}>
            <Link 
              className={`${cName} ${location.pathname === url ? 'active' : ''}`} 
              to={url}
              onClick={() => setClicked(false)} // Close the menu on link click
            >
              <i className={icon}></i>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
