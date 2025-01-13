import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center w-full sm:py-12">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="flex flex-wrap">
                        {/* Left column with contact information */}
                        <div className="w-full sm:w-1/2 p-4 border-r-2 border-gray-200 bg-gradient-to-b from-blue-500 to-purple-600 text-white rounded-xl">
                            <div className="pb-6">
                                <h2 className="text-2xl font-bold mb-4">Office Address</h2>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <LocationOnIcon className="mr-2" />
                                        <span>1234 Some Street, City, Country</span>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="mr-2" />
                                        <span>(123) 456-7890</span>
                                    </p>
                                    <p className="flex items-center">
                                        <EmailIcon className="mr-2" />
                                        <span>Email: contact@company.com</span>
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Handles */}
                            <div className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                                <div className="flex space-x-6 justify-center">
                                    <a
                                        href="https://www.facebook.com/yourpage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        <FacebookIcon fontSize="large" />
                                    </a>
                                    <a
                                        href="https://twitter.com/yourhandle"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        <TwitterIcon fontSize="large" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/yourcompany"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        <LinkedInIcon fontSize="large" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/yourhandle"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-400 transition-colors"
                                    >
                                        <InstagramIcon fontSize="large" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right column with the contact form */}
                        <div className="w-full sm:w-1/2 p-4">
                            <div className="divide-y divide-gray-200">
                                <div className="pb-8 text-center">
                                    <h1 className="text-2xl font-bold">Contact Us</h1>
                                </div>
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Name</label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Email</label>
                                        <input
                                            type="email"
                                            className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Message</label>
                                        <textarea
                                            className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
