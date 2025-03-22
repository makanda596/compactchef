import React, { useState, useEffect } from "react";

const services = [
    { id: 1, category: "Weddings Event", description: "Make your wedding unforgettable with our exquisite catering, customized to match your theme and preferences. From elegant appetizers to mouthwatering desserts, we create a dining experience that wows your guests.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },

    { id: 2, category: "Corporate Events", description: "Elevate your corporate gatherings with our professional catering services, offering a menu perfect for networking and celebrations. Impress your team and clients with delicious, high-quality meals tailored to your event.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg" },

    { id: 3, category: "Baby Showers", description: "Celebrate your little one’s arrival with delightful, baby-themed catering that adds sweetness to your special day. We offer delicious treats and elegant setups to make your baby shower unforgettable.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },

    { id: 4, category: "Event Decoration", description: "Transform any venue into a breathtaking space with our expert decoration services. From elegant floral arrangements to themed setups, we bring your vision to life with style and creativity.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg" },

    { id: 5, category: "Birthday Event", description: "Make birthdays extra special with our delicious, customized catering designed to delight guests of all ages. From stunning cakes to tasty meals, we create an unforgettable experience.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg" },

    { id: 6, category: "Catering Services", description: "Savor every moment with our top-tier catering, featuring a variety of flavorful dishes made with the freshest ingredients. No matter the occasion, we ensure an exceptional dining experience.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp" },

    { id: 7, category: "Tent Services", description: "Host your event in style with our high-quality tents, providing comfort and elegance for any occasion. Whether it's a wedding or corporate event, we’ve got you covered—literally!", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620073/IMG-20250106-WA0047_c45nav.jpg" },

    { id: 8, category: "Photograph Services", description: "Capture the magic of your special moments with our professional photography services. From candid shots to breathtaking portraits, we ensure memories that last a lifetime.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618072/wed13_uhewal.jpg" },

    { id: 9, category: "MC Services", description: "Turn your event into an unforgettable experience with our energetic and engaging MCs. We bring excitement, laughter, and seamless flow to every moment of your celebration.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620833/IMG-20250106-WA0053_u52boc.jpg" }
];


const categories = ["All","Weddings Event","Corporate Events","Event Decoration","Birthday Event", "Catering Services","Weddings", "MC Services", "Photograph Service",'Tent Services',  "Baby Showers", "Garden Events", ];

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
                        <h3 className="text-xl font-bold mt-2">{service.category}</h3>
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
