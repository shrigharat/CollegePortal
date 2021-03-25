import React from "react";
import {Link, Switch, Route} from "react-router-dom";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">College Portal</div>
      <div className="others">
        <Link className="nav-element">Home</Link>
        <Link className="nav-element">Features</Link>
        <Link className="nav-element">Contact</Link>
        <Link className="nav-element">Sign Up</Link>
        <Link className="nav-element">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

