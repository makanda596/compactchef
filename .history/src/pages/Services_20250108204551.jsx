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
        title: "Baby Shower Catering",
        description: "Delicious food options to make your baby shower memorable, from snacks to desserts.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        category: "Garden Events",
        title: "Garden Party Catering",
        description: "Outdoor catering for garden events, offering fresh and vibrant meals perfect for the setting.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Party Catering",
        description: "Customized birthday catering for all ages, including cakes, appetizers, and more.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Event Catering",
        description: "Exclusive catering for private events, tailored to meet your specific needs.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        category: "Event Planning",
        title: "Event Planning Services",
        description: "Comprehensive event planning services to ensure your event runs smoothly from start to finish.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        category: "Catering Services",
        title: "Catering Services",
        description: "Full-service catering for any event, offering menu planning, preparation, and service.",
        image: "https://via.placeholder.com/150",
    },
    // Add more services as needed
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
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-auto bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0 overflow-y-auto z-10`}
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

                            {/* Service Description */}
                            <p className="text-sm text-gray-600">{service.description}</p>

                            {/* Three-Dot Button */}
                            <div className="absolute bottom-2 right-2">
                                <button
                                    className="text-gray-600 hover:text-gray-900"
                                    onClick={() => handleMenuToggle(service.id)}
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
                                            d="M12 6h.01M12 12h.01M12 18h.01"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {menuOpen === service.id && (
                                    <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg p-2 text-gray-800 z-10">
                                        <button
                                            className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                                            onClick={() => alert(`Viewing menu for ${service.title}`)}
                                        >
                                            View Menu
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                                            onClick={() => alert(`Downloading menu for ${service.title}`)}
                                        >
                                            Download Menu
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-gold-dark transition duration-300">
                    MAKE AN INQUIRY NOW
                </button>

            </main>
        </div>
    );
};

export default Services;
