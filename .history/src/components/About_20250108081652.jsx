import React, { useState } from 'react';
function About() {
    const menuItems = [
        {
            title: "Breakfast Dish",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
            viewLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx", // Replace with actual view link

        },
        {
            title: "Lunch Dish",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx", // Replace with actual document link
            image: "https://via.placeholder.com/300", // Replace with actual image URL
        },
        {
            title: "Dinner Dish",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx", // Replace with actual document link
            image: "https://via.placeholder.com/300", // Replace with actual image URL
        },
        {
            title: "Dessert",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx", // Replace with actual document link
            image: "https://via.placeholder.com/300", // Replace with actual image URL
        },
    ];
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

    const [viewMenuUrl, setViewMenuUrl] = useState("");
    return (
        <div>
            <section className="flex flex-wrap items-center justify-between p-8 mt-4 bg-[#f5f5dc]">
                {/* Left Side (Image) */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                        src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736261958/compactChef/rbllj9bnxq8yzdbe9cdw.jpg"
                        alt="Compact Chef Events and Caterers"
                        className="w-full h-96 rounded-lg object-contain"
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
            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-[#faf3e0] p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-32 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold text-[#8b8000] mb-2">{service.name}</h3>
                            <p className="text-sm text-gray-700 mb-4 text-center">{service.description}</p>
                            <button className="bg-[#8b8000] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300">
                                Know More
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Menu</h2>
                <p className="text-center mb-4 text-gray-700">
                    The menu items displayed below are a selection of our preferred and randomly curated dishes. However, we are delighted to customize the menu to suit your specific tastes and event needs. Let us know your preferences, and we’ll create a culinary experience uniquely tailored for you.
                </p>

                {/* Display iframe if a menu is selected */}
                {viewMenuUrl && (
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-center text-gray-800 mb-4">Viewing Menu</h3>
                        <iframe
                            src={viewMenuUrl}
                            className="w-full h-96 border-2 border-gray-300 rounded-lg"
                            title="Menu Preview"
                        ></iframe>
                    </div>
                )}

                {/* Grid of Menu Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg bg-white flex flex-col justify-between"
                        >
                            {/* Item Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />

                            {/* Title */}
                            <h3 className="text-lg font-bold text-center text-gray-800 mt-4 px-2">
                                {item.title}
                            </h3>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between gap-4 p-4">
                                <button
                                    onClick={() => setViewMenuUrl(item.viewLink)} // Set menu URL for iframe
                                    className="bg-gray-200 text-gray-800 py-2 px-4 text-center rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300"
                                >
                                    View Menu
                                </button>
                                <a
                                    href={item.downloadLink} // Download link
                                    download
                                    className="bg-[#8b8000] text-white py-2 px-4 text-center rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>




        </div>
    );
}

export default About;
