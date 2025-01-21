import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactPage = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "1a963b75-8bc9-43a3-b79f-457662aa4798"); // Replace with your actual access key

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            if (result.success) {
                // Show confirmation popup
                const isConfirmed = window.confirm("Your message has been sent successfully! Do you want to submit another message?");
                if (isConfirmed) {
                    // Reset the form if the user confirms
                    event.target.reset();
                }
            } else {
                alert("There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to fetch. Please check your internet connection.");
        }
    };

    // Add the script for ElfSight after the component is mounted
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup the script
        };
    }, []);

    return (
        <div className="min-h-screen py-1 px-2 mt-2 w-full sm:py-12">
            <div className="relative py-3 sm:max-w-full sm:mx-auto">
                <div className="relative px-0 py-10 bg-white shadow-lg w-full sm:rounded-3xl sm:p-0">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full sm:w-96 p-6 bg-gold text-black rounded-xl shadow-lg">
                            <div className="pb-6">
                                <h2 className="text-2xl font-bold mb-4">Office Address</h2>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <LocationOnIcon className="mr-3 text-2xl" />
                                        <span className="font-serif text-lg hover:text-blue-600">Kisumu, Kenya</span>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="mr-3 text-2xl" />
                                        <a href="tel:+254791317298" target="_blank" rel="noopener noreferrer " className="font-sans text-lg hover:text-blue-600">
                                            +254 791 317 298
                                        </a>
                                    </p>
                                    <p className="flex items-center">
                                        <EmailIcon className="mr-3 text-2xl" />
                                        <a href="mailto:compactchefsevents@gmail.com" className=" hover:text-blue-600 font-serif text-lg" target="_blank" rel="noopener noreferrer">
                                            compactchefsevents@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Handles */}
                            <div className="pt-2 md:pt-6">
                                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                                <div className="flex space-x-6 justify-start">
                                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <FacebookIcon fontSize="medium" />
                                    </a>
                                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <TwitterIcon fontSize="medium" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <LinkedInIcon fontSize="medium" />
                                    </a>
                                    <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <InstagramIcon fontSize="medium" />
                                    </a>
                                </div>
                            </div>

                            <img
                                src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg"
                                alt="Wedding"
                                className="w-full h-60 object-cover rounded-xl pt-2"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="w-full p-6 pt-2 md:w-2/3">
                            <div className="divide-y divide-gray-200 space-y-0">
                                <div className="pb-8 text-center">
                                    <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                                </div>

                                <form onSubmit={onSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Phone Number</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Phone Number"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Company/Organization Name (Optional)</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Company Name (Optional)"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Type of Service</label>
                                            <select
                                                name="service_type"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                            >
                                                <option value="">Select Service</option>
                                                <option value="wedding">Wedding</option>
                                                <option value="corporate">Corporate Event</option>
                                                <option value="birthday">Birthday Party</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:col-span-2">
                                            <label className="leading-loose text-gray-800">Additional Information</label>
                                            <textarea
                                                name="additional_info"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Any Additional Information"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="bg-indigo-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-600 transition-colors"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* ElfSight widget */}
                            <div className="form-right">
                                <div className="elfsight-app-1552705b-cfc2-43a1-8c52-a2f88696bc8e" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
