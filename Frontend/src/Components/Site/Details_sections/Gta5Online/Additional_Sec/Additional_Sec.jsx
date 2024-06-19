import React from 'react'
import "./Additional_Sec.css"
const Additional_Sec = ({item}) => {
  return (
    <div className='additional__section'>
      <div className="custom-container additional__section__container">
        <div className="row">
        <div className="col-12">
          <div className="additional__section__img" >
          <img src={item.detailSecImg} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-6" >
            <div className="additional__section__text" >
              <h3>{item.detailSecTitle}</h3>
              <p>{item.detailSecDes}</p>
            </div>
          </div>
        </div>
          
        </div>
        <div className="row">
        <div className="col-12">
          <div className="additional__section__img" >
          <img src={item.detailRdImg} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-6" >
            <div className="additional__section__text" >
              <h3>{item.detailRdTitle}</h3>
              <p>{item.detailRdDes}</p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Additional_Sec
