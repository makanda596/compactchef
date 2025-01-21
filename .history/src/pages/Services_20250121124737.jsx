import React, { useState, useEffect } from "react";

const services = [
    {
        id: 1,
        category: "Weddings",
        title: "Wedding Catering",
        description: "Tailored catering for your special day, from appetizers to entrees, ensuring an unforgettable wedding experience.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg"
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
    },
    {
        id: 5,
        category: "Birthdays",
        title: "Birthday Party Catering",
        description: "Customized birthday catering for all ages, including cakes, appetizers, and more.",
        image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg"
    }
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
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleBookNowClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar, popup, and main content code... */}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Service</label>
                                <input
                                    type="text"
                                    name="selectedService"
                                    value={selectedService.title}
                                    disabled
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                                <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
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
