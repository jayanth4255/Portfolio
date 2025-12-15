import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from '../components/celestial/ParallaxSection';
import { ArrowDown, Sparkles, Github, Linkedin, Mail, Code2, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personal';
import profileHero from '../assets/Profile.png';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-white' },
        { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode', color: 'hover:text-yellow-400' },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-nebula-pink' },
    ];

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-20">
            {/* Animated Nebula Layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        x: mousePosition.x,
                        y: mousePosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                />
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orbit-glow/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            {/* Animated Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 80 }).map((_, i) => (
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

            {/* Floating Particle Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-nebula-purple to-orbit-glow"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Parallax Planet/Galaxy Element */}
            <motion.div
                className="absolute right-10 top-1/4 w-32 h-32 opacity-30"
                style={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2,
                }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple to-orbit-glow rounded-full blur-xl opacity-50 animate-pulse-glow" />
                    <div className="absolute inset-2 bg-gradient-to-br from-nebula-pink to-nebula-purple rounded-full" />
                </div>
            </motion.div>

            <ParallaxSection speed={0.5}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center max-w-5xl mx-auto relative z-10"
                >
                    {/* Profile Photo with Cosmic Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mb-6 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple via-orbit-glow to-nebula-pink rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 glass-morphism p-1">
                                <img
                                    src={profileHero}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name with Glow Pulse */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-3 leading-tight relative"
                    >
                        <motion.span
                            className="gradient-text glow-text"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(139, 92, 246, 0.8)',
                                    '0 0 40px rgba(139, 92, 246, 1)',
                                    '0 0 20px rgba(139, 92, 246, 0.8)',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {personalInfo.name}
                        </motion.span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="inline-flex items-center gap-2 px-5 py-2 glass-morphism rounded-full mb-5 border border-orbit-glow/30"
                    >
                        <Sparkles size={16} className="text-orbit-glow" />
                        <span className="text-base md:text-lg font-medium text-star-white">{personalInfo.title}</span>
                    </motion.div>

                    {/* Quote Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="mb-4 max-w-2xl mx-auto"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative glass-morphism rounded-2xl p-5 md:p-6 border border-white/20">
                                <div className="absolute top-3 left-3 text-4xl text-orbit-glow/30 font-serif">"</div>
                                <p className="text-lg md:text-xl text-star-white/90 font-medium italic relative z-10 pt-4">
                                    {personalInfo.quote}
                                </p>
                                <div className="absolute bottom-3 right-3 text-4xl text-orbit-glow/30 font-serif rotate-180">"</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="text-base md:text-lg text-star-white/70 mb-6 font-medium"
                    >
                        Crafting Digital Experiences • Exploring the Cosmos of Code
                    </motion.p>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex justify-center gap-4 mb-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className={`w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-star-white/70 ${social.color} transition-all duration-300 border border-white/10 hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25`}
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                    >
                        <a
                            href="#about"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-full font-display font-semibold text-white shadow-2xl hover:shadow-orbit-glow/50 transition-all duration-300"
                        >
                            Explore My Universe
                            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </ParallaxSection>

            {/* Amazing Vertical Wave Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <a href="#about" className="block group cursor-pointer">
                    <div className="relative flex flex-col items-center">
                        {/* Vertical Wave Bars */}
                        <div className="relative flex items-end gap-1 h-16 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-gradient-to-t from-nebula-purple via-orbit-glow to-nebula-pink rounded-full"
                                    animate={{
                                        height: ['20px', '60px', '20px'],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Pulsing Glow Background */}
                        <motion.div
                            className="absolute top-0 w-20 h-20 bg-gradient-to-br from-nebula-purple/20 to-orbit-glow/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Flowing Chevrons */}
                        <div className="flex flex-col items-center -space-y-2 relative z-10">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, 12, 0],
                                        opacity: [0.2, 1, 0.2]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ChevronDown
                                        size={18}
                                        className={`${i === 0 ? 'text-nebula-purple' :
                                                i === 1 ? 'text-orbit-glow' :
                                                    'text-nebula-pink'
                                            }`}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Animated Text Label */}
                        <motion.div
                            className="mt-3 relative"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.span
                                animate={{
                                    opacity: [0.6, 1, 0.6],
                                    textShadow: [
                                        '0 0 10px rgba(139, 92, 246, 0.5)',
                                        '0 0 20px rgba(139, 92, 246, 0.8)',
                                        '0 0 10px rgba(139, 92, 246, 0.5)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs text-star-white uppercase tracking-widest font-bold group-hover:text-orbit-glow transition-colors"
                            >
                                Scroll Down
                            </motion.span>
                        </motion.div>
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
