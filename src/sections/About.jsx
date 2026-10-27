import React from 'react';
import { motion } from 'framer-motion';
import { 
    Server, 
    Database, 
    Cpu, 
    ShieldCheck, 
    GraduationCap, 
    Award, 
    Code2, 
    Layers,
    CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import profileImg from '../assets/profile2.png';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Code2 size={13} />
                            <span>Engineering Profile & Philosophy</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            About Me
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Bridging rigorous computer science fundamentals, backend system reliability, and state-driven frontend engineering.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
                    {/* Left: Professional Photo with Engineering HUD Frame (4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative group max-w-md mx-auto">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
                            
                            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Jayanth Mothukuri"
                                    className="w-full aspect-[4/5] object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                                />
                                
                                {/* Overlay Technical Tag */}
                                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs">
                                    <div>
                                        <p className="font-display font-bold text-white">M. S. N. Jayantha Achary</p>
                                        <p className="text-slate-400 font-mono text-[11px]">B.Tech CSE (AI & ML) • 2025</p>
                                    </div>
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                                        Verified SDE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Narrative & Engineering Capability Breakdown (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 space-y-6 text-slate-300"
                    >
                        <div className="prose prose-invert max-w-none space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
                            <p>
                                I am a <strong className="text-white font-semibold">Computer Science & Engineering graduate (Specialization in AI & ML)</strong> from RISE Krishna Sai Prakasam Group of Institutions. My core technical drive lies in understanding how distributed backends operate under concurrency, how databases guarantee transactional consistency, and how to deliver production-grade applications that solve practical business problems.
                            </p>
                            <p>
                                Rather than building superficial clones, I focus on software depth: writing schema-validated REST APIs using <strong className="text-indigo-400 font-semibold">FastAPI and Django</strong>, architecting relational data models in <strong className="text-sky-400 font-semibold">PostgreSQL</strong> with SQLAlchemy ORM, and preventing concurrency race conditions in transactional financial applications.
                            </p>
                            <p>
                                With <strong className="text-emerald-400 font-semibold">100+ algorithmic problems solved</strong> across LeetCode and HackerRank, I approach system design with a rigorous data structures foundation—optimizing query complexity, handling edge-case exception hierarchies, and validating endpoints with automated Pytest and Postman test suites.
                            </p>
                        </div>

                        {/* 4 Core Pillars Grid */}
                        <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                            {personalInfo.engineeringStrengths.map((strength, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                                        <h4 className="font-display font-semibold text-white text-sm">
                                            {strength.title}
                                        </h4>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {strength.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Recruiter Bottom Callout */}
                        <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 text-indigo-300">
                                <Award size={16} className="shrink-0" />
                                <span>Immediate availability for SDE-1 / Graduate Software Engineer / Backend Developer roles.</span>
                            </div>
                            <a
                                href="#contact"
                                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shrink-0"
                            >
                                Schedule Interview
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
