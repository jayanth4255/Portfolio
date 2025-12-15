import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personal';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            {/* Starfield Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Floating Cosmic Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[Mail, Code2, Github].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-orbit-glow/10"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 5 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Icon size={80} />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
                            Let's Create Something Amazing
                        </h2>
                        <p className="text-xl text-star-white/70 mb-12 leading-relaxed">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-orbit-glow group-hover:shadow-lg group-hover:shadow-orbit-glow/25 transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Email Me</h4>
                                    <p className="text-star-white/60">{personalInfo.email}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-orbit-glow">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Location</h4>
                                    <p className="text-star-white/60">{personalInfo.location}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex gap-4 mt-12"
                        >
                            {[
                                { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                                { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                                { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode' },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-star-white/70 hover:text-white hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25 transition-all border border-white/10"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Cosmic Glow Background */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-3xl opacity-20 blur-xl" />

                        <div className="relative glass-morphism p-8 md:p-10 rounded-3xl border border-white/20">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-star-white/80">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orbit-glow/50 focus:shadow-lg focus:shadow-orbit-glow/25 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-star-white/80">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orbit-glow/50 focus:shadow-lg focus:shadow-orbit-glow/25 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-star-white/80">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orbit-glow/50 focus:shadow-lg focus:shadow-orbit-glow/25 transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-star-white/80">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orbit-glow/50 focus:shadow-lg focus:shadow-orbit-glow/25 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orbit-glow/25 transition-all group"
                                >
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
