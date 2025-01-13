import React, { useState } from "react";

// Services data
const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees.",
        image: "https://via.placeholder.com/150",
        location: "Garden Villa, Nairobi",
        smallDescription: "Elegant wedding setup with a custom menu.",
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings and conferences.",
        image: "https://via.placeholder.com/150",
        location: "City Hall, Nairobi",
        smallDescription: "Formal setup with corporate-style dining.",
    },
    // Additional services...
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle
    const [menuOpen, setMenuOpen] = useState(null); // Track the open menu (by service ID)

    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id)); // Toggle dropdown
    };

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
                                setIsSidebarOpen(false); // Close sidebar
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
                <button className="text-white" onClick={() => setIsSidebarOpen(true)}>
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

                            {/* Location and Description */}
                            <p className="text-sm text-gray-600 font-semibold">
                                Location: {service.location}
                            </p>
                            <p className="text-sm text-gray-600">{service.smallDescription}</p>

                            {/* Buttons */}
                            <div className="mt-4 flex space-x-4">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                                    onClick={() => alert(`Viewing details for ${service.title}`)}
                                >
                                    View Details
                                </button>
                                <button
                                    className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                                    onClick={() => alert(`Booking service: ${service.title}`)}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Services;
