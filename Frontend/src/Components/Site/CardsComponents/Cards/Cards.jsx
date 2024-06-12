import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import GTA6 from "../../../../assets/img/GTA6.png";
import GTA6_Big from "../../../../assets/img/GTA6_Big.png";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="custom-container featuredG__container">
      <div className="row">
        <div className="col-12">
          <div className="featured__games__title">
            <h3>
              <Link to="">Featured Games</Link>
            </h3>
          </div>
          <Link>
            <div className="featured__games__gta6">
              <img src={GTA6} alt="" className="gta6__img" />
              <img src={GTA6_Big} alt="" className="gta6__bigImg" />
            </div>
          </Link>
        </div>
      </div>
      <div className="row gameRow">
        <Card />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="viewMore__button">
            <Link to="">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
