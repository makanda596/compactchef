import React, { useState } from "react";
import logo from '../assets/logo.jpg'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-orange-500 shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">

                <div className="text-white font-bold text-xl flex-row">
                    <img src={logo} alt="" className="w-2" />
                    <p>CompactChefs</p></div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
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
                <div className="hidden lg:flex space-x-6">
                    <a href="#home" className="text-white hover:underline">
                        Home
                    </a>
                    <a href="#services" className="text-white hover:underline">
                        Services
                    </a>
                    <a href="#menu" className="text-white hover:underline">
                        Menu
                    </a>
                    <a href="#contact" className="text-white hover:underline">
                        Contact
                    </a>
                    <a href="#book-us" className="text-white hover:underline">
                        Book Us
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-orange-400">
                    <a
                        href="#home"
                        className="block py-2 px-4 text-white hover:bg-orange-300"
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="block py-2 px-4 text-white hover:bg-orange-300"
                    >
                        Services
                    </a>
                    <a
                        href="#menu"
                        className="block py-2 px-4 text-white hover:bg-orange-300"
                    >
                        Menu
                    </a>
                    <a
                        href="#contact"
                        className="block py-2 px-4 text-white hover:bg-orange-300"
                    >
                        Contact
                    </a>
                    <a
                        href="#book-us"
                        className="block py-2 px-4 text-white hover:bg-orange-300"
                    >
                        Book Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
