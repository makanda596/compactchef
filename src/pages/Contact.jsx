import React, { useEffect, useState, useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FaTiktok } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Swal from "sweetalert2";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const formRef = useRef(null); 

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", ""); 

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            setLoading(true);
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            setLoading(false);
            if (result.success) {
                setSubmitted(true);
                Swal.fire({
                    title: "Success!",
                    text: "Thank you for contacting us. We'll get back to you soon.",
                    icon: "success",
                    confirmButtonColor: "#8b8000",
                });

                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error submitting the form. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#8b8000",
                });
            }
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
            Swal.fire({
                title: "Failed!",
                text: "Failed to fetch. Please check your internet connection.",
                icon: "error",
                confirmButtonColor: "#8b8000",
            });
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
                <div className="relative px-0 py-10  s w-full sm:rounded-3xl sm:p-0">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full sm:w-96 p-6 bg-gold text-black rounded-xl shadow-lg">
                            <div className="pb-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Office Address</h2>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <LocationOnIcon className="mr-3 text-xl md:text-2xl" />
                                        <span className="font-serif text-base md:text-lg hover:text-blue-600">Kisumu, Kenya</span>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="mr-3 text-xl md:text-2xl" />
                                        <a href="tel:+254791317298" target="_blank" rel="noopener noreferrer " className="font-sans text-base md:text-lg hover:text-blue-600">
                                            +254 791 317 298
                                        </a>
                                    </p>
                                    <p className="flex items-center">
                                        <EmailIcon className="mr-3 text-xl md:text-2xl" />
                                        <a href="mailto:compactchefsevents@gmail.com" className=" hover:text-blue-600 font-serif text-base md:text-lg" target="_blank" rel="noopener noreferrer">
                                            compactchefsevents@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-1 md:pt-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Follow Us</h2>
                                <div className="flex space-x-4 justify-start">
                                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <FacebookIcon fontSize="medium" />
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@emojongvictor?is_from_webapp=1&sender_device=pc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-color"
                                    >
                                        <FaTiktok fontSize="large" />
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
                                alt=""
                                className="w-full h-60 object-cover rounded-xl pt-2"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="w-full p-6 pt-4 md:w-2/3">
                            <div className="divide-y divide-gray-200 space-y-0">
                                <div className="pb-6 text-center">
                                    <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
                                </div>

                                <form ref={formRef} onSubmit={onSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required="true"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md text-sm focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required="true"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Phone Number</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                required="true"
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
                                                required="true"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                            >
                                                <option value="">Select Service</option>
                                                <option value="wedding">Wedding Events</option>
                                                <option value="other">MC Services</option>
                                                <option value="corporate">Corporate Event</option>
                                                <option value="other">Tent Services</option>
                                                <option value="birthday">Birthday Party</option>
                                                <option value="other">Catering Services</option>
                                                <option value="other">Event Decoration</option>
                                                <option value="other">Photograph Services</option>
                                                <option value="other">Baby Showers</option>
                                                <option value="other">Private Events</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                required="true"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:col-span-2">
                                            <label className="leading-loose text-gray-800">Additional Information</label>
                                            <textarea
                                                name="additional_info"
                                                required="true"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Any Additional Information"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 transition-colors"
                                        >
                                            {loading ? "Submitting..." : "Submit "}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="form-right">
                                <div className="elfsight-app-1552705b-cfc2-43a1-8c52-a2f88696bc8e" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
        </div >
    );
};

export default Contact;
