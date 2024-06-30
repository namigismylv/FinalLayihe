import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import controller from '../../../Services/api/requests'
import { endpoints } from '../../../Services/api/constants'
const User = () => {
  const navigate = useNavigate()
  const userLocal = JSON.parse(localStorage.getItem("user"))
  const data = useSelector((state)=>state.user)
  const [user,setUser]=useState({})
  
  useEffect(() => {
      if (!userLocal.id) {
        navigate('/')
      }
    }, [userLocal, navigate])
    useEffect(()=>{
      const token = Cookies.get('token')
      controller.getOne(endpoints.users,data.id,token).then((res)=>{
        setUser(res.data
        )
        console.log(res.data);
      })
    },[data])
  return (
  <div style={{paddingTop:"80px"}}>
  <h1>{user.nickname}</h1>
  <h1>{user.email}</h1>
  <img src={user.src} width="200px" style={{borderRadius:"50%"}}  alt="" />
    
  </div>

)
}

export default User