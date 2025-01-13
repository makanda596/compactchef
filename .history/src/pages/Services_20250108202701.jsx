import React from "react";

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
    {
        id: 3,
        category: "Baby Showers",
        title: "Baby Showers",
        description: "Delightful catering and elegant setups to celebrate the arrival of your little one in style.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        category: "Garden Events",
        title: "Garden Parties",
        description: "Fresh, seasonal dishes and outdoor-friendly setups to elevate your garden parties.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Celebrations",
        description: "Custom menus and festive vibes to make your birthday a memorable one.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        category: "Private Bookings",
        title: "Private Chef Services",
        description: "Exclusive private chef services for intimate gatherings or special dinners at your home.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        category: "Event Planning",
        title: "Event Planning",
        description: "Comprehensive planning from start to finish to make your events seamless and unforgettable.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        category: "Catering Services",
        title: "General Catering Services",
        description: "Our expert team provides catering services for all types of events, offering delicious food tailored to your needs.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        category: "Catering Services",
        title: "Buffet Catering",
        description: "Enjoy a variety of buffet options with diverse cuisines for your events.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        category: "Catering Services",
        title: "Custom Menus",
        description: "Collaborate with our chefs to design menus tailored to your event and preferences.",
        image: "https://via.placeholder.com/150",
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
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
                        <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
