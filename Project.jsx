
// src/component/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "E-shopping Fakestore Shopping",
            description: "An e-commerce website using React, Fakestore API, and Tailwind CSS.",
            github: "https://github.com/CHANCHAL1911/E-shopping-Fakestore-Shopping.git",
        },
        {
            title: "Petservice Website",
            description: "A modern pet service website with responsive design and animations.",
            github: "https://github.com/CHANCHAL1911/Petservice_Website.git",
        },
        {
            title: "Anoix Shopping Website",
            description: "A stylish shopping website built using HTML, CSS, JS, and React.",
            github: "https://github.com/CHANCHAL1911/Anoix-Shopping-Website.git",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-black text-gray-300 py-20 px-6 md:px-20 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 opacity-30 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-900 transition duration-300 hover:-translate-y-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded-lg text-white transition duration-300"
                            >
                                View Code
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
