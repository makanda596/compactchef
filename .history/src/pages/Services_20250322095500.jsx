import React, { useState, useEffect } from "react";

const services = [
    { id: 1, category: "Weddings Event", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620557/IMG-20250301-WA0043_d7i3r2.jpg" },

    { id: 2, category: "Corporate Events", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg" },

    { id: 3, category: "Baby Showers", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },

    { id: 4, category: "Event Decoration", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618735/wed12_obq3yo.jpg" },

    { id: 5, category: "Birthday Event", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg" },

    { id: 6, category: "Catering Services", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp" },

    { id: 7, category: "Tent Services", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620073/IMG-20250106-WA0047_c45nav.jpg" },

    { id: 8, category: "Photograph Services", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618072/wed13_uhewal.jpg" },

    { id: 9, category: "MC Services", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620833/IMG-20250106-WA0053_u52boc.jpg" },
    { id: 10, category: "Garden Events", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg" }
];


const categories = ["All","Weddings Event","Corporate Events","Event Decoration","Birthday Event", "Catering Services", "MC Services", "Photograph Services",'Tent Services',  "Baby Showers", "Garden Events", ];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const filteredServices = selectedCategory === "All" ? services : services.filter(service => service.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 p-2 mt-10 lg:p-14 ">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-2 py-2 rounded-md text-sm font-semibold ${selectedCategory === category ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredServices.map(service => (
                    <div key={service.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
                        <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-t-lg" />
                        <h3 className="text-xl font-bold mt-2">{service.category}</h3>
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-md w-80">
                        <h2 className="text-lg font-bold mb-2">Quick Book Form</h2>
                        <p className="text-sm">Explore our services and click 'Book Now' to proceed.</p>
                        <button onClick={() => setShowPopup(false)} className="mt-4 bg-black text-white px-4 py-2 rounded-md">OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
