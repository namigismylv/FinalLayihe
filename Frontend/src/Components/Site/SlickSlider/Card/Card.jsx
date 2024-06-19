import React from "react";
import { Link } from "react-router-dom";
const Card = ({ image, title, description }) => {
  return (
  <div className="col-12">
      <Link to="" >
      <div className="card shop__card">
        <img src={image} alt={title} />
        <div className="card-body shop__card__info">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  </div>
  );
};

export default Card;
