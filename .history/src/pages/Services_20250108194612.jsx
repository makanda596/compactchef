import React, { useState } from "react";

const services = [
    {
        id: 1,
        title: "Wedding Catering",
        description: "We specialize in creating exquisite menus tailored for your special day. From elegant appetizers to grand entrees, we make weddings unforgettable.",
    },
    {
        id: 2,
        title: "Corporate Events",
        description: "Delivering professional catering solutions for corporate meetings, conferences, and office parties with a touch of sophistication.",
    },
    {
        id: 3,
        title: "Outdoor Catering",
        description: "Enjoy delicious meals at your outdoor events with our full-service catering designed for picnics, festivals, and celebrations.",
    },
    {
        id: 4,
        title: "Private Chef Services",
        description: "Hire a private chef for intimate gatherings or special dinners at your home, tailored to your taste and preferences.",
    },
    {
        id: 5,
        title: "Event Planning",
        description: "From conceptualization to execution, our event planning team ensures your events are seamless and memorable.",
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(services[0]); // Default to the first service
    const [isOpen, setIsOpen] = useState(false); // Toggle sidebar for small screens

    return (
        <div className="flex flex-col md:flex-row h-screen py-100">
            {/* Toggle Button for Small Screens */}
            <div className="lg:hidden p-4 bg-gray-800">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0 w-full md:w-64`}
            >
                <h2 className="text-2xl font-bold mb-6 text-gold">Our Services</h2>
                <ul className="space-y-4">
                    {services.map((service) => (
                        <li
                            key={service.id}
                            className={`cursor-pointer py-2 px-4 rounded-lg ${selectedService.id === service.id ? "bg-gold text-gray-800" : "hover:bg-gray-700"
                                }`}
                            onClick={() => {
                                setSelectedService(service);
                                setIsOpen(false); // Close the sidebar after selection on small screens
                            }}
                        >
                            {service.title}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Content Section */}
            <main className="flex-1 p-8 bg-gray-100">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">{selectedService.title}</h1>
                <p className="text-lg text-gray-700">{selectedService.description}</p>
            </main>
        </div>
    );
};

export default Services;
