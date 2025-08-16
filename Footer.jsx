import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

                {/* Name / Logo */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white"
                >
                    Chanchal Kumari
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 mt-2 text-center"
                >
                    Crafting beautiful & interactive web experiences 🚀
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex space-x-6 mt-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://github.com/CHANCHAL1911"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition"
                    >
                        <FaLinkedin size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="text-gray-400 hover:text-sky-400 transition"
                    >
                        <FaTwitter size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="text-gray-400 hover:text-pink-500 transition"
                    >
                        <FaInstagram size={24} />
                    </motion.a>
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-500 text-sm mt-6"
                >
                    © {new Date().getFullYear()} Chanchal Kumari. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}

export default Footer;
