import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { academics } from '../data/academics';

const Academics = () => {
    return (
        <section id="academics" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <GraduationCap size={13} />
                            <span>Formal Education & Foundation</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Education
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Comprehensive academic foundation in Computer Science, Artificial Intelligence, and Applied Mathematics.
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {academics.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl shadow-black/30"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                <div>
                                    <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                                        {edu.period}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                                        {edu.field}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                                        <span>{edu.institution}</span>
                                        <span>•</span>
                                        <span>{edu.location}</span>
                                    </p>
                                </div>

                                <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-sm font-bold shrink-0">
                                    {edu.score}
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                                {edu.summary}
                            </p>

                            {/* Core Subjects / Highlights */}
                            {edu.coreSubjects && (
                                <div className="pt-4 border-t border-slate-800/60">
                                    <span className="text-xs font-mono text-slate-500 block mb-2">Key Coursework:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.coreSubjects.map((sub, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300 font-mono text-xs"
                                            >
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;
