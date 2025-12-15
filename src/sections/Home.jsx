import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personal';
import Profile from '../assets/Profile.png';
const Home = () => {
    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter,
        leetcode: Code2
    };

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nebula-purple/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto w-full text-center z-10">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="relative mx-auto w-48 h-48 mb-8"
                >
                    <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-nebula-purple via-orbit-glow to-nebula-pink">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-deep-space">
                            <img
                                src={Profile}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nebula-purple to-orbit-glow blur-xl opacity-50 -z-10 animate-pulse-glow" />
                </motion.div>

                {/* Name & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight">
                        {personalInfo.name}
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium mb-8">
                        <span className="gradient-text">{personalInfo.title}</span>
                    </p>
                </motion.div>

                {/* Quote Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-white/20 to-white/10">
                        <div className="bg-deep-space/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/5">
                            <p className="text-lg md:text-xl text-star-white/90 italic font-light leading-relaxed">
                                "{personalInfo.quote}"
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <button className="px-8 py-4 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-display font-bold text-white shadow-lg shadow-orbit-glow/25 hover:shadow-orbit-glow/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        <span className="text-lg">Download Resume</span>
                    </button>

                    <button className="px-8 py-4 glass-morphism rounded-xl font-display font-bold text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/20">
                        <span className="text-lg">View Projects</span>
                    </button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex items-center justify-center gap-6"
                >
                    {Object.entries(personalInfo.social).map(([platform, url]) => {
                        const Icon = socialIcons[platform];
                        return (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-orbit-glow/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-orbit-glow/50 group-hover:bg-white/10 transition-all duration-300">
                                    <Icon size={20} className="text-star-white/70 group-hover:text-white transition-colors" />
                                </div>
                            </a>
                        );
                    })}
                </motion.div>
            </div>

            {/* Bottom Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-sm text-star-white/50 uppercase tracking-widest">Let's Connect</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-orbit-glow to-transparent" />
            </motion.div>
        </section>
    );
};

export default Home;
