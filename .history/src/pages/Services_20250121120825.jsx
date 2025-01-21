import React, { useState, useEffect } from "react";

const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg"
        , // Replace with actual image URL
    },
    // other services...
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle
    const [showModal, setShowModal] = useState(false); // Modal toggle
    const [selectedService, setSelectedService] = useState(null); // Selected service for booking
    const [showPopup, setShowPopup] = useState(false); // Popup toggle for the "book now" message

    // Show popup on page load
    useEffect(() => {
        setShowPopup(true);
    }, []);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar and other content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    {selectedCategory} Services
                </h1>

                {/* Popup Message */}
                {showPopup && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg w-96 text-center">
                            <p className="text-lg mb-4">
                                If you have found a service which our team can offer, please click on the "Book Now" to submit a quick form to us.
                            </p>
                            <button
                                className="bg-gold text-white px-4 py-2 rounded-md"
                                onClick={handlePopupClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6h.01M12 12h.01M12 18h.01"
                                        />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-gold-dark transition duration-300">
                    <a href='/book' target="_blank" > MAKE AN INQUIRY NOW</a>
                </button>
            </main>

            {/* Modal for Booking */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        {/* form */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
