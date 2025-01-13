import React, { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        eventType: "",
        serviceType: "full-service",
        eventDate: "",
        chosenVenue: "",
        eventDetails: "",
        isRobot: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormState({
            ...formState,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
    };

    return (
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Contact Us
                </h2>
                {[
                    { label: "Name*", name: "name", type: "text", required: true },
                    { label: "Company (if applicable)", name: "company", type: "text" },
                    { label: "Email*", name: "email", type: "email", required: true },
                    { label: "Phone", name: "phone", type: "tel" },
                    { label: "Event Type*", name: "eventType", type: "text", required: true },
                ].map(({ label, name, type, required }) => (
                    <div className="mb-4" key={name}>
                        <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor={name}>
                            {label}
                        </label>
                        <input
                            type={type}
                            name={name}
                            id={name}
                            value={formState[name]}
                            onChange={handleChange}
                            required={required}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor="serviceType">
                        Service Type*
                    </label>
                    <select
                        name="serviceType"
                        id="serviceType"
                        value={formState.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="full-service">Full Service</option>
                        <option value="delivery">Delivery</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor="eventDate">
                        Event Date
                    </label>
                    <input
                        type="date"
                        name="eventDate"
                        id="eventDate"
                        value={formState.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor="chosenVenue">
                        Have you chosen a venue? If yes, which one?
                    </label>
                    <input
                        type="text"
                        name="chosenVenue"
                        id="chosenVenue"
                        value={formState.chosenVenue}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor="eventDetails">
                        Tell us a little bit about your event*
                    </label>
                    <textarea
                        name="eventDetails"
                        id="eventDetails"
                        rows="4"
                        value={formState.eventDetails}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="isRobot"
                        id="isRobot"
                        checked={formState.isRobot}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isRobot" className="ml-2 text-gray-700">
                        I'm not a robot
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
