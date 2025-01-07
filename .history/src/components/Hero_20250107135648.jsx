import React from 'react';
import hero from '../assets/hero.jpg';

function Hero() {
    const herofiles = [
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: hero
        },
    ]
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="relative flex flex-col h-screen">
                <img src={hero} alt="Hero" className="object-cover w-full h-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-70 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-4xl font-bold text-center text-white">COMPACT CHEFS EVENTS AND CATERERS</h1>
                    <p className="mt-4 text-3xl text-center">Where your food speaks for your taste</p>
                    <button className="mt-6 bg-orange-500 px-6 py-2 rounded text-white-500 hover:bg-gray-700">BOOK</button>
                </div>
            </div>

            <div className=" ">
                {herofiles.map((item, index) => {
                    return <img src={item.img} alt="" key={index} className='w-60 rounded-lg ' />

                })}
            </div>
        </div>
    );
}

export default Hero;
