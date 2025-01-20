import React, { useState } from 'react';
import { motion } from "framer-motion";
import Reviews from '../components/Reviews'

function About() {

    const services = [
        {
            name: "Event Planning",
            description: "Professional planning for all types of events, ensuring every detail is perfect.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290824/coopr_hxrzgo.jpg", // Replace with actual image URL
        },
        {
            name: "Catering Services",
            description: "Delicious and tailored menu options for your special occasions.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp", // Replace with actual image URL
        },
        {
            name: "Corporate Events",
            description: "Elegant and professional services for your corporate gatherings.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg", // Replace with actual image URL
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
            name: "Garden Parties",
            description: "Perfectly organized outdoor parties for a refreshing experience.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293338/WhatsApp_Image_2025-01-19_at_16.24.37_ca4fb2a5_o4sb7e.jpg",
        },
        {
            name: "Birthday",
            description: "Celebrate your birthday in style with our expert party planning.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg", // Replace with actual image URL
        },
        {
            name: "Private Events",
            description: "Tailored and exclusive services for intimate gatherings.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg", // Replace with actual image URL
        },
    ];

    const [selectedImage, setSelectedImage] = useState('');

    // Handle opening of image in full-screen
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // C
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1737357474/WhatsApp_Image_2025-01-20_at_07.56.56_37094b5a-removebg-preview_1_etgxbt.jpg",
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1737291174/menu_ke5uf1.webp",

        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497241/EC_menus1_jeid2z.jpg"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div>

            <motion.section
                className="flex flex-wrap items-center justify-between p-8 mt-4 bg-white"
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
                >
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8b8000] mb-4">
                        About Compact Chef Events and Caterers
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

            <div className="relative bg-gold h-auto text-white my-10 p-2 md:p-14 ml-5 md:ml-32 flex flex-col md:flex-row gap-8 w-[90%] md:w-3/4">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Fostering <span className="text-white">Trust</span> and{" "}
                        <span className="text-white">Collaboration</span>
                    </h2>
                    <p className="text-base md:text-lg mt-4">
                        At Compact Chef Events, we are dedicated to fostering trust and
                        collaboration by delivering exceptional service and engaging
                        meaningfully with our clients.
                    </p>
                </div>

                <div className="md:w-3/4 mt-4 md:mt-[-100px]">
                    <video
                        className="w-full bg-gold h-56 sm:h-72 md:h-96 md:ml-40 mx-auto rounded-lg shadow-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://res.cloudinary.com/db5pgr14l/video/upload/v1737290393/VID-20250105-WA0035_n15qmh.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Second Video (Bottom-Left) */}
                <img
                    src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg"
                    alt=""
                    className="absolute top-64 hidden left-5 w-1/2 h-32 sm:h-48  md:h-64 md:flex object-cover rounded-lg shadow-lg"
                />
            </div>

            <section className="py-1 p-1 px-4 md:p-20 bg-white">
                <h2 className="text-2xl font-bold text-[#8b8000] text-center mb-6">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-32 h-32 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <p className="mt-2">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="flex flex-wrap justify-center py-10">
                <div className="text-center mb-4">
                    <h3 className="text-2xl text-[#8b8000] font-semibold mb-4">Contact Us</h3>
                    <p className="mb-4">For inquiries and booking, feel free to contact us directly.</p>
                    <a href="tel:+1234567890" className="text-[#8b8000] hover:underline">Call Us</a> |{" "}
                    <a href="mailto:info@compactchef.com" className="text-[#8b8000] hover:underline">Email Us</a>
                </div>
            </section>

            <section className="absolute bottom-5 right-5">
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/60/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-8 h-8"
                    />
                </a>
            </section>

        </div>
    );
}

export default About;
