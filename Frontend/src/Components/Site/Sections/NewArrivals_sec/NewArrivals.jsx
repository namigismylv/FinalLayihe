import React from 'react'
import "./NewArrivals.css"
import { Link } from 'react-router-dom';

import SlickSlider from '../../SlickSlider/SlickSlider'
const NewArrivals = () => {
  return (
    <section className='newarrivals'>
      <div className="custom-container sliderContainer">
        <div className="row" style={{margin:"0 auto"}}> 
            <div className="col-6">
                <div className="shop__card__title">
                <h2>New Arriwals</h2>
                </div>
            </div>
            <div className="col-6 seeAllCol">
                <Link to="">See all <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
        <SlickSlider/>
    </div>
    </section>
  )
}

export default NewArrivals
