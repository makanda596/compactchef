import React, { useState, useEffect } from "react";

const Services = () => {
    const [showModal, setShowModal] = useState(false); // Modal toggle

    useEffect(() => {
        // Show the modal when the page loads
        setShowModal(true);
    }, []);

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    Our Services
                </h1>
                {/* Your content here */}
            </main>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            If you have found a service which our team can offer, please click on the 'Book Now' button to submit a quick form to us.
                        </h2>
                        <div className="flex justify-center">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-md"
                                onClick={handleModalClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
import React, { useState, useEffect } from "react";

const Services = () => {
    const [showModal, setShowModal] = useState(false); // Modal toggle

    useEffect(() => {
        // Show the modal when the page loads
        setShowModal(true);
    }, []);

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-semibold mb-4 text-gray-900">
                    Our Services
                </h1>
                {/* Your content here */}
            </main>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            If you have found a service which our team can offer, please click on the 'Book Now' button to submit a quick form to us.
                        </h2>
                        <div className="flex justify-center">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-md"
                                onClick={handleModalClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
