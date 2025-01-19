import React, { useState } from 'react';
import { motion } from "framer-motion";
import Reviews from '../components/Reviews'
function About() {

    const services = [
        {
            name: "Event Planning",
            description: "Professional planning for all types of events, ensuring every detail is perfect.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264342/compactChef/a8jba9dz0qq0wnfzacjg.jpg", // Replace with actual image URL
        },
        {
            name: "Catering Services",
            description: "Delicious and tailored menu options for your special occasions.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288560/private_l3gdho.jpg", // Replace with actual image URL
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
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg", // Replace with actual image URL
        },
        {
            name: "Garden Parties",
            description: "Perfectly organized outdoor parties for a refreshing experience.",
            image: "https://unsplash.com/photos/a-table-outside-with-a-pot-and-pan-on-it-LySh239_yAY",
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
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/another-image.jpg",
        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg"
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
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
            >

                <motion.div
                    className="w-full md:w-1/2 mb-4 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}  // Trigger the animation when in view
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg"
                        alt="Compact Chef Events and Caterers"
                        className="w-full h-96 rounded-lg object-contain"
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}  // Trigger the animation when in view
                    viewport={{ once: true, amount: 0.5 }}
                    exit={{ opacity: 0, x: -100 }}
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

            <div className="relative bg-gold h-auto text-white my-10 p-6 md:p-14 ml-5 md:ml-32 flex flex-col md:flex-row gap-8 w-[90%] md:w-3/4">
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

                {/* First Video Section */}

                <div className="md:w-3/4 mt-4 md:mt-[-100px]">
                    <video
                        className="w-full bg-black h-56 sm:h-72 md:h-96 md:ml-40 mx-auto rounded-lg shadow-lg"
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


            <section className="p-20 bg-white">
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
                                onClick={() => setSelectedImage(service.image)} // Set the selected image on click
                            />
                            <h3 className="text-lg font-bold text-[#8b8000] mb-2">{service.name}</h3>
                            <p className="text-sm text-gray-700 mb-4 text-center">{service.description}</p>
                            <button className="bg-[#8b8000] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300">
                                <a href="/services">Know More</a>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for displaying selected image */}
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
            <div className="bg-white p-8">
                <div>
                    {/* Right Section (Image Slider) */}
                    <motion.div
                        className="md:w-full mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="relative w-full">
                            <img
                                src={images[currentIndex]}
                                alt="Dish"
                                className="w-full h-96 object-cover rounded"
                            />
                            <div className="absolute top-40 left-0 right-0 flex justify-between items-center p-4">
                                <button
                                    onClick={prevSlide}
                                    className="bg-black text-white p-2 rounded-full"
                                >
                                    &#10094;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-black text-white p-2 rounded-full"
                                >
                                    &#10095;
                                </button>
                            </div>
                            {/* View Menu Button */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded">
                                <button className="text-sm"><a href='/menu'> View Menu</a></button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Gallery Section */}
            <section className="p-8">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Gallery</h2>

                {/* Display selected image */}
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

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264342/compactChef/a8jba9dz0qq0wnfzacjg.jpg",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg",
                        "https://unsplash.com/photos/a-table-outside-with-a-pot-and-pan-on-it-LySh239_yAY",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
                        "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg"
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
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
                <button >VISIT GALLERYU</button>
            </section>




            <Reviews />

            <div className="bg-gray-100 py-8" style={{ backgroundImage: "url('https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-4xl mx-auto px-4 text-white text-center">
                    <h2 className="text-2xl font-semibold mb-4">CONTACT US FOR A QUOTE</h2>
                    <button className="bg-[#8b8000] text-white px-6 py-3 mb-4 rounded hover:bg-[#a08d00] transition-colors duration-300">
                        <a href="/book" target='_blank'>Request A Quote </a>
                    </button>
                    <p className="text-lg mb-2">Drop us a quick call or email and we'll get straight back to you.</p>
                    <p className="text-lg font-bold">Molem, Kisumu, Kenya</p>
                    <p className="text-lg">
                        <a href="tel:+254791317298" target="_blank"
                            rel="noopener noreferrer" className='py-1 hover:text-gold'> +254 791 317 298</a>
                    </p>
                    <p className="text-lg">
                        <a href="mailto:compactchefsevents@gmail.com" target="_blank"
                            rel="noopener noreferrer" className='py-1 hover:text-gold font-normal'>compactchefsevents@gmail.com</a>
                    </p>
                </div>
            </div>

        </div >
    );
}

export default About;
