import React from 'react';
import hero from '../assets/hero.jpg';
import event from '../assets/event.jpg'
import cake from '../assets/cake.jpg'
function Hero() {
    const herofiles = [
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: cake
        },
        {
            id: 1,
            img: event
        },
        {
            id: 1,
            img: hero
        }
        ,
        {
            id: 1,
            img: event
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

        <div className="grid md:grid-cols-2 gap-4 my-2 px-2">
            <div className="relative flex flex-col h-screen">
                <img src={hero} alt="Hero" className="object-cover w-full h-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-20 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-4xl font-bold text-center text-white">COMPACT CHEFS EVENTS AND CATERERS</h1>
                    <p className="mt-4 text-3xl text-center">Where your food speaks for your taste</p>
                    <button className="mt-6 bg-orange-500 px-6 py-2 rounded text-white-500 hover:bg-gray-700">BOOK WITH US</button>
                </div>
            </div>

            <div className="gap-4 p-12">
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {herofiles.slice(0, 4).map((item, index) => (
                        <img
                            src={item.img}
                            alt=""
                            key={index}
                            className="h-64 w-full rounded-lg object-cover"
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                    {herofiles.slice(4, 7).map((item, index) => (
                        <img
                            src={item.img}
                            alt=""
                            key={index}
                            className="h-64 w-full rounded-lg object-cover"
                        />
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {herofiles.slice(7, 11).map((item, index) => (
                        <img
                            src={item.img}
                            alt=""
                            key={index}
                            className="h-64 w-full rounded-lg object-cover"
                        />
                    ))}
                </div>
            </div>



        </div>
    );
}

export default Hero;
