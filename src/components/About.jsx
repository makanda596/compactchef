import React from 'react'

function About() {
    return (
        <div>
            <section className="flex items-center justify-between p-8 bg-gray-100">
                <div className="w-1/2">
                    <img src="your-image-url.jpg" alt="Compact Chef Events and Caterers" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                <div className="w-1/2 pl-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Compact Chef Events and Caterers</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Compact Chef Events and Caterers specializes in delivering exceptional culinary experiences for all types of events. Whether you're hosting an intimate gathering, a corporate event, or a large celebration, we bring the finest food and hospitality to your occasion. Our team of expert chefs and event planners ensure that every detail is handled with care to make your event a memorable one.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        From exquisite menu options to flawless event execution, we pride ourselves on providing personalized services that cater to your specific needs. Let us take care of the catering, so you can enjoy your event stress-free.
                    </p>

                    <a href="#contact" className="bg-gold text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition-colors duration-300">
                        Contact Us
                    </a>
                </div>
            </section>

        </div>
    )
}

export default About
