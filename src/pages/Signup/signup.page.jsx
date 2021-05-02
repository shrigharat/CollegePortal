import React from "react";
import styled from "styled-components";
import signupImg from "../../assets/images/register.png";
import SignupForm from "../../forms/signup/signup.form";
import { createDepartments } from "../../firebase/firebase.functions";

const SignupPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fafafa;

  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #6060ff;

    .slogan {
      color: white;
      font-size: 2.5rem;
      font-weight: 600;
      word-spacing: 0.5rem;
    }

    .slogan-subtitle {
      color: #e0e0e0;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 2rem;
      text-align: center;
    }

    .signup-img {
      height: 80%;
      width: auto;
    }
  }

  .right {
    width: 50%;
    height: 100%;
    padding: 1rem 5rem;
    overflow-y: scroll;
  }
`;

const SignupPage = () => {
  return (
    <SignupPageStyles>
      <div className="left">
        <h1 className="slogan">Get started!</h1>
        <span className="slogan-subtitle">
          Create an account so we can <br />
          help you get organized
        </span>
        <img className="signup-img" src={signupImg} alt="" />
      </div>
      <div className="right">
        <SignupForm />
      </div>
    </SignupPageStyles>
  );
};

export default SignupPage;
