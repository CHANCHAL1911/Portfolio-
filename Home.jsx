// src/component/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <section
            id="home"
            className="bg-black text-white h-screen flex items-center justify-center relative"
        >
            <div className="text-center px-6">
                {/* Name */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm Chanchal Kumari
                </motion.h1>

                {/* Typewriter Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-purple-400 font-semibold mb-6"
                >
                    <ReactTyped
                        strings={["Front-End Developer", "React.js Enthusiast", "Tailwind CSS Expert"]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </motion.div>

                {/* Download Resume Button */}
                <motion.a
                    href="../public/Resume/Chanchal_Kumari_Resume.pdf" // Adjust the path to your resume file
                    download
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-lg shadow-lg text-white font-semibold transition duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    📄 Download Resume
                </motion.a>
            </div>
        </section>
    );
}

export default Home;
