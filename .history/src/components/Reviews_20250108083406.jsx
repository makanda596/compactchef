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
        <section className="p-8 bg-[#f8f8f8]">
            <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Client Reviews</h2>
            <p className="text-center mb-6 text-gray-700">
                See what our clients are saying about their experiences with us. Your feedback inspires us to create exceptional events and memorable moments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                    >
                        {/* Client Avatar */}
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-20 h-20 object-cover rounded-full mb-4"
                        />

                        {/* Client Name */}
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{review.name}</h3>

                        {/* Review Content */}
                        <p className="text-sm text-gray-600 mb-4">{review.content}</p>

                        {/* Rating */}
                        <div className="flex items-center justify-center">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
                            ))}
                            {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                <span key={i} className="text-gray-300 text-lg">&#9733;</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
