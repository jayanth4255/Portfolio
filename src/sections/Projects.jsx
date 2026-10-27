import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ExternalLink, 
    Github, 
    Layers, 
    Database, 
    Server, 
    ShieldCheck, 
    ArrowUpRight, 
    CheckCircle2, 
    ChevronRight,
    Code2,
    Activity
} from 'lucide-react';
import { projects } from '../data/projects';
import ArchitectureModal from '../components/ArchitectureModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openArchitectureModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Layers size={13} />
                            <span>Verified Production Implementations</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Featured Projects
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Deep dive into real-world applications featuring schema validation, database concurrency, automated test suites, and live cloud deployments.
                    </p>
                </div>

                {/* Projects List Showcase */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all shadow-xl shadow-black/40"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Left Content: Details & Engineering Decisions (7 cols) */}
                                <div className="lg:col-span-7 space-y-6">
                                    {/* Badges & Title */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                                                {project.badge}
                                            </span>
                                            <span className="text-xs text-slate-500 font-mono">0{index + 1} / 03</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-indigo-400 font-mono mt-1">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    {/* Problem & Solution Architecture */}
                                    <div className="grid sm:grid-cols-2 gap-4 text-xs leading-relaxed">
                                        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                            <span className="text-slate-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                                                Problem Solved:
                                            </span>
                                            <p className="text-slate-300">{project.problem}</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                            <span className="text-indigo-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                                                Engineered Solution:
                                            </span>
                                            <p className="text-slate-300">{project.solution}</p>
                                        </div>
                                    </div>

                                    {/* Verified Metrics Chips */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                        {project.metrics.map((metric, mIdx) => (
                                            <div
                                                key={mIdx}
                                                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center"
                                            >
                                                <span className="text-base sm:text-lg font-display font-extrabold text-white block">
                                                    {metric.value}
                                                </span>
                                                <span className="text-[10px] text-slate-400 font-mono block truncate">
                                                    {metric.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Key Engineering Features */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                                            Core Technical Highlights:
                                        </span>
                                        <div className="space-y-1.5">
                                            {project.keyFeatures.map((feat, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack Chips */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.tech.map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-300 font-mono text-xs"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links & Architecture Trigger */}
                                    <div className="flex flex-wrap items-center gap-3 pt-2">
                                        <button
                                            onClick={() => openArchitectureModal(project)}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50"
                                        >
                                            <Database size={15} />
                                            <span>Explore Architecture & Schema</span>
                                            <ChevronRight size={14} />
                                        </button>

                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={14} />
                                            </a>
                                        )}

                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
                                            >
                                                <Github size={14} />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right Content: Visual Snapshot & Quick Architecture Snippet (5 cols) */}
                                <div className="lg:col-span-5 space-y-4">
                                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full aspect-video sm:aspect-[16/10] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                                        
                                        {/* Overlay Live Pill */}
                                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                            <span>{project.links.demo ? 'Live Deployment' : 'Production Repository'}</span>
                                        </div>
                                    </div>

                                    {/* Architecture Snapshot Card */}
                                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                                        <div className="flex items-center justify-between text-slate-400 border-b border-slate-850 pb-2">
                                            <span className="flex items-center gap-1.5 text-indigo-400">
                                                <Server size={13} />
                                                <span>System Spec</span>
                                            </span>
                                            <span className="text-[10px] text-slate-500">PostgreSQL • REST</span>
                                        </div>
                                        <div className="space-y-1 text-[11px] text-slate-400">
                                            <p>• Models: <span className="text-slate-200">{project.architecture?.entities?.slice(0, 3).join(', ')}...</span></p>
                                            <p>• Endpoints: <span className="text-slate-200">{project.metrics[0].value} endpoints</span> with Pydantic validation</p>
                                            <p>• Resiliency: Centralized exception logging</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Architecture Modal */}
            <ArchitectureModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Projects;
