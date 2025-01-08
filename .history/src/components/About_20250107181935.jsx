import React from 'react';

function About() {
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
            image: "https://via.placeholder.com/150", // Replace with actual image URL
        },
    ];

    return (
        <div>
            {/* About Section */}
            <section className="flex flex-wrap items-center justify-between p-8 mt-4 bg-[#f5f5dc]">
                {/* Left Side (Image) */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                        src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg"
                        alt="Compact Chef Events and Caterers"
                        className="w-full h-96 rounded-lg object-cover"
                    />
                </div>

                {/* Right Side (Content) */}
                <div className="w-full md:w-1/2 md:pl-8">
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
                </div>
            </section>

            {/* Our Team Section */}
            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-[#faf3e0] p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-lg font-bold text-[#8b8000]">{member.name}</h3>
                            <p className="text-sm text-gray-700">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
