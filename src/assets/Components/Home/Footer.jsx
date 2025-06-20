import React from "react";
import { FaFacebookF,FaInstagram,FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 pt-18 pb-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Newsletter */}
                <div>
                    <h3 className="text-sm font-semibold uppercase mb-4">Newsletter</h3>
                    <p className="mb-4 text-sm text-gray-300">
                        Sign up to our newsletter to receive exclusive offers.
                    </p>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full bg-black border border-gray-600 text-white px-4 py-2 mb-4 focus:outline-none"
                    />
                    <button className="relative overflow-hidden px-6 py-3 bg-white text-black font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                        <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white">
                          SUBSCRIBE
                        </span>
                        <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                    </button>
                    <div className="flex gap-4 mt-6 text-xl text-gray-300 cursor-pointer">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div>
                        <p className="mt-4 text-sm text-gray-400">
                            © 2023 Aodour. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-sm font-semibold uppercase mb-4">About Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Exchange & Refund Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Reach Us */}
                <div>
                    <h3 className="text-sm font-semibold uppercase mb-4">Reach Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Contact Us</a></li>
                        <li>
                            Sales Queries WhatsApp:{" "}
                            <span className="font-bold text-white">+92 301 1120840</span>
                        </li>
                        <li>
                            Complaints Queries WhatsApp:{" "}
                            <span className="font-bold text-white">+92 301 1120152</span>
                        </li>
                        <li>AODOUR (PVT) LTD</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="ms-20">
                    <h3 className="text-sm font-semibold uppercase mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Track my Order</a></li>
                        <li><a href="#">I Have a Complaint</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
