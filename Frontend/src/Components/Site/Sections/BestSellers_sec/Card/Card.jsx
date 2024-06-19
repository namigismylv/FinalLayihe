import React from "react";
import rdr2metaltrain from "../../../../../assets/img/RDR2_MetalEarth_Train.png";
import { Link } from "react-router-dom";
const Card = () => {
  return (
   <>
    <div className="col-3">
      <Link to="">
        <div class="card" style={{ width: "100%"}}>
          <img src={rdr2metaltrain} class="card-img-top" alt="..." />
          <div class="card-body" style={{ padding: "20px" }}>
            <h3 class="card-title">
              Red Dead Redemption 2 Metal Earth Train 3D Puzzle
            </h3>
            <p class="card-text">$11.99</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-3" >
    <Link to="">
      <div class="card" style={{ width: "100%"}}>
        <img src={rdr2metaltrain} class="card-img-top" alt="..." />
        <div class="card-body" style={{ padding: "20px" }}>
          <h3 class="card-title">
            Red Dead Redemption 2 Metal Earth Train 3D Puzzle
          </h3>
          <p class="card-text">$11.99</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="col-3">
  <Link to="">
    <div class="card" style={{ width: "100%"}}>
      <img src={rdr2metaltrain} class="card-img-top" alt="..." />
      <div class="card-body" style={{ padding: "20px" }}>
        <h3 class="card-title">
          Red Dead Redemption 2 Metal Earth Train 3D Puzzle
        </h3>
        <p class="card-text">$11.99</p>
      </div>
    </div>
  </Link>
</div>
<div className="col-3">
      <Link to="">
        <div class="card" style={{ width: "100%"}}>
          <img src={rdr2metaltrain} class="card-img-top" alt="..." />
          <div class="card-body" style={{ padding: "20px" }}>
            <h3 class="card-title">
              Red Dead Redemption 2 Metal Earth Train 3D Puzzle
            </h3>
            <p class="card-text">$11.99</p>
          </div>
        </div>
      </Link>
    </div>
   </>
  );
};

export default Card;
