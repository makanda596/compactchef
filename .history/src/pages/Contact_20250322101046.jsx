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
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "0cc2e329-faf6-499f-bc20-7239c9481cc5");

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
                        </div>
                        <div className="w-full p-6 pt-4 md:w-2/3">
                            <div className="divide-y divide-gray-200 space-y-0">
                                <div className="pb-6 text-center">
                                    <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
                                </div>
                                <form ref={formRef} onSubmit={onSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Name</label>
                                            <input type="text" name="name" required className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md" placeholder="Your Name" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Email</label>
                                            <input type="email" name="email" required className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600">
                                            {loading ? "Submitting..." : "Submit "}
                                        </button>
                                    </div>
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
