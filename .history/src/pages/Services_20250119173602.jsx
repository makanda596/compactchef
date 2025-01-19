import React, { useState } from "react";

const services = [
    // ... existing services data
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State for popup form visibility
    const [selectedService, setSelectedService] = useState(null); // Track selected service for booking

    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleBookNow = (service) => {
        setSelectedService(service);
        setShowPopup(true); // Show popup when 'Book Now' is clicked
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Close popup
        setSelectedService(null); // Reset selected service
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0  bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
                    } transition-transform duration-300 md:relative  md:translate-x-0 overflow-y-auto z-10`}
            >
                {/* ... Sidebar content */}
            </aside>

            {/* Sidebar Toggle Button */}
            <div className="lg:hidden p-4 bg-gray-800">
                <button className="text-white" onClick={() => setIsSidebarOpen(true)}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
                        <div key={service.id} className="relative p-4 bg-white rounded-lg shadow hover:shadow-lg">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <h3 className="text-lg font-bold mt-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>

                            <div className="absolute bottom-2 right-2">
                                <button
                                    className="text-white bg-black hover:bg-gray-700 p-2 rounded-full"
                                    onClick={() => handleMenuToggle(service.id)}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                                    </svg>
                                </button>

                                {menuOpen === service.id && (
                                    <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg p-2 text-gray-800 z-10">
                                        <button
                                            className="block px-2 py-2 text-left hover:bg-green-600 w-full border-b-2"
                                            onClick={() => handleBookNow(service)} // Trigger popup on 'Book Now'
                                        >
                                            Book Now
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
                    <a href='/book' target="_blank">MAKE AN INQUIRY NOW</a>
                </button>
            </main>

            {/* Popup Form Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService?.title}</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Your message or requirements"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gold text-white py-2 rounded-md hover:bg-gold-dark"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                        <button
                            onClick={handleClosePopup}
                            className="mt-4 w-full text-gray-600 bg-gray-200 py-2 rounded-md hover:bg-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
