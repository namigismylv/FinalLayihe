import React from 'react'
import CarouselFadeExamples from '../../../Components/Site/Sections/carouselShop/CarouselFadeExamples'
import "./Shop.css"
import NewArrivals from '../../../Components/Site/Sections/NewArrivals_sec/NewArrivals'
import GameShop from '../../../Components/Site/Sections/GameShop_sec/GameShop'
import BestSellers from '../../../Components/Site/Sections/BestSellers_sec/BestSellers'
import Gta from '../../../Components/Site/Sections/ShopGTA_sec/Gta'
import Rdr2Shop from '../../../Components/Site/Sections/Rdr2Shop_sec/Rdr2Shop'
const Shop = () => {
  return (
    <main id='shop'>
      <CarouselFadeExamples/>
      <NewArrivals/>
      <GameShop/>
      <BestSellers/>
      <Gta/>
      <Rdr2Shop/>
    </main>
  )
}

export default Shop
