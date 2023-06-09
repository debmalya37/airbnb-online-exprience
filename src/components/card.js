import React from "react";
import star from "../images/star.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card" className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">({props.count}) •</span>
        <span className="grey">{props.location}</span>
      </div>
      <span className="card--title">{props.title}</span>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
