import React, { useState } from 'react';
import { motion } from "framer-motion";
import Reviews from '../components/Reviews';

function About() {
    const services = [
        {
            name: "Event Planning",
            description: "Professional planning for all types of events, ensuring every detail is perfect.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290824/coopr_hxrzgo.jpg",
        },
        // other service objects...
    ];

    const [selectedImage, setSelectedImage] = useState('');

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1737357474/WhatsApp_Image_2025-01-20_at_07.56.56_37094b5a-removebg-preview_1_etgxbt.jpg",
        // other image URLs...
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <motion.section
                className="flex flex-wrap items-center justify-between p-8 mt-4 bg-white"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="w-full md:w-1/2 mb-4 md:mb-0"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, y: -100 }}
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
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, y: -100 }}
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

            {/* Add the ElfSight Widget Button */}
            <div className="form-right mt-6 text-center">
                {/* ElfSight widget integration */}
                <div className="elfsight-app-1552705b-cfc2-43a1-8c52-a2f88696bc8e" data-elfsight-app-lazy></div>
            </div>

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
            </div>

            {/* Additional content below */}
            <section className="py-1 p-1 px-4 md:p-20 bg-white">
                {/* Content for services and other sections... */}
            </section>
        </div>
    );
}

export default About;
