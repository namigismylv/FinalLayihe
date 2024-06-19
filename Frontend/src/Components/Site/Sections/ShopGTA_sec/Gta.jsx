import React from "react";
import "./Gta.css";
import Cards from "./Cards/Cards";
import { Link } from "react-router-dom";
const Gta = () => {
  return (
    <section className="Gta__shop">
      <div className="custom-container gta-container">
        <div className="row" style={{ margin: "0 auto" }}>
        <div className="col-6">
                <div className="shop__card__title">
                <h2>Grand Theft Auto</h2>
                </div>
            </div>
            <div className="col-6 seeAllCol">
                <Link to="">See all <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          <div className="col-12">
          <Link></Link>
          </div>
        </div>
        <Cards/>
      </div>
    </section>
  );
};

export default Gta;
