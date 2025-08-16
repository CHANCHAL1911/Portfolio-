import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed w-full top-0 left-0 bg-black/80 backdrop-blur-md shadow-lg z-50"
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-blue-400"
                >
                    Chanchal<span className="text-pink-400">.dev</span>
                </motion.h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                    {["home", "about", "projects", "contact"].map((item, index) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.1, color: "#FFD700" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-pink-400 transition-colors"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-black/90 text-gray-300 px-4 py-4 space-y-4"
                >
                    {["home", "about", "projects", "contact"].map((item) => (
                        <Link
                            key={item}
                            to={item}
                            smooth={true}
                            duration={500}
                            className="block cursor-pointer hover:text-pink-400"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar;
