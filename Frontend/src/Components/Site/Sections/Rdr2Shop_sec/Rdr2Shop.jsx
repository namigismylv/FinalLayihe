import React from 'react'
import './Rdr2shop.css'
import SlickSlider from '../../SlickSlider/SlickSlider'
const Rdr2Shop = () => {
  return (
    <section className='RDR2__shop'>
        <div className="custom-container">
            <div className="row" style={{margin:"0 auto"}}>
                <div className="col-12">
                    <h2>Red Dead Redemption Essentials</h2>
                </div>
            </div>
            <SlickSlider/>
        </div>
    </section>
  )
}

export default Rdr2Shop
