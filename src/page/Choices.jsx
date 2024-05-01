import React, { useState, useEffect } from 'react'
import '../assets/App.css'
import MyChart from '../component/MyChart'
import { useNavigate } from 'react-router-dom';

const Choices = () => {

  const navigate = new useNavigate()
  const [controlAnimation,setControlAnimation] = useState(false)




  useEffect(() => {
    let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

    if(!luckyGameClockCookie){
      navigate('/redirect')
    }
  },[])

  return (
    <>
      <section className='container'>
        <MyChart
          rule='all-lucky'
        ></MyChart>
      </section>
    </>
  )
}

export default Choices