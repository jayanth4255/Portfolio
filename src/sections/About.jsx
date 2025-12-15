import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import profile from '../assets/profile2.png';
import { Sparkles } from 'lucide-react';

const Counter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <span className="text-4xl font-display font-bold gradient-text">
            {count}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden">
            {/* Subtle Star Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Cosmic Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orbit-glow/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
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
                        About Me
                    </h2>
                    <p className="text-xl text-star-white/70">My journey through the cosmos of code</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    {/* Photo with Glowing Border */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative group">
                            {/* Animated Glowing Border */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-nebula-purple via-orbit-glow to-nebula-pink rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

                            {/* Image Container */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden glass-morphism p-3 border-2 border-white/20">
                                <img
                                    src={profile}
                                    alt="About"
                                    className="w-full h-full object-cover rounded-2xl"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-space/40 via-transparent to-transparent rounded-2xl" />
                            </div>

                            {/* Floating Sparkles */}
                            <motion.div
                                className="absolute -top-4 -right-4 text-orbit-glow"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Sparkles size={32} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Story - Storytelling Based */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            {/* Cosmic Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-3xl blur opacity-20" />

                            <div className="relative glass-morphism rounded-3xl p-10 border border-white/20">
                                <h3 className="text-3xl font-display font-bold mb-6 gradient-text flex items-center gap-3">
                                    <Sparkles size={28} className="text-orbit-glow" />
                                    My Story
                                </h3>
                                <div className="space-y-5 text-star-white/85 leading-relaxed text-lg">
                                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-orbit-glow first-letter:mr-2 first-letter:float-left">
                                        {personalInfo.about}
                                    </p>
                                    <p className="italic text-star-white/70 border-l-4 border-orbit-glow/50 pl-6 py-2">
                                        "Every line of code is a brushstroke in the masterpiece of innovation,
                                        and every project is a journey through uncharted digital galaxies."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quick Facts - Animated Glowing Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h3 className="text-4xl font-display font-bold mb-12 text-center gradient-text">Quick Facts</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {personalInfo.quickFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="relative group"
                            >
                                {/* Animated Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500" />

                                <div className="relative glass-morphism rounded-2xl p-8 text-center border border-white/10 group-hover:border-orbit-glow/50 transition-all duration-300">
                                    <motion.div
                                        className="text-3xl font-bold gradient-text mb-3"
                                        animate={{
                                            textShadow: [
                                                '0 0 10px rgba(139, 92, 246, 0.5)',
                                                '0 0 20px rgba(139, 92, 246, 0.8)',
                                                '0 0 10px rgba(139, 92, 246, 0.5)',
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {fact.value}
                                    </motion.div>
                                    <div className="text-sm text-star-white/70 font-medium uppercase tracking-wide">
                                        {fact.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Counters - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-4xl font-display font-bold mb-12 text-center gradient-text">Achievements</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-3xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
                            <div className="relative glass-morphism rounded-3xl p-10 text-center border border-white/20 group-hover:border-orbit-glow/50 transition-all">
                                <Counter end={personalInfo.counters.certifications} suffix="+" />
                                <p className="text-star-white/70 mt-3 text-lg font-medium">Certifications</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-orbit-glow to-nebula-pink rounded-3xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
                            <div className="relative glass-morphism rounded-3xl p-10 text-center border border-white/20 group-hover:border-orbit-glow/50 transition-all">
                                <Counter end={personalInfo.counters.leetcodeSolved} suffix="+" />
                                <p className="text-star-white/70 mt-3 text-lg font-medium">LeetCode Problems</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-nebula-pink to-nebula-purple rounded-3xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
                            <div className="relative glass-morphism rounded-3xl p-10 text-center border border-white/20 group-hover:border-orbit-glow/50 transition-all">
                                <Counter end={personalInfo.counters.projectsBuilt} suffix="+" />
                                <p className="text-star-white/70 mt-3 text-lg font-medium">Projects Built</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
