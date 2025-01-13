import React, { useState } from "react";

// Services data
const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings, conferences, and office parties, adding a touch of sophistication.",
    },
    {
        id: 3,
        category: "Baby Showers",
        title: "Baby Showers",
        description: "Delightful catering and elegant setups to celebrate the arrival of your little one in style.",
    },
    {
        id: 4,
        category: "Garden Events",
        title: "Garden Parties",
        description: "Fresh, seasonal dishes and outdoor-friendly setups to elevate your garden parties.",
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Celebrations",
        description: "Custom menus and festive vibes to make your birthday a memorable one.",
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Chef Services",
        description: "Exclusive private chef services for intimate gatherings or special dinners at your home.",
    },
    {
        id: 7,
        category: "Event Planning",
        title: "Event Planning",
        description: "Comprehensive planning from start to finish to make your events seamless and unforgettable.",
    },
];

const categories = [
    "All",
    "Corporate Events",
    "Baby Showers",
    "Weddings",
    "Garden Events",
    "Birthdays",
    "Private Bookings",
    "Event Planning",
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedService, setSelectedService] = useState(services[0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle for sidebar on small screens

    // Filter services based on the selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50 py-20">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0`}
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
                <div className="space-y-4">
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

                {/* List of Filtered Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="p-4 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer"
                        >
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Services;
