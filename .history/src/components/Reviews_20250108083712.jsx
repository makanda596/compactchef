import React from "react";

const Reviews = () => {
    const reviews = [
        {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            content: "The food was amazing, and the service was excellent! Highly recommended.",
            rating: 5,
        },
        {
            name: "John Smith",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            content: "Very professional and accommodating. They made our wedding unforgettable.",
            rating: 4,
        },
        {
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            content: "Fantastic experience! The team really listened to our needs and delivered.",
            rating: 5,
        },
    ];

    return (
        <section className="p-8 bg-gradient-to-r from-[#fdfcf0] to-[#f8f8f8]">
            <h2 className="text-4xl font-extrabold text-[#8b8000] text-center mb-6 tracking-wide">
                What Our Clients Say
            </h2>
            <p className="text-center mb-8 text-gray-700 text-lg max-w-xl mx-auto">
                Your feedback inspires us to create exceptional experiences. Here's what our happy clients have to say!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                    >
                        {/* Client Avatar */}
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-[#8b8000]"
                        />

                        {/* Client Name */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{review.name}</h3>

                        {/* Review Content */}
                        <p className="text-sm text-gray-600 italic mb-4">"{review.content}"</p>

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-500 text-xl">&#9733;</span> // Filled star
                            ))}
                            {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                <span key={i} className="text-gray-300 text-xl">&#9733;</span> // Empty star
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
