import React from 'react'
import hero from '../assets/hero.jpg'
function Hero() {
    return (
        <div className='grid-cols-2 space-x-1'>
            <div className='relative flex flex-col h-screen md:hidden'>
                <img src={hero} alt="" className='object-cover ' />
                <div className='absolute bg-yellow-500 px-20 flex-col justify-items-center text-white'>
                    <h1>COMPACT CHEFS EVENTS AND CATERARS</h1>
                    <p>Where your food speaks for your Taste</p>
                    <button className='bg-gray-600   text-red-500'>BOOK</button>
                </div>
            </div>
            <div >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptatibus totam, illo fugit veritatis voluptatum iste! Quo nulla id fugiat.</p>
            </div>
        </div >
    )
}

export default Hero
