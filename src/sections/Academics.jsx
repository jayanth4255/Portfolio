import React from 'react';
import { motion } from 'framer-motion';
import { academics } from '../data/academics';

const Academics = () => {
    return (
        <section id="academics" className="py-32 px-6 relative overflow-hidden">
            {/* Cosmic Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orbit-glow/10 rounded-full blur-[120px] animate-pulse-glow" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
                        Academic Journey
                    </h2>
                    <p className="text-xl text-star-white/70">My educational background</p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line with Animated Gradient */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-gradient-to-b from-nebula-purple via-orbit-glow to-transparent"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {academics.map((item, index) => (
                            <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}>
                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="w-full md:w-5/12"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="relative group"
                                    >
                                        {/* Cosmic Glow on Hover */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

                                        <div className="relative glass-morphism p-8 rounded-2xl border border-white/10 hover:border-orbit-glow/50 transition-all duration-300">
                                            <span className="text-sm font-bold text-orbit-glow mb-2 block">
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-orbit-glow transition-colors">{item.title}</h3>
                                            <h4 className="text-lg text-star-white/80 mb-4">{item.institution}</h4>
                                            <p className="text-star-white/60 leading-relaxed">
                                                {item.description}
                                            </p>
                                            {item.score && (
                                                <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-orbit-glow font-semibold">
                                                    Score: {item.score}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Center Dot with Multiple Pulse Rings */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="relative w-6 h-6 z-10"
                                    >
                                        {/* Main Dot */}
                                        <div className="absolute inset-0 bg-orbit-glow rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

                                        {/* Pulse Rings */}
                                        <div className="absolute inset-0 bg-orbit-glow rounded-full animate-ping opacity-75" />
                                        <div className="absolute inset-0 bg-nebula-purple rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
                                    </motion.div>
                                </div>

                                {/* Empty Side for spacing */}
                                <div className="w-full md:w-5/12 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academics;
