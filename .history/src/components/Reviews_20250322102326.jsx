import React, { useState } from 'react';
import Swal from 'sweetalert2';

const initialReviews = [
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
        name: "Entain Organization",
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
        review: "Compact Chef Events and Caterers’ catering service for our company retreat was top-notch! Everything from the food to the service was perfect."
    },
    {
        name: "Joyce Mukeira",
        date: "2023-05-30",
        rating: "★★★★",
        review: "The team at Compact Chef Events and Caterers catered our charity event and exceeded all expectations. The food was divine and the service was impeccable. We truly appreciate their professionalism and would not hesitate to hire them for future events."
    }
];

const Review = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("★★★★★");
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("rating", rating);
        formData.append("review", review);
        formData.append("access_key", "defcf369-5189-444d-9025-fbb065e13b48");

        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        setName("");
        setRating("★★★★★");
        setReview("");

        Swal.fire({
            title: "Thank you!",
            text: "Your review has been submitted successfully.",
            icon: "success",
            confirmButtonColor: "#8b8000"
        });
    };

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#8b8000] mb-4">What Our Clients Say</h2>

                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {initialReviews.map((review, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex-shrink-0 w-80">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-[#8b8000]">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#8b8000]">{review.name}</h3>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                                <p className="text-yellow-500 text-lg">{review.rating}</p>
                            </div>
                            <p className="mt-2 text-gray-700">{review.review}</p>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg shadow md:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
                    <input type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}  className="w-full p-2 mb-2 border rounded" />
                    <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-2 mb-2 border rounded">
                        <option>★★★★★</option>
                        <option>★★★★</option>
                        <option>★★★</option>
                        <option>★★</option>
                        <option>★</option>
                    </select>
                    <textarea name="review" placeholder="Your Review" value={review} onChange={(e) => setReview(e.target.value)} required className="w-full p-2 mb-2 border rounded"></textarea>
                    <button type="submit" className="bg-[#8b8000] text-white px-2 py-1 rounded hover:bg-yellow-700 transition text-md">Submit Review</button>
                </form>

            </div>
        </div>
    );
};

export default Review;
