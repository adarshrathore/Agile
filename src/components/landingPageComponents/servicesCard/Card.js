import React from 'react'

import img from "../../../assets/images/img8.png"
import style from "../servicesCard/card.module.css"
const Card = () => {
    return (
        <div className={style.card2}>
            <div>
                <img src={img} alt="..." />
            </div>
            <div>
                <h2>Web Development</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugit. Repellat unde sint a natus?
                </div>
            </div>
        </div>
    )
}

export default Card