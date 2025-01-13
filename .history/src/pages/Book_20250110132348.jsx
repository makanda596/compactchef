import React, { useState } from "react";

const Book = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        eventLocation: "",
        eventType: [],
        venue: "",
        numberOfGuests: "",
        organization: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            eventType: checked
                ? [...prevData.eventType, value]
                : prevData.eventType.filter((type) => type !== value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Your quote request has been submitted!");
    };

    return (
        <div className="relative bg-gray-50 min-h-screen">
            {/* Top Left Image */}
            <img
                src="https://via.placeholder.com/100"
                alt="Top decoration"
                className="absolute top-0 left-0 transform -translate-x-10 -translate-y-10 w-32"
            />

            {/* Bottom Left Image */}
            <img
                src="https://via.placeholder.com/100"
                alt="Bottom decoration"
                className="absolute bottom-0 left-0 transform -translate-x-10 translate-y-10 w-32"
            />

            {/* Form Container */}
            <div className="relative bg-white py-20 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl font-bold text-green-700 mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                First name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Last name*
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Phone number*
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* Event Location */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Event location*
                        </label>
                        <select
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                            required
                        >
                            <option value="">Please Select</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Event Type */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Event/Service Type*
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="eventType"
                                    value="Private Event"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Private Event
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="eventType"
                                    value="Corporate Event"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Corporate Event
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="eventType"
                                    value="Recurring Meal Service"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Recurring Meal Service
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="eventType"
                                    value="Wedding"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Wedding
                            </label>
                        </div>
                    </div>

                    {/* Venue */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Venue*
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <label>
                                <input
                                    type="radio"
                                    name="venue"
                                    value="Lot 8"
                                    onChange={handleInputChange}
                                    required
                                />{" "}
                                Lot 8
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="venue"
                                    value="No Venue Yet"
                                    onChange={handleInputChange}
                                />{" "}
                                No Venue Yet
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="venue"
                                    value="The Hidden Chateau"
                                    onChange={handleInputChange}
                                />{" "}
                                The Hidden Chateau
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="venue"
                                    value="The Secret Garden"
                                    onChange={handleInputChange}
                                />{" "}
                                The Secret Garden
                            </label>
                        </div>
                    </div>

                    {/* Number of Guests */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            name="numberOfGuests"
                            value={formData.numberOfGuests}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Organization */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Organization
                        </label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Book;
