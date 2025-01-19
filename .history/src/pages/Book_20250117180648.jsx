import React, { useState } from 'react';

function Inquiry() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const services = [
        "Catering",
        "Event Planning",
        "Menu Customization",
        "Food Delivery",
        "Other",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Inquiry Form
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Let us know how we can assist you. Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    {/* Phone Number Field */}
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    {/* Service Type Dropdown */}
                    <div>
                        <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
                            Service Type
                        </label>
                        <select
                            id="service"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            required
                        >
                            <option value="" disabled selected>
                                Select a service
                            </option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Venue (Optional) */}
                    <div>
                        <label htmlFor="venue" className="block text-gray-700 font-bold mb-2">
                            Venue (Optional)
                        </label>
                        <input
                            type="text"
                            id="venue"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter venue (if known)"
                        />
                    </div>
                    {/* Number of People */}
                    <div>
                        <label htmlFor="people" className="block text-gray-700 font-bold mb-2">
                            Number of People
                        </label>
                        <input
                            type="number"
                            id="people"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter the number of people"
                            required
                        />
                    </div>
                    {/* Date */}
                    <div>
                        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            required
                        />
                    </div>
                    {/* Time Range */}
                    <div>
                        <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                            Time Range
                        </label>
                        <input
                            type="text"
                            id="time"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="e.g., 2 PM - 6 PM"
                            required
                        />
                    </div>
                    {/* Company/Organization (Optional) */}
                    <div>
                        <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                            Company/Organization (Optional)
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter company/organization name"
                        />
                    </div>
                    {/* How Did You Hear About Us? */}
                    <div>
                        <label htmlFor="referral" className="block text-gray-700 font-bold mb-2">
                            How Did You Hear About Us?
                        </label>
                        <input
                            type="text"
                            id="referral"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="e.g., Social Media, Friend, Website"
                            required
                        />
                    </div>
                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#8b8000] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#a08d00] transition duration-300"
                        >
                            {loading ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Popup */}
            {submitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Inquiry Submitted!</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for your inquiry. We’ll get back to you soon.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="bg-[#8b8000] text-white py-2 px-6 rounded-lg hover:bg-[#a08d00] transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Inquiry;
