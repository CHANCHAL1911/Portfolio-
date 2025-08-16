import React from "react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-black text-gray-200">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-blue-400 uppercase mb-6"
                >
                    Contact Me
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-400 mb-12"
                >
                    Have a project in mind or just want to say hello? Let’s connect!
                </motion.p>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
                >
                    {/* Name */}
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-400 transition-all"
                    />

                    {/* Email */}
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:border-pink-400 transition-all"
                    />

                    {/* Message */}
                    <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        placeholder="Your Message"
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:outline-none focus:border-yellow-400 transition-all"
                    ></motion.textarea>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-pink-500/50 transition-all"
                    >
                        Send Message 🚀
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
