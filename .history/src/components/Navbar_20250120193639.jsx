import React, { useState } from "react";
import logo from '../assets/logo.jpg'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gold shadow-lg fixed top-0 z-50 w-full">
            <div className="container mx-auto px-4 flex justify-between items-center h-12 md:h-14">

                <div className="text-black font-bold text-xl flex space-x-4">
                    <img src={logo} alt="" className="w-10 rounded-lg object-cover" />
                    <p className="py-1">Compact Chefs</p></div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Links for Desktop */}
                <div className="hidden lg:flex   space-x-6 text-xl ">
                    <a href="/" className=" text-black font-serif hover:text-white">
                        Home
                    </a>
                    <a href="services" className="text-black font-serif hover:text-white">
                        Services
                    </a>
                    <a href="menu" className="text-black font-serif hover:text-white">
                        Menu
                    </a>

                    <a href="gallery" className="text-black font-serif hover:text-white">
                        Gallery
                    </a>
                    <a href="book" className="text-black font-serife hover:text-white" target="_blank" >
                        Inquire Now
                    </a>
                    <a href="contact" className="text-black font-serif hover:text-white">
                        Contact Us
                    </a>

                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="lg:hidden bg-black">
                        <a
                            href="/"
                            className="block py-2 px-4 text-white hover:bg-gold"
                        >
                            Home
                        </a>
                        <a
                            href="services"
                            className="block py-2 px-4 text-white hover:bg-gold"
                        >
                            Services
                        </a>
                        <a
                            href="menu"
                            className="block py-2 px-4 text-white hover:bg-gold"
                        >
                            Menu
                        </a>
                        <a href="gallery" className="block py-2 px-4 text-white hover:bg-gold">
                            Gallery
                        </a>
                        <a
                            href="contact"
                            className="block py-2 px-4 text-white hover:bg-gold"
                        >
                            Contact
                        </a>
                        <a
                            href="book"
                            className="block py-2 px-4 text-white hover:bg-gold"
                        >
                            Book Us
                        </a>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
