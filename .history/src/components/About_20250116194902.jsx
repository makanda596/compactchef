import React, { useState } from 'react';
import { motion } from "framer-motion";
import Reviews from '../components/Reviews';

function About() {
    const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

    const services = [
        {
            name: "Event Planning",
            description: "Professional planning for all types of events, ensuring every detail is perfect.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264342/compactChef/a8jba9dz0qq0wnfzacjg.jpg",
        },
        {
            name: "Catering Services",
            description: "Delicious and tailored menu options for your special occasions.",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Corporate Events",
            description: "Elegant and professional services for your corporate gatherings.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg",
        },
        {
            name: "Baby Shower",
            description: "Create a magical and memorable baby shower experience.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg",
        },
        {
            name: "Wedding",
            description: "Make your big day unforgettable with our exceptional wedding services.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg",
        },
        {
            name: "Garden Parties",
            description: "Perfectly organized outdoor parties for a refreshing experience.",
            image: "https://unsplash.com/photos/a-table-outside-with-a-pot-and-pan-on-it-LySh239_yAY",
        },
        {
            name: "Birthday",
            description: "Celebrate your birthday in style with our expert party planning.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
        },
        {
            name: "Private Events",
            description: "Tailored and exclusive services for intimate gatherings.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg",
        },
    ];

    return (
        <div>
            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={() => setSelectedImage(null)} // Close the modal when clicking outside the image
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-screen rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-800"
                            onClick={() => setSelectedImage(null)} // Close button
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-[#faf3e0] p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-32 object-cover rounded-md mb-4 cursor-pointer"
                                onClick={() => setSelectedImage(service.image)} // Set the clicked image
                            />
                            <h3 className="text-lg font-bold text-[#8b8000] mb-2">{service.name}</h3>
                            <p className="text-sm text-gray-700 mb-4 text-center">{service.description}</p>
                            <button className="bg-[#8b8000] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300">
                                <a href="/services">Know More</a>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
