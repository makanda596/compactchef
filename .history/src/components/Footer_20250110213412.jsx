import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Compact Chef Events And Cateres</h3>
                        <p className="text-md text-gray-300 leading-relaxed">
                            Compact Chef Events and Caterers specializes in delivering exquisite culinary experiences, turning your events into cherished memories. From gourmet creations to seamless execution, we redefine catering with flair.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Explore</h3>
                        <ul className="text-md text-gray-300 space-y-3">
                            <li>
                                <a href="/src" className="hover:text-[#d4af37] transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-[#d4af37] transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="/menu" className="hover:text-[#d4af37] transition-colors">Menu</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="/book" className="hover:text-[#d4af37] transition-colors">Book Us</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Get in Touch</h3>
                        <ul className="text-md text-gray-300 space-y-4 flex-row">
                            <li>Kisumu ,Kenya</li>
                            <li>  <a href="mailto:compactchefsevents@gmail.com" target="_blank"
                                rel="noopener noreferrer" className='py-1 hover:text-gold'>Email :compactchefsevents@gmail.com</a> </li> <br />
                            <a href="tel:+254791317298" target="_blank"
                                rel="noopener noreferrer" className='py-1 hover:text-gold'>Phone: +254 791 317 298</a>
                        </ul>
                        <div className="pt-2 md:pt-6">
                            <h2 className="text-xl font-bold mb-4 text-[#d4af37]">Follow Us</h2>
                            <div className="flex space-x-6 justify-start">
                                <a
                                    href="https://www.facebook.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <FacebookIcon fontSize="medium" />
                                </a>
                                <a
                                    href="https://twitter.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <TwitterIcon fontSize="medium" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/yourcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <LinkedInIcon fontSize="medium" />
                                </a>
                                <a
                                    href="https://www.instagram.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    <InstagramIcon fontSize="medium" />
                                </a>
                            </div>



                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                <div className="text-center space-y-2 text-md">
                    Created by <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'> Makanda Worksoft</a>

                    <p className=" text-gold">
                        &copy; {new Date().getFullYear()} Compact Chef Events and Caterers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
