import React from 'react';
import hero from '../assets/hero.jpg';

function Hero() {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {/* Left Section: Image and Overlay */}
            <div className="relative flex flex-col h-screen">
                <img src={hero} alt="Hero" className="object-cover w-full h-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-70 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-3xl font-bold text-center">COMPACT CHEFS EVENTS AND CATERERS</h1>
                    <p className="mt-4 text-center">Where your food speaks for your taste</p>
                    <button className="mt-6 bg-gray-600 px-6 py-2 rounded text-red-500 hover:bg-gray-700">BOOK</button>
                </div>
            </div>

            {/* Right Section: Text Content */}
            <div className="flex items-center justify-center p-8">
                <p className="text-gray-700 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptatibus totam, illo fugit veritatis voluptatum iste! Quo nulla id fugiat.
                </p>
            </div>
        </div>
    );
}

export default Hero;
