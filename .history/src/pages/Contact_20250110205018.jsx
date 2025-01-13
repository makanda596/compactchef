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
        <div>
            <div className="min-h-screen bg-gray-100 py-6 m-0 mt-6 w-full sm:py-12 ">
                <div className="relative py-3 sm:max-w-full sm:mx-auto">
                    <div className="relative px-0 py-10 bg-white shadow-lg w-full sm:rounded-3xl sm:p-0">
                        <div className="flex flex-wrap w-full">
                            {/* Left column with contact information */}
                            <div className="w-full sm:w-96 p-6 bg-gold text-white rounded-xl shadow-lg">
                                <div className="pb-6">
                                    <h2 className="text-3xl font-bold mb-4">Office Address</h2>
                                    <div className="space-y-4">
                                        <p className="flex items-center">
                                            <LocationOnIcon className="mr-3 text-2xl" />
                                            <span>1234 Some Street, City, Country</span>
                                        </p>
                                        <p className="flex items-center">
                                            <PhoneIcon className="mr-3 text-2xl" />
                                            <span>(123) 456-7890</span>
                                        </p>
                                        <p className="flex items-center">
                                            <EmailIcon className="mr-3 text-2xl" />
                                            <span>Email: contact@company.com</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Social Media Handles */}
                                <div className="pt-6">
                                    <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
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
                            <div className="w-2/3 p-6">
                                <div className="divide-y divide-gray-200 space-y-6">
                                    <div className="pb-8 text-center">
                                        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Name</label>
                                            <input
                                                type="text"
                                                className="px-4 py-3 w-96 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Email</label>
                                            <input
                                                type="email"
                                                className="px-4 py-3 w-96 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Email"
                                            />
                                        </div>

                                        <div className="flex flex-col sm:col-span-3">
                                            <label className="leading-loose text-gray-800">Company Name (Optional)</label>
                                            <input
                                                type="text"
                                                className="px-4 py-3 w-96 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Company Name (Optional)"
                                            />
                                        </div>


                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Type of Service</label>
                                            <select
                                                className="px-4 py-3 w-96 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
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
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Number of People</label>
                                            <input
                                                type="number"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Number of People"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose text-gray-800">Venue (If Already Decided)</label>
                                            <input
                                                type="text"
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Venue Name"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:col-span-2">
                                            <label className="leading-loose text-gray-800">Message</label>
                                            <textarea
                                                className="px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 transition-colors"
                                                placeholder="Your Message"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-6 flex items-center space-x-4">
                                        <button className="bg-blue-500 flex justify-center items-center w-full text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find Us Here</h2>
                <div className="w-full h-auto">

                    <iframe
                        title="This is a unique title"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.6853046217846!2d35.29025464007813!3d0.2903323000000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780f502e43959db%3A0x1e7494c4904df5ec!2sTBE%20Productions!5e1!3m2!1sen!2ske!4v1734239546668!5m2!1sen!2ske"
                        className="w-full h-[450px] rounded-lg shadow-lg border-none"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
