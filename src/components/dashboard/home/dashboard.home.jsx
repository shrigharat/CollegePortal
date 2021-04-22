import React, { useEffect } from "react";

import "./dashboard.home.styles.scss";
import Carousel from "../../general/carousel/carousel.component";
import { meetings } from "./meetings";

const meetingsCarouselSettings = {
  dots: false,
  autoplay: false,
  slidesToShow: 3.8,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  edgeFriction: .15,
}

const DashboardHome = () => {
  
  return (
    <div className="dashboard-home">
      <div className="collection">
        <span className="collection-header">Upcoming Meetings</span>
        <div className="collection-slider">
          <Carousel
            itemList={meetings}
            itemType="meeting"
            customSettings={meetingsCarouselSettings}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
