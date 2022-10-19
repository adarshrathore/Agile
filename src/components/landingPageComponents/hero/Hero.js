import React from 'react'

//CSS
import style from '../../landingPageComponents/hero/hero.module.css';

const Hero = () => {
  return (
    <div className={`${style.heroSection} flex flex-col justify-center container`}>
      <h1 className={`${style.heroHead} text-white `}>Agile Support</h1>
      <h2 className={`${style.secondaryHeroHead} text-white  tracking-wide`}>Make 'IT' Bigger</h2>
    </div>
  )
}

export default Hero