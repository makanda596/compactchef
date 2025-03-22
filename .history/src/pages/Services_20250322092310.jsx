import React, { useState, useEffect } from "react";

const services = [
    { id: 1, category: "Weddings", title: "Wedding Catering", description: "Tailored catering for your special day.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg" },
    { id: 2, category: "Corporate Events", title: "Corporate Events", description: "Professional catering for office parties.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg" },
    { id: 3, category: "Baby Showers", title: "Baby Shower Catering", description: "Delicious food for your baby shower.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },
    { id: 4, category: "Garden Events", title: "Garden Party Catering", description: "Outdoor catering with fresh meals.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg" },
    { id: 5, category: "Birthdays", title: "Birthday Party Catering", description: "Customized catering for all ages.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg" }
];

const categories = ["All", "Weddings", "Corporate Events", "Baby Showers", "Garden Events", "Birthdays"];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const filteredServices = selectedCategory === "All" ? services : services.filter(service => service.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map(service => (
                    <div key={service.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
                        <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-xl font-bold mt-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
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
