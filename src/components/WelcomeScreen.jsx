import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personal';

const WelcomeScreen = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 1000);
        }, 4000); // Show for 4 seconds for better experience

        return () => clearTimeout(timer);
    }, [onComplete]);

    const handleClick = () => {
        setShow(false);
        setTimeout(onComplete, 500);
    };

    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space overflow-hidden cursor-pointer"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onClick={handleClick}
                >
                    {/* Cosmic Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-radial from-nebula-purple/20 via-deep-space to-deep-space" />

                    {/* Nebula Clouds */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/40 rounded-full blur-[120px] animate-pulse-glow" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orbit-glow/40 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-nebula-pink/30 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                    </motion.div>

                    {/* Animated Particles */}
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -30, -60],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                    ))}

                    {/* Main Content */}
                    <div className="relative z-10 px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="mb-4"
                            >
                                <span className="text-2xl md:text-4xl font-display text-star-white/80">
                                    Welcome to
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-5xl md:text-8xl font-display font-bold mb-4"
                            >
                                <span className="gradient-text glow-text">
                                    {personalInfo.name.split(' ')[0]}'s Universe
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="text-lg md:text-xl text-star-white/60 font-medium"
                            >
                                A Cosmic Journey Through Code & Creativity
                            </motion.p>
                        </motion.div>

                        {/* Decorative Lines */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                            className="h-px bg-gradient-to-r from-transparent via-orbit-glow to-transparent mt-12 mb-8 max-w-2xl mx-auto"
                        />

                        {/* Click to Enter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="text-center"
                        >
                            <motion.p
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-star-white/70 text-sm uppercase tracking-[0.3em] font-medium"
                            >
                                Click anywhere to enter
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Corner Accents */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-orbit-glow/50"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-orbit-glow/50"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
