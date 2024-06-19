import React from 'react';
import Slider from 'react-slick';
import Card from './Card/Card';
import './SlickSlider.css';
import RGHat from "../../../assets/img/RG__Hat.png";
import RGMixed from "../../../assets/img/RG__Mixed.png";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,    
  };

  const cardsData = [
    { image: `${RGHat}`, title: 'Rockstar Games Patch Set 1', description: '$24.99' },
    { image: `${RGMixed}`, title: 'Rockstar Games 5 Panel Hat – Reflective Black', description: '$24' },
    { image: `${RGMixed}`, title: 'Title 3', description: 'Description 3' },
    { image: `${RGMixed}`, title: 'Title 4', description: 'Description 4' },
    { image: `${RGMixed}`, title: 'Title 5', description: 'Description 5' },
    { image: `${RGMixed}`, title: 'Title 6', description: 'Description 6' },
  ];

  return (
    <div className="row">
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className='headShop__card'>
            <Card image={card.image} title={card.title} description={card.description} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default SlickSlider;
