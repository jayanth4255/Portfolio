import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, Calendar, Clock } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
                        Experience
                    </h2>
                    <p className="text-xl text-star-white/70">My professional journey</p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-nebula-purple to-transparent -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-8 w-4 h-4 bg-orbit-glow rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10" />

                                {/* Date/Duration Side */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} mb-4 md:mb-0`}>
                                    <div className="inline-flex flex-col gap-1">
                                        <span className="text-2xl font-bold text-orbit-glow">{job.date}</span>
                                        <span className="text-star-white/60 flex items-center gap-2 justify-end">
                                            <Clock size={14} /> {job.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-orbit-glow/50 transition-all group hover:-translate-y-1 duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                                                <div className="flex items-center gap-2 text-nebula-purple font-medium">
                                                    <Briefcase size={16} />
                                                    {job.company}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {job.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-star-white/80 text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-glow shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tech.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-star-white/60 border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
