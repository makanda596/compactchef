import React, { useState } from "react";

const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings, conferences, and office parties, adding a touch of sophistication.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg",
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Event Catering",
        description: "Exclusive catering for private events, tailored to meet your specific needs.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg",
    },
    {
        id: 8,
        category: "Catering Services",
        title: "Catering Services",
        description: "Full-service catering for any event, offering menu planning, preparation, and service.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497241/EC_menus1_jeid2z.jpg",
    },
    {
        id: 3,
        category: "Baby Showers",
        title: "Baby Shower Catering",
        description: "Delicious food options to make your baby shower memorable, from snacks to desserts.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg",
    },
    {
        id: 7,
        category: "Event Planning",
        title: "Event Planning Services",
        description: "Comprehensive event planning services to ensure your event runs smoothly from start to finish.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497245/clie_sk4hei.jpg",
    },
    {
        id: 4,
        category: "Garden Events",
        title: "Garden Party Catering",
        description: "Outdoor catering for garden events, offering fresh and vibrant meals perfect for the setting.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Party Catering",
        description: "Customized birthday catering for all ages, including cakes, appetizers, and more.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg",
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
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const filteredServices = selectedCategory === "All"
        ? services
        : services.filter((service) => service.category === selectedCategory);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted for ${selectedService.title}`);
        setIsFormOpen(false);
    };

    const openForm = (service) => {
        setSelectedService(service);
        setIsFormOpen(true);
    };

    return (
        <div className="relative">
            {/* Category Filter */}
            <div className="flex justify-center my-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 border rounded-lg ${selectedCategory === category
                            ? "bg-gold text-white"
                            : "bg-white text-black"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Services List */}
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
                        <button
                            className="mt-4 px-4 py-2 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark"
                            onClick={() => openForm(service)}
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>

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
