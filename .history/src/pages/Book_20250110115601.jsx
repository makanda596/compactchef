import React, { useState } from "react";

const Book = () => {
    const [showPopup, setShowPopup] = useState(false); // Popup state for inquiry form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        inquiryDetails: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Inquiry submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Details: ${formData.inquiryDetails}`);
        setShowPopup(false); // Close popup after submission
    };

    return (
        <div className="mt-12">
            {/* Inquire Now Button */}
            <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
                Inquire Now
            </button>

            {/* Popup for Inquiry Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Inquire About Our Services</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Inquiry Details</label>
                                <textarea
                                    name="inquiryDetails"
                                    value={formData.inquiryDetails}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowPopup(false)}
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Book;
