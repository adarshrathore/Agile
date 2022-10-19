import React, { useState } from 'react'

import style from "../Navbar/navbar.module.css"

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const toggle =()=>{
    console.log("first")
    setNav(!nav)
  }

  return (
    <div >
      <header>
        <h1 className='text-white'>AgileSupport</h1>
        <nav>
          <ul className={`${style.nav__links}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Projects</a></li>
            <li><a className={`${style.button}`} href="#">Register</a></li>
          </ul>
        </nav>
        <span className={`${style.toggleBtn}`} onClick={toggle}>
         {!nav && <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ED318B" className={`bi bi-list`} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>}
         
        </span>
      </header>
      <div className={` h-screen ${style.sideNavbar} ${nav && style.open}`}>
      <span className={`${style.toggleBtn}`} onClick={toggle}>
         
         { nav && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ED318B" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>}
        </span>
      
      <ul className='h-screen flex flex-col items-center justify-center  gap-2'>
        <li><h1 className=' text-center text-white my-2'>AGILESUPPORT</h1></li>
            <li><a href="#" className='mt-5'>Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Projects</a></li>
            <li><a className={`${style.button}`} href="#">Register</a></li>
          </ul>
      </div>
      
    </div>
  )
}

export default Navbar