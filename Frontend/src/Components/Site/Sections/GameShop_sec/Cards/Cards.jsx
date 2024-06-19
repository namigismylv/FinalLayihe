import React from "react";
import RDR2shopCardImg from "../../../../../assets/img/RDR2__shopCard.png";
import GTA5shopCardImg from "../../../../../assets/img/Gta5__shopCard.png"
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <div className="row" style={{margin:"0 auto"}}>
      <div className="col-3">
        <Link to="">
          <div class="card" style={{ width: "20rem" }}>
            <img src={RDR2shopCardImg} class="card-img-top" alt="..." />
            <div class="card-body games__body">
              <h3 class="card-title">Red Dead Redemption 2</h3>
              <p class="card-text">
              €59.99
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-3" style={{paddingLeft:"6px"}} >
        <Link to="">
          <div class="card" style={{ width: "20rem" }}>
            <img src={GTA5shopCardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title" style={{fontSize:"14px",color:"#ffffffcc",lineHeight:"150%",}}>Grand Theft Auto V</h3>
              <p class="card-text" >
              €39.99
              </p>
              
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
