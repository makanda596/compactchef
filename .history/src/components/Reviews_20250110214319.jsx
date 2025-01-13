import React from 'react';

const reviews = [
    {
        name: "Lucy Makhoha",
        date: "2025-01-05",
        rating: "★★★★★",
        review: "Compact Chef Events and Caterers made my birthday party such a memorable event. The food was so delicious and the service was outstanding."
    },
    {
        name: "Barasa Ouma",
        date: "2024-12-11",
        rating: "★★★★",
        review: "I have used Compact Chef Events and Caterers multiple times now for corporate catering for our global firm’s client events. "
    },
    {
        name: "Entain Events",
        date: "2024-12-27",
        rating: "★★★★",
        review: "We recently hosted a private function and after extensive research, landed on Compact Chef Events and Caterers as our chosen caterer for the event."
    },
    {
        name: "Sarah Wanjiku",
        date: "2024-08-21",
        rating: "★★★★★",
        review: "Fantastic experience with Compact Chef Events and Caterers! They provided an excellent selection of dishes for our wedding. "
    },
    {
        name: "John Collins",
        date: "2024-07-14",
        rating: "★★★",
        review: "Compact Chef Events and Caterers’ catering service for our company retreat was top-notch! Everything from the food to the service was perfect. Florencia was a pleasure to work with, and she helped customize the menu to fit our needs.",
    },
    {
        name: "Joyce Mukeira",
        date: "2023-05-30",
        rating: "★★★★",
        review: "The team at Compact Chef Events and Caterers catered our charity event and exceeded all expectations. The food was divine and the service was impeccable. We truly appreciate their professionalism and would not hesitate to hire them for future events.",
    }
];

const Review = () => {
    return (
        <div className="py-12">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#8b8000] mb-8">What Our Clients Say</h2>

                <div className="flex space-x-6 overflow-x-auto pb-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex-shrink-0 w-80"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-[#8b8000]">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#8b8000]">{review.name}</h3>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <p className="text-yellow-500 text-lg">{review.rating}</p>
                            </div>
                            <p className="mt-4 text-gray-700">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
