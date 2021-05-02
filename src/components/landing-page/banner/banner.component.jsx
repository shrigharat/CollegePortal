import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../navbar/navbar.component";

import "./banner.styles.scss";
import bannerImg from "../../../assets/images/034.png";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <section className="first">
        <div className="slogan">
          <div className="quote">
            The only place you'll need for your college.
          </div>
          <div className="action">
            <Link to="/signup" className="signup-btn">Sign Up</Link>
            <Link to="/signup" className="login-btn">Log In</Link>
          </div>
        </div>
        <img className="image" src={bannerImg} alt="" />
      </section>
    </div>
  );
};

export default Banner;
