import React, { useContext } from 'react'
import BasketTable from '../../../Components/Site/BasketTable/BasketTable'
import "./Basket.css"
import MainContext from '../../../Context/Context'
const Basket = () => {
  const {basketItems}= useContext(MainContext)
  return (
    <div className='basket'>
      <BasketTable basketItems={basketItems}/>
    </div>
  )
}

export default Basket
