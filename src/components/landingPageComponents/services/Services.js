import React from 'react'

import style from "../services/services.module.css"
import Card from '../servicesCard/Card'

const Services = () => {
  return (
    <div>
      <h1 className='text-center text-white my-5'>We're Best In</h1>
      <div className={`${style.services} container mt-5`}>

        <Card />


        <Card />


        <Card />


        <Card />

        <Card />

      </div>
    </div>
  )
}

export default Services