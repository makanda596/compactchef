import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FaTiktok } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "0cc2e329-faf6-499f-bc20-7239c9481cc5"); // Replace with your actual access key

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
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Your message has been sent successfully.",
                    confirmButtonColor: "#3085d6"
                });

                // Reset the form fields
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error submitting the form. Please try again!",
                    confirmButtonColor: "#d33"
                });
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: "Failed to Send",
                text: "Please check your internet connection and try again.",
                confirmButtonColor: "#d33"
            });
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen py-1 px-2 mt-2 w-full sm:py-12">
            <div className="relative py-3 sm:max-w-full sm:mx-auto">
                <div className="relative px-0 py-10 s w-full sm:rounded-3xl sm:p-0">
                    <div className="flex flex-wrap w-full">
                        {/* Left Column */}
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
                                        <a href="tel:+254791317298" className="font-sans text-base md:text-lg hover:text-blue-600">
                                            +254 791 317 298
                                        </a>
                                    </p>
                                    <p className="flex items-center">
                                        <EmailIcon className="mr-3 text-xl md:text-2xl" />
                                        <a href="mailto:compactchefsevents@gmail.com" className="hover:text-blue-600 font-serif text-base md:text-lg">
                                            compactchefsevents@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-1 md:pt-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Follow Us</h2>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/yourpage" className="hover:text-blue-400">
                                        <FacebookIcon fontSize="medium" />
                                    </a>
                                    <a href="https://www.tiktok.com/@emojongvictor" className="hover:text-blue-400">
                                        <FaTiktok fontSize="large" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/yourcompany" className="hover:text-blue-400">
                                        <LinkedInIcon fontSize="medium" />
                                    </a>
                                    <a href="https://www.instagram.com/yourhandle" className="hover:text-blue-400">
                                        <InstagramIcon fontSize="medium" />
                                    </a>
                                </div>
                            </div>

                            <img src="https://res.cloudinary.com/db5pgr14l/image/upload/v1736265751/wedding_nfkcue.jpg"
                                alt="Office" className="w-full h-60 object-cover rounded-xl pt-2" />
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="w-full p-6 pt-4 md:w-2/3">
                            <div className="divide-y divide-gray-200">
                                <div className="pb-6 text-center">
                                    <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
                                </div>

                                <form ref={formRef} onSubmit={onSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                                        <div className="flex flex-col">
                                            <label className="text-gray-800">Name</label>
                                            <input type="text" name="name" required className="px-4 py-3 border-2 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-800">Email</label>
                                            <input type="email" name="email" required className="px-4 py-3 border-2 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500" placeholder="Your Email" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-800">Message</label>
                                            <textarea name="message" required className="px-4 py-3 border-2 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" disabled={loading}
                                        className="mt-4 px-6 py-3 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 transition-all">
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
