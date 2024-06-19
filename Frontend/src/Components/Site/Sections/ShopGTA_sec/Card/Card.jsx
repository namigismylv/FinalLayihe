import React from 'react'
import { Link } from 'react-router-dom'
import Gta5Kubrick from "../../../../../assets/img/GTAV_KubricksHeist.png"
const Card = () => {
  return (
    <>
    <div className="col-3">
      <Link to="">
        <div class="card" style={{ width: "100%"}}>
          <img src={Gta5Kubrick} class="card-img-top" alt="..." />
          <div class="card-body" style={{ padding: "20px" }}>
            <h3 class="card-title">
            Grand Theft Auto V: Heist Edition Kubrick Set
            </h3>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-3" >
    <Link to="">
      <div class="card" style={{ width: "100%"}}>
        <img src={Gta5Kubrick} class="card-img-top" alt="..." />
        <div class="card-body" style={{ padding: "20px" }}>
          <h3 class="card-title">
            Red Dead Redemption 2 Metal Earth Train 3D Puzzle
          </h3>
        </div>
      </div>
    </Link>
  </div>
  <div className="col-3">
  <Link to="">
    <div class="card" style={{ width: "100%"}}>
      <img src={Gta5Kubrick} class="card-img-top" alt="..." />
      <div class="card-body" style={{ padding: "20px" }}>
        <h3 class="card-title">
          Red Dead Redemption 2 Metal Earth Train 3D Puzzle
        </h3>
      </div>
    </div>
  </Link>
</div>
<div className="col-3">
      <Link to="">
        <div class="card" style={{ width: "100%"}}>
          <img src={Gta5Kubrick} class="card-img-top" alt="..." />
          <div class="card-body" style={{ padding: "20px" }}>
            <h3 class="card-title">
              Red Dead Redemption 2 Metal Earth Train 3D Puzzle
            </h3>
          </div>
        </div>
      </Link>
    </div>
      
    </>
  )
}

export default Card
