import React from 'react';

function Menu() {
    const menuItems = [
        {
            title: "Breakfast Dish",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            description: "Start your day with our delightful breakfast options, made fresh every morning.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
            viewLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Lunch Dish",
            image: "https://via.placeholder.com/300",
            description: "Explore our variety of lunch dishes, perfect for a midday treat.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dinner Dish",
            image: "https://via.placeholder.com/300",
            description: "End your day with a sumptuous dinner crafted to perfection.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dessert",
            image: "https://via.placeholder.com/300",
            description: "Indulge in our sweet and savory dessert options for a perfect finale.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
    ];

    return (
        <div className="bg-gray-100">
            {/* Menu Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Menu</h2>
                    <p className="text-center text-gray-600 mb-12">
                        Discover a selection of curated dishes designed to please every palate.
                        Whether you’re planning an event or dining at home, we’ve got you covered.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center text-white">
                                        <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                    <div className="flex justify-between">
                                        <a
                                            href={item.viewLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-[#8b8000] hover:text-[#a08d00]"
                                        >
                                            View Menu
                                        </a>
                                        <a
                                            href={item.downloadLink}
                                            download
                                            className="bg-[#8b8000] text-white py-2 px-4 rounded-md text-sm hover:bg-[#a08d00] transition"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Contact Us</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Have questions or want to place an order? Reach out to us using the form below or contact us directly!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#8b8000] text-white py-2 px-4 rounded-lg hover:bg-[#a08d00] transition"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Contact Details */}
                        <div className="flex flex-col justify-center items-start bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                            <p className="text-gray-700 mb-2">
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Email:</strong> contact@example.com
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Address:</strong> 123 Culinary Street, Food City, FC 45678
                            </p>
                            <p className="text-gray-700">
                                Follow us on:
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-[#8b8000] hover:text-[#a08d00]">Facebook</a>
                                <a href="#" className="text-[#8b8000] hover:text-[#a08d00]">Instagram</a>
                                <a href="#" className="text-[#8b8000] hover:text-[#a08d00]">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
