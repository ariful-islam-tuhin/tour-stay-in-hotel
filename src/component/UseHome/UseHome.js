import React from "react";
import { Link } from "react-router-dom";
import "./UseHome.css";

const UseHome = (props) => {
  const { _id, name, price, img, description } = props?.room;

  return (
    <div className="container">
      <div className="room-div">
        <img className="image" src={img} alt="" />
        <h5> {price} </h5>
        <h5>{name}</h5>
        <p>{description}</p>
        <Link to={`/placebook/${_id}`}>
          <button className="book-now">BOOK NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default UseHome;
