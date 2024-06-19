import React from 'react'
import "./Main_Sec.css"
import {Link} from "react-router-dom"
const Main_Sec = ({item}) => {
  return (
    <div className='main__section'>
      <div className="custom-container main__section__container">
        <div className="row">
        <div className="col-12">
          <div className="main__section__img">
          <img src={item.detailsImg} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-6" >
            <div className="main__section__text" >
              <div className="main__section__text__about" >
                <p>
                Newswire
                </p>
                <p>
                {item.category}
                </p>
                <p>
                Events
                </p>
              </div>
              <h1>{item.title}</h1>
              <h3>{item.detailsHeadDesc}</h3>
              <time >{item.time}</time>
              <p>{item.detailsMainDes}</p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main_Sec
