import React from 'react'
import hero from '../assets/hero.jpg'
function Hero() {
    return (
        <div className='grid-cols-2 space-x-1'>
            <div className='position-relative flex '>
                <img src={hero} alt="" />
                <button className='bg-gray-600 position-absolute my'>BOOK</button>

            </div>
        </div>
    )
}

export default Hero
