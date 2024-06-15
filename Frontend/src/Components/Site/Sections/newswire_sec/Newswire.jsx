import React from 'react'
import './Newswire.css'
import Cards from './Cards/Cards'
import { Link } from 'react-router-dom'
const Newswire = () => {
  return (
    <section className='newswire'>
        <div className='custom-container newswire__container'>
        <div className="row">
        <div className="col-12">
            <div className="newswire__title">
                <h3>
                    <Link to=''>Newswire</Link>
                </h3>
            </div>
        </div>
        </div>
      <Cards/>
        <div className="row">
          <div className="col-12">
            <div className="viewMore__button newswire__viewMore__button">
            <Link to="">View More</Link>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Newswire
