import React from "react";

import Carousel from "../../general/carousel/carousel.component";

import "./social-proof.styles.scss";
import testimonial from "../../../assets/images/testimonial.png";
import { testimonialsList } from "../../landing-page/social/testimonials";

const SocialProof = () => {
  return (
    <div className="social-proof">
      <div className="wrapper">
        <h1 className="section-title">What fellow students have to say ...</h1>
        <img className="testimonial-img" src={testimonial} alt="" />
        <div className="testimonial-wrapper">
          <div className="testimonial">
            <Carousel itemList={testimonialsList} itemType="testimonial" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
