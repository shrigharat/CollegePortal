import React from "react";

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
            <button className="signup-btn">Sign Up</button>
            <button className="login-btn">Log In</button>
          </div>
        </div>
        <img className="image" src={bannerImg} alt="" />
      </section>
    </div>
  );
};

export default Banner;
