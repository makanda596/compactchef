import React from 'react'
import hero from '../assets/hero.jpg'
function Hero() {
    return (
        <div className='grid-cols-2 space-x-1'>
            <div className='position-relative flex '>
                <img src={hero} alt="" />


            </div>
        </div>
    )
}

export default Hero
