import React, { useState } from 'react';
import { motion } from "framer-motion";
import Reviews from '../components/Reviews'
function About() {

    const services = [
        {
            name: "Event Decoration",
            description: "We specialize in elegant and customized event decorations, creating the perfect ambiance for weddings, corporate functions, birthdays, and special celebrations",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618735/wed12_obq3yo.jpg", // Replace with actual image URL
        },
        {
            name: "Catering Services",
            description: " Our catering services are tailored to suit weddings, corporate gatherings, private parties, and special occasions. Whether you need a buffet setup, plated meals, live cooking stations, or custom menus, our team ensures a seamless dining experience.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp", // Replace with actual image URL
        },
        {
            name: "Corporate Events",
            description: "Elegant and professional services for your corporate gatherings.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg", // Replace with actual image URL
        },
        {
            name: "Photography Services",
            description: "we capture the moments that make your events special. Our photography services focus on showcasing beautifully plated dishes, elegant table setups, and the lively atmosphere of your event.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618072/wed13_uhewal.jpg",
        },
        {
            name: "Baby Shower",
            description: "Create a magical and memorable baby shower experience.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg"
        },
        {
            name: "Wedding",
            description: "Make your big day unforgettable with our exceptional wedding services.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293459/WhatsApp_Image_2025-01-19_at_16.24.38_9efa2655_jvic4e.jpg", // Replace with actual image URL
        },
        
        {
            name: "Birthday",
            description: "Celebrate your birthday in style with our expert party planning.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg", // Replace with actual image URL
        },
        {
            name: "Tent Services",
            description: "Whether you're hosting a wedding, corporate event, or private gathering, our well-designed tents provide the perfect shelter while enhancing the ambiance of your occasion. We offer a variety of tent sizes and styles, complete with decorations, lighting, and seating arrangements to match your theme.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620073/IMG-20250106-WA0047_c45nav.jpg", // Replace with actual image URL
        },
    ];

    const [selectedImage, setSelectedImage] = useState('');

    // Handle opening of image in full-screen
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

 
    return (
        <div>

            <motion.section
                className="flex flex-wrap items-center justify-between px-6 py-2 mt-1 bg-white"
                initial={{ opacity: 0, y: 100 }} // Initial position moved down
                whileInView={{ opacity: 1, y: 0 }} // Moves up to its normal position
                viewport={{ once: true, amount: 0.5 }}
                exit={{ opacity: 0, y: -100 }} // Moves out upward on exit
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="w-full md:w-1/2 mb-4 md:mb-0"
                    initial={{ opacity: 0, y: 100 }} // Moves up from down
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, y: -100 }} // Moves out upward
                    transition={{ duration: 0.6 }}
                > <h3 className=' text-2xl font-bold text-[#8b8000] text-center mb-2 '>ABOUT US</h3>
                    <img
                        src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg"
                        alt="Compact Chef Events and Caterers"
                        className="w-full h-96 rounded-lg object-cover md:object-contain"
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, y: 100 }} // Moves up from down
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, y: -100 }} // Moves out upward
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold text-[#8b8000] mb-4">
                        Compact Chefs Events and Caterers
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                        Compact Chef Events and Caterers specializes in delivering exceptional culinary experiences for all types of events. Whether you're hosting an intimate gathering, a corporate event, or a large celebration, we bring the finest food and hospitality to your occasion. Our team of expert chefs and event planners ensure that every detail is handled with care to make your event a memorable one.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        From exquisite menu options to flawless event execution, we pride ourselves on providing personalized services that cater to your specific needs. Let us take care of the catering, so you can enjoy your event stress-free.
                    </p>

                    <a
                        href="/contact"
                        className="bg-[#8b8000] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#a08d00] transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </motion.section>


            <div className="relative  h-auto text-black my-2 p-2 md:p-14 ml-5 md:ml-32 flex flex-col md:flex-row gap-6 w-[90%] md:w-3/4">
                <div className="md:w-full">
                    <h2 className="text-xl font-bold mb-2  opacity-90 leading-tight text-center mx-auto">
                        Ready to Elevate Your Event?
                    </h2>
                    <p className="text-lg font-medium text-black mb-2 md:mb-6">
                        Let us make your special moments even more memorable.Don’t just dream about the perfect event—let’s make it a reality together. Book with us today, and let’s create something beautiful.
                    </p>
                </div>

                <div className="md:w-3/4 mt-2 md:mt-[-140px]">
                    <video
                        className="w-full  h-56 sm:h-72 md:h-96 md:ml-40  "
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://res.cloudinary.com/db5pgr14l/video/upload/v1737290393/VID-20250105-WA0035_n15qmh.mp4" type="video/mp4" />
                    </video>
                </div>


                <img
                    src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg"
                    alt=""
                    className="absolute top-52 hidden left-5 w-1/2 h-32 sm:h-48  md:h-64 md:flex object-cover rounded-lg shadow-lg"
                />
            </div>


            <section className="py-1 p-1 px-4 md:p-28 bg-white">
                <h2 className="text-2xl font-bold text-[#8b8000] text-center mb-6 ">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center  p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-44 object-cover rounded-md mb-2 cursor-pointer"
                                onClick={() => setSelectedImage(service.image)} // Set the selected image on click
                            />
                            <h3 className="text-lg font-bold text-[#8b8000] mb-1">{service.name}</h3>
                            <p className="text-sm text-gray-700 mb-2 text-center">{service.description}</p>
                            <button className="bg-[#8b8000] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300">
                                <a href="/services">Know More</a>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={() => setSelectedImage(null)} // Close the modal when clicking outside the image
                    >
                        <div
                            className="bg-white p-4 rounded-lg shadow-lg relative"
                            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-700 hover:text-black"
                                onClick={() => setSelectedImage(null)} // Close button
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-[80vh] rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </section>
            
            {/* gallery */}
            <section className="p-2 mt-4 md:p-8">
                <div className="flex items-center justify-between mb-4 px-2 md:px-20">
                    <h2 className="text-2xl font-bold text-[#8b8000]">Our Gallery</h2>
                    <button className=" px-4 py-2 text-sm font-serif  text-blue-600 hover:text-red-600 transition-all">
                        <a href="/gallery" >VISIT GALLERY</a>
                    </button>
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <button
                                className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-screen rounded-md"
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293936/IMG-20250108-WA0100_nvowbe.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737291632/men_exm0pj.webp",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290824/coopr_hxrzgo.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293188/IMG-20250105-WA0315_y8zi2n.jpg",
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row with 5 Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737294236/EC_menus1_qgbbd4.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264342/compactChef/a8jba9dz0qq0wnfzacjg.jpg",
                            "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293459/WhatsApp_Image_2025-01-19_at_16.24.38_9efa2655_jvic4e.jpg",
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div
                className="bg-gray-100 py-8 h-96 flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/db5pgr14l/image/upload/v1737449803/istockphoto-613768110-612x612_wfrh0c.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="max-w-4xl mx-auto px-4 text-white font-bold text-center">
                    <h2 className="text-2xl font-semibold mb-4 opacity-100">CONTACT US FOR A QUOTE</h2>
                    <button className="bg-[#8b8000] text-white px-6 py-3 mb-4 rounded hover:bg-[#a08d00] transition-colors duration-300">
                        <a href="/book" target="_blank">Request A Quote</a>
                    </button>
                </div>
            </div>


            <Reviews />
<div>
    <hi>send us a comment</hi>
</div>
        </div >
    );
}

export default About;
