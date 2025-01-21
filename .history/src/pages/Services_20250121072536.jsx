import React, { useState } from "react";

const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg"
        , // Replace with actual image URL
    },
    {
        id: 2,
        category: "Corporate Events",
        title: "Corporate Events",
        description: "Professional catering for meetings, conferences, and office parties, adding a touch of sophistication.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg"
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Event Catering",
        description: "Exclusive catering for private events, tailored to meet your specific needs.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg"
    },
    {
        id: 8,
        category: "Catering Services",
        title: "Catering Services",
        description: "Full-service catering for any event, offering menu planning, preparation, and service.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497241/EC_menus1_jeid2z.jpg"
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
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg"
        ,
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Party Catering",
        description: "Customized birthday catering for all ages, including cakes, appetizers, and more.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg"
        ,
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
    const [showModal, setShowModal] = useState(false); // Modal toggle
    const [selectedService, setSelectedService] = useState(null); // Selected service for booking


    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id)); // Toggle dropdown
    };

    const handleBookNowClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedService(null);
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

                            {/* Three-Dot Button with Darker Background */}
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

                                {menuOpen === service.id && (
                                    <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg  text-gray-800 z-10">
                                        <button
                                            className="block bg-red-600 px-0 py-2 text-left hover:bg-green-600 w-full border-b-2 "
                                            onClick={() => handleBookNowClick(service)}
                                        >
                                            Book Now
                                        </button>

                                        <button
                                            className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                                        >
                                            <a href='/contact'>Contuct </a>
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-gold-dark transition duration-300">
                    <a href='/book' target="_blank" >  MAKE AN INQUIRY NOW</a>
                </button>

            </main>
            {/* Modal Form */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded-md"
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
