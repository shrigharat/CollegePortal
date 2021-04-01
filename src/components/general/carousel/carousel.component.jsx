import React from "react";
import Slider from "react-slick";

import CarouselCard from "./carousel-card";

const Carousel = ({itemList}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dotsClass: 'slick-dots'
  };
  return (
    <Slider {...settings}>
      {
        itemList.map(
          item => <CarouselCard item={item}/>
        )
      }
    </Slider>
  );
};

export default Carousel;
