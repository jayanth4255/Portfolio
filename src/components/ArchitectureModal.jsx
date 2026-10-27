import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Database, Server, ShieldCheck, CheckCircle2, Layers, Cpu, ArrowRight } from 'lucide-react';

const ArchitectureModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/70 overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/80 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                                <Layers size={22} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                        System Architecture
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">{project.tagline}</p>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            aria-label="Close architecture modal"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 text-slate-300">
                        {/* High Level Architecture Overview */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase mb-2">
                                    <Server size={14} /> Backend & APIs
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {project.architecture?.backend || "Microservices architecture with RESTful endpoints and schema validation."}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase mb-2">
                                    <Database size={14} /> Database & Storage
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {project.architecture?.database || "Relational schema design with ORM modeling and foreign-key constraints."}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase mb-2">
                                    <Cpu size={14} /> Client & State
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {project.architecture?.frontend || "Modular state-driven interface with asynchronous request handling."}
                                </p>
                            </div>
                        </div>

                        {/* Database Entities & Relational Design */}
                        {project.architecture?.entities && (
                            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
                                <div className="flex items-center gap-2 text-slate-200 font-display font-semibold mb-3">
                                    <Database size={18} className="text-indigo-400" />
                                    <span>Relational Database Schema & Entities</span>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.architecture.entities.map((entity, i) => (
                                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-indigo-300">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                            <span>model: {entity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* REST API Endpoints Specification */}
                        {project.architecture?.apiEndpoints && (
                            <div>
                                <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                                    <Server size={16} className="text-indigo-400" />
                                    Key REST API Endpoints & Request Validation
                                </h4>
                                <div className="rounded-xl border border-slate-800 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs font-mono">
                                            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                                                <tr>
                                                    <th className="py-2.5 px-4">Method</th>
                                                    <th className="py-2.5 px-4">Endpoint Path</th>
                                                    <th className="py-2.5 px-4">Specification / Behavior</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                                                {project.architecture.apiEndpoints.map((ep, i) => (
                                                    <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                                                        <td className="py-2.5 px-4">
                                                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                                                                ep.method === 'POST' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                                                                ep.method === 'GET' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' :
                                                                ep.method === 'PUT' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                                                                'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                                            }`}>
                                                                {ep.method}
                                                            </span>
                                                        </td>
                                                        <td className="py-2.5 px-4 text-slate-200">{ep.path}</td>
                                                        <td className="py-2.5 px-4 text-slate-400">{ep.desc}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Engineering Implementation Highlights */}
                        <div>
                            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                                <ShieldCheck size={16} className="text-emerald-400" />
                                Engineering Decisions & Robustness Guarantees
                            </h4>
                            <div className="space-y-2.5">
                                {project.keyFeatures.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/50 text-sm">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <span>Tech:</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors"
                                    >
                                        <Github size={14} />
                                        <span>View Code</span>
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/30 transition-colors"
                                    >
                                        <span>Launch Live App</span>
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ArchitectureModal;
