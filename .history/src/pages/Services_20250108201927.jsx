import React, { useState } from "react";

// Services data
const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings, conferences, and office parties, adding a touch of sophistication.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        category: "Baby Showers",
        title: "Baby Showers",
        description: "Delightful catering and elegant setups to celebrate the arrival of your little one in style.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        category: "Garden Events",
        title: "Garden Parties",
        description: "Fresh, seasonal dishes and outdoor-friendly setups to elevate your garden parties.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Celebrations",
        description: "Custom menus and festive vibes to make your birthday a memorable one.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Chef Services",
        description: "Exclusive private chef services for intimate gatherings or special dinners at your home.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        category: "Event Planning",
        title: "Event Planning",
        description: "Comprehensive planning from start to finish to make your events seamless and unforgettable.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        category: "Catering Services",
        title: "General Catering Services",
        description: "Our expert team provides catering services for all types of events, offering delicious food tailored to your needs.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        category: "Catering Services",
        title: "Buffet Catering",
        description: "Enjoy a variety of buffet options with diverse cuisines for your events.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        category: "Catering Services",
        title: "Custom Menus",
        description: "Collaborate with our chefs to design menus tailored to your event and preferences.",
        image: "https://via.placeholder.com/150",
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
    "Catering Services",
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle for sidebar on small screens

    // Filter services based on the selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0 overflow-y-auto`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gold">Our Services</h2>
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
                    {selectedCategory} Services
                </h1>

                {/* List of Filtered Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative p-4 bg-white rounded-lg shadow hover:shadow-lg"
                        >
                            {/* Service Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />

                            {/* Service Title */}
                            <h3 className="text-lg font-bold mt-2">{service.title}</h3>

                            {/* Service Description */}
                            <p className="text-sm text-gray-600">{service.description}</p>

                            {/* Three-Dot Button */}
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
