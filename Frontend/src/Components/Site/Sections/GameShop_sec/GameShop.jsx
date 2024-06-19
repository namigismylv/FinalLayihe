import React from "react";
import "./GameShop.css";
import Cards from "./Cards/Cards";
const GameShop = () => {
  return (
    <section className="game__shop">
      <div className="custom-container game__shop-container" >
        <div className="row" style={{margin:"0 auto"}}>
          <div className="col-12">
            <div className="game__shop__title">
              <h2 style={{fontSize:"32px"}}>Games</h2>
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default GameShop;
