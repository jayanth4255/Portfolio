import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Download, 
    ArrowRight, 
    Github, 
    Linkedin, 
    FileText, 
    Terminal, 
    CheckCircle2, 
    Sparkles, 
    Shield, 
    Layers, 
    Database, 
    Code2,
    Cpu,
    ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import profileHero from '../assets/Profile.png';
import TerminalWidget from '../components/TerminalWidget';
import ResumeViewer from '../components/ResumeViewer';

const Hero = () => {
    const [showResume, setShowResume] = useState(false);
    const resumePath = './resume.pdf';

    const handleDownloadDirect = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = `Mothukuri_Siva_Naga_Jayantha_Achary_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const coreStack = [
        { name: "Python", category: "Core" },
        { name: "FastAPI", category: "Backend" },
        { name: "Django", category: "Backend" },
        { name: "React.js", category: "Frontend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "REST APIs", category: "Architecture" },
        { name: "Docker", category: "DevOps" },
        { name: "SQLAlchemy", category: "ORM" },
        { name: "Pytest", category: "Testing" }
    ];

    return (
        <section id="home" className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 flex items-center overflow-hidden bg-[#090D16]">
            {/* Ambient Background Glow and Subtle Technical Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Positioning & Engineering Narrative (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        {/* Status Availability Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono font-medium text-emerald-400">
                                Open for SDE Roles • Immediate Joiner
                            </span>
                        </div>

                        {/* Candidate Full Name & Professional Headline */}
                        <div>
                            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-indigo-400 mb-2">
                                Software Development Engineer
                            </p>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                                Mothukuri Siva Naga <br className="hidden sm:inline" />
                                <span className="gradient-text">Jayantha Achary</span>
                            </h1>
                            <p className="mt-2 text-lg sm:text-xl font-medium text-slate-300">
                                Known as <span className="text-white font-semibold">Jayanth</span> • Full-Stack & Backend Systems Architect
                            </p>
                        </div>

                        {/* Concise Engineering Introduction */}
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                            Computer Science & Engineering graduate (AI & ML) who designs scalable backend services, asynchronous REST APIs, and responsive React applications. Proven track record engineering transactional wallets, e-commerce engines, and AI-powered workspaces with PostgreSQL and Docker.
                        </p>

                        {/* Core Stack Badges */}
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                                Core Technical Ecosystem
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {coreStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="tech-badge"
                                    >
                                        <Code2 size={12} className="text-indigo-400" />
                                        <span>{tech.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Primary Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 hover:-translate-y-0.5"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight size={16} />
                            </a>

                            <button
                                onClick={handleDownloadDirect}
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all hover:border-indigo-500/40 hover:-translate-y-0.5"
                            >
                                <Download size={16} className="text-indigo-400" />
                                <span>Download Resume</span>
                            </button>

                            <button
                                onClick={() => setShowResume(true)}
                                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 transition-colors"
                            >
                                <FileText size={16} className="text-slate-400" />
                                <span>View PDF</span>
                            </button>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
                            >
                                <span>Contact Me</span>
                            </a>
                        </div>

                        {/* Social Channels & Quick Verification */}
                        <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
                            <span>Connect:</span>
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                            >
                                <Github size={15} />
                                <span>github.com/jayanth4255</span>
                            </a>
                            <span>•</span>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                            >
                                <Linkedin size={15} />
                                <span>jayanth-developer</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Elements & Interactive SDE Terminal (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Profile Header Card */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center gap-4 shadow-xl shadow-black/30">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-indigo-500/40 shrink-0">
                                <img
                                    src={profileHero}
                                    alt="Mothukuri Siva Naga Jayantha Achary"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-display font-bold text-white text-base truncate">
                                        Jayanth Mothukuri
                                    </h4>
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Available"></span>
                                </div>
                                <p className="text-xs text-slate-400 truncate">B.Tech CSE (AI & ML) • CGPA 7.73</p>
                                <div className="mt-1 flex items-center gap-3 text-[11px] font-mono text-indigo-300">
                                    <span>Python • FastAPI • React</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Developer Terminal */}
                        <div className="relative">
                            <TerminalWidget />
                        </div>

                        {/* Verified SDE Metrics HUD */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {personalInfo.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-center"
                                >
                                    <span className="text-xl font-display font-extrabold text-white block">
                                        {stat.value}
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-medium block leading-tight mt-0.5">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* In-App Resume Modal */}
            <ResumeViewer
                isOpen={showResume}
                onClose={() => setShowResume(false)}
                resumePath={resumePath}
            />
        </section>
    );
};

export default Hero;
