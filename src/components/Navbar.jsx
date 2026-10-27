import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText, Download, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personal';
import ResumeViewer from './ResumeViewer';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Local resume file path from public folder
    const resumePath = './resume.pdf';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            // Active section detection
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'academics', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Academics', href: '#academics' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    const handleDownloadDirect = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = `Mothukuri_Siva_Naga_Jayantha_Achary_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <motion.header
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#090D16]/90 backdrop-blur-xl border-b border-slate-800 shadow-xl shadow-black/40 py-3'
                        : 'bg-transparent py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Brand / Name */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-display font-extrabold text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            JA
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                                Jayanth Achary
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                                SDE • Backend & Full-Stack
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                        isActive
                                            ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden sm:flex items-center gap-2.5">
                        <button
                            onClick={() => setShowResume(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all hover:border-indigo-500/40"
                        >
                            <FileText size={14} className="text-indigo-400" />
                            <span>View Resume</span>
                        </button>

                        <button
                            onClick={handleDownloadDirect}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40"
                        >
                            <Download size={14} />
                            <span>Download CV</span>
                        </button>

                        <div className="h-5 w-px bg-slate-800 mx-1"></div>

                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-[#0F172A]/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6"
                        >
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800 font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-3">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setShowResume(true);
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700"
                                >
                                    <FileText size={16} className="text-indigo-400" />
                                    <span>View Resume</span>
                                </button>

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleDownloadDirect();
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30"
                                >
                                    <Download size={16} />
                                    <span>Download Resume</span>
                                </button>

                                <div className="flex items-center justify-center gap-4 mt-2">
                                    <a
                                        href={personalInfo.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={personalInfo.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-sky-400"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* In-App Resume Viewer Modal */}
            <ResumeViewer
                isOpen={showResume}
                onClose={() => setShowResume(false)}
                resumePath={resumePath}
            />
        </>
    );
};

export default Navbar;
