import React from 'react';
import event from '../assets/event.jpg'
import { motion } from "framer-motion";
function Hero() {

    const herofiles = [
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg",
        },
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg"
        },
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288839/WhatsApp_Image_2025-01-08_at_17.57.52_d9545b91_ktmir3.jpg"
        },
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288753/baby_qeno4b.jpg"
        }
        ,
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288560/private_l3gdho.jpg"
        },
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288650/WhatsApp_Image_2025-01-06_at_11.08.22_b3096254_nsjqjo.jpg"
        },
        {
            id: 1,
            img: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288886/clie_xfvv2v.jpg"
        },


    ]

    return (

        <div className="grid md:grid-cols-2 gap-4 my-2 px-2 pt-20">
            <div className="relative flex flex-col h-screen">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://res.cloudinary.com/db5pgr14l/video/upload/v1737108402/VID-20250106-WA0006_xpduty.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-20 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-4xl font-bold text-center text-black">
                        COMPACT CHEFS EVENTS AND CATERERS
                    </h1>
                    <p className="mt-4 text-2xl text-center text-black">
                        Where your food speaks for your taste
                    </p>
                    <a href="/book">
                        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
                            BOOK WITH US
                        </button>
                    </a>
                </div>
            </div>


            <div className="gap-4 p-12">
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {herofiles.slice(0, 4).map((item, index) => (
                        <motion.img
                            src={item.img}
                            alt=""
                            key={index}
                            className="h-64 w-full  rounded-lg object-cover"
                            initial={{ opacity: 0 }}  // Starts with 0 opacity
                            animate={{ opacity: 1 }}   // Fades in to 1 opacity
                            transition={{ duration: 0.8, delay: index * 0.2 }}  // Staggered fade-in
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                    {herofiles.slice(4, 7).map((item, index) => (
                        <motion.img
                            src={item.img}
                            alt=""
                            key={index}
                            className="h-64 w-full rounded-lg object-cover"
                            initial={{ opacity: 0 }}  // Starts with 0 opacity
                            animate={{ opacity: 1 }}   // Fades in to 1 opacity
                            transition={{ duration: 0.8, delay: index * 0.2 }}  // Staggered fade-in
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}
export default Hero;
