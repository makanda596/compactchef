import React from 'react';

function Inquiry() {
    const services = [
        "Catering",
        "Event Planning",
        "Menu Customization",
        "Food Delivery",
        "Other",
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Inquiry Form
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Let us know how we can assist you. Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="space-y-6">
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
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Inquiry;
