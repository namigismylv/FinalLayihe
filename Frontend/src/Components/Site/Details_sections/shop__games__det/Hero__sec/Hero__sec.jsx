import React from 'react'
import HeroImg from "../../../../../assets/img/RDR_Hero.png"
import LogoImg from "../../../../../assets/img/RDR2__logo.png"
import Gta5Img from "../../../../../assets/img/GTA5_FMTBig.png"
const Hero__sec = () => {
  return (
    <div className='shop__games__heroSec'>
      <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                <div className="heroSec__text">
                    <img src={LogoImg} />
                    <p>Red Dead Redemption 2</p>
                    <p>Price: €59.99</p>
                    <button className='shop__basketBtn games__basketBtn'>ADD TO CART</button>
                </div>
            </div>
            <div className="col-8">
                <div className="heroSec__img" >
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero__sec
