import React from 'react';
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
            image: "https://via.placeholder.com/150", // Replace with actual image URL
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
    const teamMembers = [
        {
            name: "John Doe",
            position: "Head Chef",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
        },
        {
            name: "Jane Smith",
            position: "Event Coordinator",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
        },
        {
            name: "Alice Johnson",
            position: "Pastry Chef",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264937/babyshower_vodjfd.jpg", // Replace with actual image URL
        },
    ];

    return (
        <div>

            <motion.section
                className="flex flex-wrap items-center justify-between p-8 mt-4 bg-[#f5f5dc]"
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

                {/* Right Side (Content) */}
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
                        href="#contact"
                        className="bg-[#8b8000] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#a08d00] transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </motion.section>


            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-[#faf3e0] p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}  // Initial state: hidden and slightly smaller
                            whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
                            viewport={{ once: true, amount: 0.5 }}  // Trigger animation when 50% of the element is visible
                            transition={{ delay: index * 0.1, duration: 0.5 }} // Delay for staggered animation
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-32 object-cover rounded-md mb-4"
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

            {/* menu section */}
            <div className="bg-white p-8">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">

                    {/* Left Section (Text and Buttons) */}
                    <motion.div
                        className="md:w-1/2 md:pr-8"
                        initial={{ opacity: 0, x: -100 }}  // Starts from the left
                        whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
                        animate={{ opacity: 1, x: 0 }}     // Moves to center
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ delay: 1, duration: 0.5 }} // Delay for staggered animation
                        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is visible
                    >
                        <h1 className="text-4xl font-cursive mb-4">Menus</h1>
                        <p className="text-lg mb-6">Come see the items featured from our scratch-made kitchen.</p>
                        <div className="flex space-x-4">
                            <button className="bg-gray-900 text-white px-4 py-2 rounded">ATLANTA</button>
                            <button className="bg-gray-900 text-white px-4 py-2 rounded">CARY</button>
                        </div>
                    </motion.div>

                    {/* Right Section (Image) */}
                    <motion.div
                        className="md:w-1/2 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img
                            src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg"
                            alt="Various dishes"
                            className="w-full h-96 object-cover rounded"
                        />
                    </motion.div>

                </div>
            </div>
            <Reviews />

            <div className="bg-gray-100 py-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold mb-4">CONTACT US FOR A QUOTE</h2>
                    <button className="bg-[#8b8000] text-white px-6 py-3 mb-4 rounded hover:bg-[#a08d00] transition-colors duration-300">
                        Request A Quote
                    </button>
                    <p className="text-lg mb-2">Drop us a quick call or email and we'll get straight back to you.</p>
                    <p className="text-lg">163 Enmore Road, Enmore NSW 2042</p>
                    <p className="text-lg">    <a href="tel:+254791317298" target="_blank"
                        rel="noopener noreferrer" className='py-1 hover:text-gold'> +254 791 317 298</a></p>
                    <p className="text-lg"><a href="mailto:compactchefsevents@gmail.com" target="_blank"
                        rel="noopener noreferrer" className='py-1 hover:text-gold'>compactchefsevents@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;
