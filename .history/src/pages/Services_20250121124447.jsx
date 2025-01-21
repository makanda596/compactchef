import React, { useState, useEffect } from "react";
import Web3 from 'web3'; // Import Web3

const services = [
    // Your services data remains unchanged...
];

const categories = [
    // Your categories data remains unchanged...
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const [web3, setWeb3] = useState(null); // Web3 state
    const [account, setAccount] = useState(null); // User's Ethereum account

    // Trigger the popup after 2 seconds when the component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        // Initialize Web3 when the component mounts
        const initWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const accounts = await web3Instance.eth.requestAccounts();
                setAccount(accounts[0]);
            }
        };

        initWeb3();

        // Clear the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    const handleMenuToggle = (id) => {
        setMenuOpen((prev) => (prev === id ? null : id));
    };

    const handleBookNowClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    const handlePopupClose = () => {
        setShowPopup(false); // Close the popup
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!web3 || !account) {
            alert('Please connect your wallet!');
            return;
        }

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phoneNumber = formData.get('phoneNumber');
        const email = formData.get('email');
        const service = selectedService.title;
        const eventDate = formData.get('eventDate');

        try {
            // Your smart contract address and ABI
            const contractAddress = '0xYourSmartContractAddress';
            const contractABI = [ /* ABI here */];

            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // Example function call to store the form data on the blockchain
            await contract.methods
                .bookService(name, phoneNumber, email, service, eventDate)
                .send({ from: account });

            alert('Booking successful! Data sent to the blockchain.');
            handleModalClose(); // Close the modal
        } catch (error) {
            console.error('Error sending data to the blockchain:', error);
            alert('Error submitting the form!');
        }
    };

    // Filter services based on selected category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((service) => service.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50 pt-20 pb-10">
            {/* Sidebar and other components remain unchanged... */}

            <main className="flex-1 p-2 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-0 md:mt-6">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="relative p-4 bg-white rounded-lg shadow hover:shadow-xl">
                            {/* Service image and details remain unchanged... */}

                            <div className="absolute bottom-2 right-2">
                                <button
                                    className="text-white bg-black hover:bg-gray-700 p-2 rounded-full"
                                    onClick={() => handleMenuToggle(service.id)}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6h.01M12 12h.01M12 18h.01"
                                        />
                                    </svg>
                                </button>

                                {menuOpen === service.id && (
                                    <div className="absolute bottom-12 right-0 shadow-lg rounded-lg px-4 text-gray-800 z-10">
                                        <button
                                            className="block bg-blue-600 px-1 py-1 text-left text-white hover:bg-green-600 w-full border-b-2"
                                            onClick={() => handleBookNowClick(service)}
                                        >
                                            Book Now
                                        </button>
                                        <button className="block px-4 py-1 bg-gold text-left hover:bg-gray-100 w-full">
                                            <a href="/contact">Contact</a>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal for booking */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Book {selectedService.title}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Service</label>
                                <input
                                    type="text"
                                    name="selectedService"
                                    value={selectedService.title}
                                    disabled
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                                <input type="date" name="eventDate" className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-gold text-white px-4 py-2 rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
