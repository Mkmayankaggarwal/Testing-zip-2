import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"; // Import Link from react-router-dom

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false); // State for navbar visibility

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavExpanded(prevState => !prevState);
  };

  return (
      <header id="site-header" className="header">
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand logo" to="/">
                    <img id="logo-img" className="img-fluid" src="../images/logo1.png" alt="Logo" />
                  </Link>
                  <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleNavbar} // Use the toggle function
                      aria-expanded={isNavExpanded} // Set aria-expanded based on state
                      aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNavDropdown">
                    {/* Left nav */}
                    <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/" onClick={() => setIsNavExpanded(false)}>Home</HashLink>
                      </li>
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/About" onClick={() => setIsNavExpanded(false)}>About Averco</HashLink>
                      </li>
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/Products" onClick={() => setIsNavExpanded(false)}>Products</HashLink>
                      </li>
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/Support" onClick={() => setIsNavExpanded(false)}>Support</HashLink>
                      </li>
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/Career" onClick={() => setIsNavExpanded(false)}>Career</HashLink>
                      </li>
                      <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown" to="/Contact" onClick={() => setIsNavExpanded(false)}>Contact Us</HashLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
