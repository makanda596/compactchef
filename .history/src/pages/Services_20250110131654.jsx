import React, { useState } from "react";

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted for ${selectedService.title}`);
        setIsFormOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const openForm = (service) => {
        setSelectedService(service);
        setIsFormOpen(true);
    };

    return (
        <div className="relative">
            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* List of Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {services.map((service) => (
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
                            <button
                                className="mt-4 px-4 py-2 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark"
                                onClick={() => openForm(service)}
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {/* Popup Form */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 mr-2 bg-gray-300 rounded-lg"
                                    onClick={() => setIsFormOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark"
                                >
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
