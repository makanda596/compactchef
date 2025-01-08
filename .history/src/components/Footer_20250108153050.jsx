import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">About Compact Chef</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Compact Chef Events and Caterers specializes in delivering exquisite culinary experiences, turning your events into cherished memories. From gourmet creations to seamless execution, we redefine catering with flair.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Explore</h3>
                        <ul className="text-sm text-gray-300 space-y-3">
                            <li>
                                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#menu" className="hover:text-[#d4af37] transition-colors">Menu</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#book" className="hover:text-[#d4af37] transition-colors">Book Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Get in Touch</h3>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>163 Enmore Road, Enmore NSW 2042</li>
                            <li>(02) 7205 2922</li>
                            <li>info@compactchef.com.au</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" aria-label="Facebook" className="text-[#d4af37] hover:opacity-80">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-[#d4af37] hover:opacity-80">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-[#d4af37] hover:opacity-80">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                <div className="text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Compact Chef Events and Caterers. All rights reserved.
                    </p>
                    Created by <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer"> Makanda Worksoft</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
