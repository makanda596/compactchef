import React from 'react';

const reviews = [
    {
        name: "Lucy Yaffa",
        date: "2023-12-11",
        rating: "★★★★★",
        review: "Chapa made my birthday party such a memorable event. The food was so delicious and the service...",
    },
    {
        name: "Michelle Buse",
        date: "2023-10-15",
        rating: "★★★★★",
        review: "I have used Chapa multiple times now for corporate catering for our global firm’s client events. Florencia is so easy to deal with and promptly communicates to all o...",
    },
    {
        name: "Entain Events",
        date: "2023-09-27",
        rating: "★★★★★",
        review: "We recently hosted a private function and after extensive research, landed on Chapa as our chosen caterer for the event. From the initial contact with Flor all the way...",
    }
];

const Review = () => {
    return (
        <div className="bg-gradient-to-r from-[#fffaf0] to-[#f5f5dc] py-12">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#8b8000] mb-8">What Our Clients Say</h2>
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
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
                        <p className="mt-4 text-gray-700">{review.review} <a href="#" className="text-blue-500 hover:underline">Read more</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
