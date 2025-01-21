import React, { useState, useEffect, useRef } from "react";

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
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    // Trigger the popup after 2 seconds when the component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        // Clear the timer if the component is unmounted
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
        setShowPopup(false); // Close the popup
    };

    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null); // Create a reference to the form

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "1a963b75-8bc9-43a3-b79f-457662aa4798"); // Replace with your actual access key

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            setLoading(true); // Set loading state to true
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            if (result.success) {
                setLoading(false);
                setSubmitted(true); // Set submitted state to true on success

                // Reset the form fields
                if (formRef.current) {
                    formRef.current.reset(); // This will reset the input fields
                }
            } else {
                setLoading(false);
                alert("There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
            alert("Failed to fetch. Please check your internet connection.");
        }
    };

    // Add the script for ElfSight after the component is mounted
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup the script
        };
    }, []);
    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            <aside
                className={`fixed top-0 left-0 bg-gray-800 text-white w-64 p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0 overflow-y-auto z-10`}
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
                                setIsSidebarOpen(false); // Close sidebar
                            }}
                            className={`block w-full text-left py-2 px-4 rounded-lg ${selectedCategory === category ? "bg-gold text-gray-800" : "hover:bg-gray-700"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </aside>
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
            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Quick Book Form</h2>
                        <p className="text-sm mb-4">
                            Feel free to explore our services, and when you find the one that best suits your needs, simply click the 'Book Now' button to submit a quick booking form.
                            Our team will be happy to assist you!  </p>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-md"
                                onClick={handlePopupClose}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-1 p-2 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-0 md:mt-6">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="relative p-4 bg-white rounded-lg shadow hover:shadow-xl">
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

                                {menuOpen === service.id && (
                                    <div className="absolute bottom-12 right-0 shadow-lg rounded-lg px-4 text-gray-800 z-10">
                                        <button
                                            className="block bg-blue-600 px-1 py-1 text-left text-white hover:bg-green-600 w-full border-b-2"
                                            onClick={() => handleBookNowClick(service)}
                                        >
                                            Book Now
                                        </button>
                                        <button className="block px-4 py-1 bg-gold text-left hover:bg-gray-100 w-full">
                                            <a href="/contact">Contact</a>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-gold-dark transition duration-300">
                    <a href="/book" target="_blank">
                        MAKE AN INQUIRY NOW
                    </a>
                </button>
            </main>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form ef={formRef} onSubmit={onSubmit}>
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
                                    name={selectedService.title}
                                    value={selectedService.title}
                                    disabled
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                                <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded-md" />
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
                                    {loading ? "Submitting..." : "Submit "}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {submitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Inquiry Submitted!</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for your inquiry. We’ll get back to you soon.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="bg-[#8b8000] text-white py-2 px-6 rounded-lg hover:bg-[#a08d00]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
