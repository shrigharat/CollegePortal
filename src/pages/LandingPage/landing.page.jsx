import React from 'react';

import Banner from "../../components/landing-page/banner/banner.component";
import SocialProof from "../../components/landing-page/social/social-proof.component";
import FeaturesComponent from "../../components/landing-page/features/features.component";
import Register from "../../components/landing-page/register/register.component";

import "./landing.page.styles.scss";

const LandingPage = () => {

  return (
    <div className="landing-page">
      <section className="banner-cmp"><Banner/></section>
      <section className="two"><FeaturesComponent/></section>
      <section className="one"><SocialProof/></section>
      <section className="one"><Register/></section>
    </div>
  );
}

export default LandingPage;