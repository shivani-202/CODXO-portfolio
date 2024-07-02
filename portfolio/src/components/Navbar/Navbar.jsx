import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-btn">
        Home
      </Link>
      <Link to="/profile" className="navbar-btn">
        Profile
      </Link>
      <Link to="/projects" className="navbar-btn">
        Projects
      </Link>
      <Link to="/contact" className="navbar-btn">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
