import React, { useState } from "react";

const PopupForm = ({ title, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Booking for {title}</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Form submitted for ${title}`);
                    onClose();
                }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Additional details"
                        rows="4"
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
);

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [popupData, setPopupData] = useState({ isVisible: false, title: "" });

    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleBookNow = (title) => {
        setPopupData({ isVisible: true, title });
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar */}
            {/* ... Sidebar Code Remains the Same ... */}

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    {selectedCategory} Services
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative p-4 bg-white rounded-lg shadow hover:shadow-lg"
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
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                    onClick={() => handleBookNow(service.title)}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Popup Form */}
            {popupData.isVisible && (
                <PopupForm
                    title={popupData.title}
                    onClose={() => setPopupData({ isVisible: false, title: "" })}
                />
            )}
        </div>
    );
};

export default Services;
