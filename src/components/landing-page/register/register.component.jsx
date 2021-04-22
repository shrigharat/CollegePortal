import React from 'react';

import "./register.styles.scss";
import register from "../../../assets/images/register.png";
import playLogo from "../../../assets/images/play-logo.png";

const Register = () => {

  return <div className="register-component">
    <span>
    <h1>Get started with us</h1>
    <p>We provide you with all the tools needed for a hasslefree college experience.</p>
    </span>

    <div className="register">
      <div className="signup">
        <h1>Are you a student ?</h1>
        <p>Download our app from the play store</p>
        <img src={playLogo} alt=""/>
      </div>
      <img src={register} alt=""/>
      <div className="signup">
        <h1>Are you an educator ?</h1>
        <p>Register on our website</p>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>

    <footer>
      Copyright &#169; 2021 College Portal
    </footer>
  </div>;
}

export default Register;