import React, { useState } from "react";

// Services data
const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings, conferences, and office parties, adding a touch of sophistication.",
        image: "https://via.placeholder.com/150",
    },
    // Add more services as needed
];

const categories = ["All", "Corporate Events", "Weddings"];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [menuOpen, setMenuOpen] = useState(null); // Track which menu is open (service ID)

    // Filter services based on the selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id)); // Toggle the dropdown for the clicked service
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
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

            {/* Main Content */}
            <main className="flex-1 p-8">
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
                                    <div className="absolute bottom-10 right-0 bg-white shadow-lg rounded-lg p-2 text-gray-800 z-10">
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
            </main>
        </div>
    );
};

export default Services;
