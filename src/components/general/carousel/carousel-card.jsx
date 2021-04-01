import React from 'react';

import "./carousel-card.styles.scss";
import quotes from "../../../assets/images/quotes1.png";

const CarouselCard = ({item}) => {

  return (<div className="carousel-card">
    <img className="quotes" src={quotes} alt=""/>
    <div className="card-header">
      <img src={item.avataar} alt=""/>
      <h1 className="person-name">{item.name}</h1>
    </div>
    <div className="message">
      {item.message}
    </div>
  </div>);
}

export default CarouselCard;