import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Clock, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Briefcase size={13} />
                            <span>Professional Background</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Experience & Internships
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Practical industry experience developing software solutions, data pipelines, and machine learning models.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {experience.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl shadow-black/30"
                        >
                            {/* Card Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                                            {item.role}
                                        </h3>
                                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs">
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-base text-indigo-400 font-medium mt-0.5">
                                        {item.company}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-indigo-400" />
                                        {item.period}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-sky-400" />
                                        {item.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="space-y-3 mb-6">
                                {item.highlights.map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                                {item.tech.map((t, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-xs"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
