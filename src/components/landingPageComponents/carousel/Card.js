import React from 'react'

//images
import img8 from "../../../assets/images/img8.png"

//css
import style from "../carousel/carousel.module.css"

const Card = () => {
  return (
    <div className={`${style.carouselCard} flex`}>
        <div className={`flex justify-center items-center ${style.leftSection}`}>
            <h3 className='text-white'>
                Nurturing Your <br/> StartUp
            </h3>
        </div>
        <div className={` ${style.rightSection}`}>
            <img src={img8} alt=".."/>
        </div>
    </div>
  )
}

export default Card