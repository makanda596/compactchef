import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-start">
                {/* Left Section: Address and Email */}
                <div className="w-1/3 space-y-4">
                    <p className="text-lg font-semibold">Address</p>
                    <p>1234 Some Street, City, Country</p>
                    <p className="text-lg font-semibold">Email</p>
                    <p>contact@compactchef.com</p>
                </div>

                {/* Right Section: Contact Form */}
                <div className="w-2/3">
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
