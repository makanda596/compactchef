import React from 'react'
import hero from '../assets/hero.jpg'
function Hero() {
    return (
        <div className='grid-cols-2 space-x-1'>
            <div className='relative flex flex-col '>
                <img src={hero} alt="" className='object-contain' />
                <button className='bg-gray-600 absolute my-1 text-red-500'>BOOK</button>

            </div>
        </div>
    )
}

export default Hero
