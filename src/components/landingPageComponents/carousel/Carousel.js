import React from 'react'

// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from './Card';


const Carousel = () => {
    return (
        <Splide aria-label="My Favorite Images" 
        options={ {
            type:'fade',
            rewind: true,
            
            gap   : '1rem',
            pagination:false,
            arrows:false,
            autoplay:true,
          } }>
            <SplideSlide>
                <Card/>
            </SplideSlide>

            <SplideSlide>
                im
            </SplideSlide>
           
        </Splide>
    )
}

export default Carousel