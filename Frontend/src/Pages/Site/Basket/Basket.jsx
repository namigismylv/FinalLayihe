import React, { useContext, useEffect } from 'react'
import BasketTable from '../../../Components/Site/BasketTable/BasketTable'
import "./Basket.css"
import MainContext from '../../../Context/Context'
import { useNavigate } from 'react-router'

const Basket = () => {
  const navigate = useNavigate()
  const userLocal = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if (!userLocal.id) {
      navigate('/register')
    }
  }, [userLocal, navigate])
  const {basketItems}= useContext(MainContext)
  return (
    <div className='basket'>
      <BasketTable basketItems={basketItems}/>
    </div>
  )
}

export default Basket
