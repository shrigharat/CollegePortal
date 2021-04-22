import React from "react";
import Slider from "react-slick";

import CarouselCard from "./carousel-card";
import MeetingCard from "./meeting-card.component";

function getItems(itemType, itemList) {
  switch (itemType) {
    case "testimonial":
      return itemList.map((item) => <CarouselCard item={item} />);
    default:
      return itemList.map((item) => <MeetingCard item={item}/>);
  }
}

const Carousel = ({ itemList, itemType, customSettings }) => {
  const settings = customSettings || {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dotsClass: "slick-dots",
  };
  return <Slider {...settings}>{getItems(itemType, itemList)}</Slider>;
};

export default Carousel;
