import React, { useState, useEffect } from "react";

const services = [
    { id: 1, category: "Weddings Event", description: "Make your special day unforgettable with our premium wedding catering. From elegant appetizers to exquisite main courses and desserts, we ensure a delightful culinary experience tailored to your theme and preferences.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },

    { id: 2, category: "Corporate Events", description: "Host a professional and seamless corporate gathering with our specialized catering. We offer a diverse menu, including light refreshments, executive lunches, and full-course meals, perfect for office parties, meetings, and conferences.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg" },

    { id: 3, category: "Baby Showers", description: "Celebrate the joy of a new arrival with a customized baby shower catering experience. Our menu features delightful treats, finger foods, and themed desserts to make the occasion even more special for you and your guests.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736265389/baby_gkvigb.jpg" },

    { id: 4, category: "Event Decoration", description: "Transform any event into a stunning experience with our expert decoration services. Whether it’s a wedding, birthday, or corporate function, we provide elegant decor, floral arrangements, and lighting to match your vision.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg" },

    { id: 5, category: "Birthday Event", description: "Make birthdays extra special with our customized catering services. From kids' parties to milestone celebrations, we provide a variety of delicious meals, cakes, and beverages to keep the party going.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg" },

    { id: 6, category: "Catering Services", description: "Enjoy exceptional catering services tailored to your needs. Whether it's a small gathering or a large-scale event, we provide a diverse menu, including traditional, continental, and custom-made dishes to suit your occasion.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp" },

    { id: 7, category: "Tent Services", description: "Create a comfortable outdoor event with our tent rental services. We offer high-quality tents in various sizes and styles, perfect for weddings, parties, and corporate functions, ensuring your guests enjoy the occasion in style.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620073/IMG-20250106-WA0047_c45nav.jpg" },

    { id: 8, category: "Photograph Services", description: "Capture timeless memories with our professional photography services. Whether it’s a wedding, corporate event, or birthday, our experienced photographers ensure high-quality images that preserve every special moment.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618072/wed13_uhewal.jpg" },

    { id: 9, category: "MC Services", description: "Keep your event lively and engaging with our skilled MCs. Whether it's a wedding, corporate function, or party, our professional hosts bring energy, humor, and seamless coordination to ensure an unforgettable experience.", image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620833/IMG-20250106-WA0053_u52boc.jpg" }
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
