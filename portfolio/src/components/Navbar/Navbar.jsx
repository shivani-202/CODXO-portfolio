import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <button className="navbar-btn">Home</button>
      <button className="navbar-btn">Profile</button>
      <button className="navbar-btn">Projects</button>
      <button className="navbar-btn">Contact</button>
    </div>
  );
};

export default Navbar;
