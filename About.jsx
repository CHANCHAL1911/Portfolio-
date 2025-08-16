// src/component/About.jsx
import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="bg-black text-gray-300 py-20 px-6 md:px-20 relative overflow-hidden"
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-30 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                >
                    I’m a passionate <span className="text-purple-400">Front-End Developer</span>
                    who loves crafting responsive, animated, and interactive websites using
                    <span className="text-blue-400"> React</span> and
                    <span className="text-teal-400"> Tailwind CSS</span>.
                    I thrive on turning ideas into beautiful web experiences and constantly
                    learning the latest tools & technologies to improve my craft.
                </motion.p>

                {/* Skills */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg text-center hover:bg-purple-800 hover:scale-110 transition-transform duration-300 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;
