import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import "./Gta5Online_det.css"
import Main_Sec from '../../../../Components/Site/Details_sections/Gta5Online/Main_Sec/Main_Sec'
import Additional_Sec from '../../../../Components/Site/Details_sections/Gta5Online/Additional_Sec/Additional_Sec'
const Gta5Online_det = () => {
  const [item,setItem]=useState({})
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/newswire/${id}`).then(res=>{
      setItem(res.data)
    })
  },[id])
  return (
    
    <div className='gta5__online'>
      <Main_Sec item={item}/>
      <Additional_Sec item={item}/>
    </div>
  )
}

export default Gta5Online_det
