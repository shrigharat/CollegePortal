import React from "react";
import {Link} from "react-router-dom";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">College Portal</div>
      <div className="others">
        <Link className="nav-element">Home</Link>
        <Link className="nav-element">Features</Link>
        <Link className="nav-element">Contact</Link>
        <Link className="nav-element" to="/signup">Sign Up</Link>
        <Link className="nav-element" to="/signup">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

