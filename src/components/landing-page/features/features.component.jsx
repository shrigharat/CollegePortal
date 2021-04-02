import React from "react";

import "./features.styles.scss";
import ai1 from "../../../assets/images/ai1.png";
import ai2 from "../../../assets/images/ai2.png";
import ai3 from "../../../assets/images/ai3.png";
import ai4 from "../../../assets/images/ai4.png";

const FeaturesComponent = () => {
  return (
    <div className="features-component">
      <div className="row">
        <div className="feature">
          <img src={ai1} alt="" />
          <span>
            <h1>All your data in one place</h1>
            <p>Centralized data on the cloud. Available to you at all times.</p>
          </span>
        </div>
        <div className="feature-reverse">
          <img src={ai2} alt="" />
          <span>
            <h1>Hassle free submissions</h1>
            <p>
              Projects, assignments, files, test, links ... all submissions with
              ease.
            </p>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="feature">
          <img src={ai3} alt="" />
          <span>
            <h1>Never miss an update</h1>
            <p>
              Get notified about all your college details, events, exams and
              much more.
            </p>
          </span>
        </div>
        <div className="feature-reverse">
          <img src={ai4} alt="" />
          <span>
            <h1>College community blog</h1>
            <p>
              A blog managed by your college community for..... your college
              community.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
