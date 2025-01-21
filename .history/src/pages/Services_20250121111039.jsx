import React, { useState } from "react";

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const services = [/* Your services array here */];

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

    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleBookNowClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
        setFormSubmitted(false); // Reset submission status
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true); // Mark form as submitted
        setShowModal(false); // Close modal after submission

        // Optional: Simulate a delay for better user experience
        setTimeout(() => {
            setFormSubmitted(false);
        }, 5000);
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar and main content logic */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    {selectedCategory} Services
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative p-4 bg-white rounded-lg shadow hover:shadow-4xl"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <h3 className="text-lg font-bold mt-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                            <button
                                className="text-white bg-black hover:bg-gray-700 p-2 rounded-full"
                                onClick={() => handleMenuToggle(service.id)}
                            >
                                Options
                            </button>
                            {menuOpen === service.id && (
                                <div className="absolute bottom-12 right-0 shadow-lg rounded-lg px-4 text-gray-800 z-10">
                                    <button
                                        className="block bg-blue-600 px-1 py-1 text-white hover:bg-green-600 w-full border-b-2"
                                        onClick={() => handleBookNowClick(service)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {formSubmitted && (
                    <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-lg shadow">
                        Thank you! Your booking request has been submitted successfully.
                    </div>
                )}
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-gold text-white px-4 py-2 rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
