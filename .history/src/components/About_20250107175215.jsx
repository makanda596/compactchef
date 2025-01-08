import React from 'react';

function About() {
    return (
        <div>
            {/* About Section */}
            <section className="flex flex-wrap items-center justify-between p-8 mt-4 bg-gray-100">
                {/* Left Side (Image) */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                        src="your-image-url.jpg"
                        alt="Compact Chef Events and Caterers"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side (Content) */}
                <div className="w-full md:w-1/2 md:pl-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
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
                        className="bg-gold text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="p-8 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150" // Replace with actual image URL
                            alt="John Doe"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                        <p className="text-sm text-gray-600">Head Chef</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150" // Replace with actual image URL
                            alt="Jane Smith"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
                        <p className="text-sm text-gray-600">Event Coordinator</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150" // Replace with actual image URL
                            alt="Alice Johnson"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">Alice Johnson</h3>
                        <p className="text-sm text-gray-600">Pastry Chef</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
