import React from "react";
import "./GameShop__det.css";
import Hero__sec from "../../../../Components/Site/Details_sections/shop__games__det/Hero__sec/Hero__sec";
import Games__details from "../../../../Components/Site/Details_sections/shop__games__det/games__details/games__details";
import FAQ from "../../../../Components/Site/Details_sections/FAQ/FAQ";
const GameShop__det = () => {
  return (
    <div className="shop__games__details">
      <Hero__sec />
      <Games__details />
      <div className="shop__games__details__faq">
      <div className="custom-container">
        <div className="row">
          <div className="faq__title">
            <h2 style={{fontSize:"32px",fontWeight:"bolder",color:"#ffffff",marginBottom:"20px"}}>FAQ</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FAQ/>
          </div>

        </div>__section
        </div>
      </div>
    </div>
  );
};

export default GameShop__det;
