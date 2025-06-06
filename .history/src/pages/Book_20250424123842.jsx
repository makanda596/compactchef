import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Inquiry() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        venue: "",
        people: "",
        date: "",
        time: "",
        company: "",
        referral: "",
        message: "",
    });

    const services = [
        "Catering Services",
        "Corporate Events",
        "Photograph Services",
        "Mc Services",
        "Tent Services",
        "Weddng Events",
        "Event Decoration",
        "Garden Events",
        "Private Events",
        "Menu Customization",
        "Food Delivery",
        "Baby Showers",
        "Other",
    ];

    const referralOptions = [
        "Social Media",
        "Website",
        "Friend/Family",
        "Advertisement",
        "Other",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    setLoading(false);
                    setFormData({
                        name: "", email: "", phone: "", service: "", venue: "", people: "", date: "",
                        time: "", company: "", referral: "", message: "",
                    });
                    Swal.fire({
                        title: "Success!",
                        text: "Your inquiry has been submitted successfully.",
                        icon: "success",
                        confirmButtonColor: "#8b8000",
                    });
                } else {
                    console.error("Error:", data.message);
                    setLoading(false);
                }
            } else {
                console.error("Network response was not ok.");
                setLoading(false);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen  py-10 ">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-4">
                    Inquiry Form
                </h1>
                <p className="text-center font-semibold text-gray-600 mb-8">
                    Let us know how we can assist you. Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
                                Service Type
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                required
                            >
                                <option value="" disabled>
                                    Select a service
                                </option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor=" word pax" className="block text-gray-700 font-bold mb-2">
                                minimum word pax
                            </label>
                            <input
                                type="number"
                                id="minimum word pax"
                                name="minimum word pax"
                                value={formData.min}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter the minimum word pax"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor=" word pax" className="block text-gray-700 font-bold mb-2">
                                Maximum word pax
                            </label>
                            <input
                                type="number"
                                id=" maximum word pax"
                                name=" maximum word pax"
                                value={formData.max}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter the maximum word pax"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="venue" className="block text-gray-700 font-bold mb-2">
                                Venue (Optional)
                            </label>
                            <input
                                type="text"
                                id="venue"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter venue (if known)"
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                                Time Range
                            </label>
                            <input
                                type="text"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="e.g., 2 PM - 6 PM"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                                Company/Organization (Optional)
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                placeholder="Enter company/organization name"
                            />
                        </div>
                        <div>
                            <label htmlFor="referral" className="block text-gray-700 font-bold mb-2">
                                How Did You Hear About Us?
                            </label>
                            <select
                                id="referral"
                                name="referral"

                                value={formData.referral}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                                required
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                {referralOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Any additional  information
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b8000]"
                            placeholder="Any additional  information"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-1/2 md:w-full bg-[#8b8000] text-white py-2 rounded-lg text-lg font-bold hover:bg-[#a08d00] transition duration-300"
                        >
                            {loading ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </div>
                </form>
            </div>

            
        </div>
    );
}

export default Inquiry;
