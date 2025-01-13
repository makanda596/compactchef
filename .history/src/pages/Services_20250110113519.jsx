import React, { useState } from "react";

const services = [
    // ... (same as before)
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
    const [showPopup, setShowPopup] = useState(false); // Popup state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        eventDetails: "",
    });

    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nEvent Details: ${formData.eventDetails}`);
        setShowPopup(false); // Close popup after submission
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0  bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
                    } transition-transform duration-300 md:relative  md:translate-x-0 overflow-y-auto z-10`}
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

                <div className="space-y-4 max-h-full">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setIsSidebarOpen(false);
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
                                {/* Three dots button */}
                                <button
                                    className="text-white bg-black hover:bg-gray-700 p-2 rounded-full"
                                    onClick={() => handleMenuToggle(service.id)}
                                >
                                    &#x2022;&#x2022;&#x2022;
                                </button>

                                {menuOpen === service.id && (
                                    <div className="absolute bg-white shadow-md rounded-lg mt-2 right-0 w-40">
                                        <button
                                            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            onClick={() => setShowPopup(true)}
                                        >
                                            Book Now
                                        </button>
                                        <button
                                            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Download Menu
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {showPopup && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-xl font-semibold mb-4">Book Your Service</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Event Details</label>
                                    <textarea
                                        name="eventDetails"
                                        value={formData.eventDetails}
                                        onChange={handleInputChange}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setShowPopup(false)}
                                        className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gold text-white rounded-lg shadow-md hover:bg-gold-dark"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Services;
