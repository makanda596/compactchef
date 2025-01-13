import React, { useState } from "react";

// Services data
const services = [
    {
        id: 1,
        category: "Corporate Events",
        items: [
            {
                id: 1,
                name: "Annual General Meeting",
                image: "https://via.placeholder.com/150", // Replace with actual image URL
            },
            {
                id: 2,
                name: "Team Building Event",
                image: "https://via.placeholder.com/150", // Replace with actual image URL
            },
            {
                id: 3,
                name: "Product Launch",
                image: "https://via.placeholder.com/150", // Replace with actual image URL
            },
        ],
    },
    {
        id: 2,
        category: "Weddings",
        items: [
            {
                id: 1,
                name: "Traditional Wedding",
                image: "https://via.placeholder.com/150",
            },
            {
                id: 2,
                name: "White Wedding",
                image: "https://via.placeholder.com/150",
            },
        ],
    },
    {
        id: 3,
        category: "Baby Showers",
        items: [
            {
                id: 1,
                name: "Outdoor Baby Shower",
                image: "https://via.placeholder.com/150",
            },
            {
                id: 2,
                name: "Indoor Baby Shower",
                image: "https://via.placeholder.com/150",
            },
        ],
    },
];

const categories = ["All", "Corporate Events", "Weddings", "Baby Showers"];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("Corporate Events");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Filter items for the selected category
    const filteredItems = services.find(
        (service) => service.category === selectedCategory
    )?.items;

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0 overflow-y-auto`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gold">Our Services</h2>
                    {/* Close Button for Small Screens */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Categories */}
                <div className="space-y-4 max-h-full">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setIsSidebarOpen(false); // Close sidebar on small screens
                            }}
                            className={`block w-full text-left py-2 px-4 rounded-lg ${selectedCategory === category
                                    ? "bg-gold text-gray-800"
                                    : "hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Sidebar Toggle Button */}
            <div className="lg:hidden p-4 bg-gray-800">
                <button
                    className="text-white"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    {selectedCategory}
                </h1>

                {/* Display Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredItems?.map((item) => (
                        <div
                            key={item.id}
                            className="relative p-4 bg-white rounded-lg shadow hover:shadow-lg"
                        >
                            {/* Event Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />

                            {/* Event Name */}
                            <h3 className="text-xl font-bold mt-2">{item.name}</h3>

                            {/* Three Dot Menu */}
                            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6h.01M12 12h.01M12 18h.01"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Services;
