import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
const Cards = () => {
  return (
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
        <div className="row">
          <Card/>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="viewMore__button newswire__viewMore__button">
            <Link to="">View More</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cards
