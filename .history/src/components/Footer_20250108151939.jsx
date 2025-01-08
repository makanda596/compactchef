import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Compact Chef</h3>
                        <p className="text-sm text-gray-400">
                            Compact Chef Events and Caterers specializes in delivering exceptional culinary experiences for events of all sizes. From personalized menus to flawless service, we bring your vision to life.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>
                                <a href="#home" className="hover:text-white transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#menu" className="hover:text-white transition-colors">Menu</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#book" className="hover:text-white transition-colors">Book Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>163 Enmore Road, Enmore NSW 2042</li>
                            <li>(02) 7205 2922</li>
                            <li>info@compactchef.com.au</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Compact Chef Events and Caterers. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
