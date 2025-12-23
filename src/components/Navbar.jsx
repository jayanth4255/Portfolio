import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/personal';
import ResumeViewer from './ResumeViewer';
const resumeFile = "./resume.pdf";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Academics', href: '#academics' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-deep-space/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-4'
                : 'bg-deep-space/50 backdrop-blur-md py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="text-2xl font-display font-bold gradient-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        {personalInfo.name.split(' ')[0]}
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-star-white/70 hover:text-white transition-colors relative group cursor-pointer"
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-purple to-orbit-glow group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Social & Resume */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-star-white/70 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-star-white/70 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <button
                            onClick={() => setShowResume(true)}
                            className="px-4 py-2 glass-morphism rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            <FileText size={16} />
                            Resume
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-deep-space/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-star-white/80 hover:text-white cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-star-white/70">
                                    <Github size={24} />
                                </a>
                                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-star-white/70">
                                    <Linkedin size={24} />
                                </a>
                                <button
                                    onClick={() => setShowResume(true)}
                                    className="flex-1 py-3 glass-morphism rounded-xl text-center font-medium"
                                >
                                    View Resume
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Resume Viewer Modal */}
            <ResumeViewer
                isOpen={showResume}
                onClose={() => setShowResume(false)}
                resumePath={resumeFile}
            />
        </motion.nav>
    );
};

export default Navbar;
