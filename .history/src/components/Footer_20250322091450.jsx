import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTiktok } from "react-icons/fa";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("access_key", "your-web3forms-access-key");

        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        setEmail("");
        Swal.fire({
            title: "Subscribed!",
            text: "Thank you for subscribing to our newsletter!",
            icon: "success",
            confirmButtonColor: "#d4af37"
        });
    };

    return (
        <footer className="bg-[#1a1a1a] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center space-y-4 mb-8">
                    <h3 className="text-md font-bold text-[#d4af37]">Subscribe to our Newsletter for  Dish`s Recipies, Menus and more updates on offers </h3>
                    <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full md:w-1/3 p-2 rounded border text-black"
                        />
                        <button type="submit" className="bg-[#d4af37] text-white px-4 py-2 rounded hover:bg-yellow-700 transition">Subscribe</button>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Compact Chef Events And Caterers</h3>
                        <p className="text-md text-gray-300 leading-relaxed">
                            Compact Chef Events and Caterers specializes in delivering exquisite culinary experiences, turning your events into cherished memories. From gourmet creations to seamless execution, we redefine catering with flair.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Explore</h3>
                        <ul className="text-md text-gray-300 space-y-3">
                            <li><a href="/src" className="hover:text-[#d4af37] transition-colors">Home</a></li>
                            <li><a href="/services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
                            <li><a href="/menu" className="hover:text-[#d4af37] transition-colors">Menu</a></li>
                            <li><a href="/contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
                            <li><a href="/book" className="hover:text-[#d4af37] transition-colors">Book Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#d4af37] mb-4">Get in Touch</h3>
                        <ul className="text-md text-gray-300 space-y-4 flex-row">
                            <li>Kisumu, Kenya</li>
                            <li><a href="mailto:compactchefsevents@gmail.com" target="_blank" rel="noopener noreferrer" className='py-1 hover:text-gold'>Email: compactchefsevents@gmail.com</a></li>
                            <br />
                            <a href="tel:+254791317298" target="_blank" rel="noopener noreferrer" className='py-1 hover:text-gold'>Phone: +254 791 317 298</a>
                        </ul>
                        <div className="pt-2 md:pt-6">
                            <h2 className="text-xl font-bold mb-4 text-[#d4af37]">Follow Us</h2>
                            <div className="flex space-x-6 justify-start">
                                <a href="https://www.facebook.com/profile.php?id=100088582093332e" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><FacebookIcon fontSize="medium" /></a>
                                <a href="https://www.tiktok.com/@emojongvictor?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-color"><FaTiktok fontSize="large" /></a>
                                <a href="" className="hover:text-blue-400 transition-colors"><LinkedInIcon fontSize="medium" /></a>
                                <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><InstagramIcon fontSize="medium" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-8"></div>

                <div className="text-center space-y-2 text-md">
                    <p className="text-gold">&copy; {new Date().getFullYear()} Compact Chefs Events and Caterers. All rights reserved.</p>
                    Created by <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>Makanda Worksoft</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
