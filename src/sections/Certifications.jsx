import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, CheckCircle2, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { certifications, achievements } from '../data/certifications';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Award size={13} />
                            <span>Verified Credentials & Milestones</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Certifications & Achievements
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Industry-recognized credentials validating backend engineering, problem solving, version control, and machine learning.
                    </p>
                </div>

                {/* Achievements Showcase Strip */}
                <div className="grid sm:grid-cols-3 gap-4 mb-16">
                    {achievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <Trophy size={18} />
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                                    {item.badge}
                                </span>
                            </div>
                            <h3 className="font-display font-bold text-white text-base mb-1">
                                {item.title}
                            </h3>
                            <p className="text-xs text-indigo-300 font-mono mb-2">
                                {item.platform}
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certifications Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                                </div>

                                <h3 className="font-display font-bold text-white text-base mb-1.5 group-hover:text-indigo-300 transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                    {cert.description}
                                </p>

                                {/* Skills tags */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {cert.skills.map((s, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-2 py-0.5 rounded bg-slate-800/60 text-[11px] font-mono text-slate-400"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                                {cert.image ? (
                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        View Certificate
                                    </button>
                                ) : (
                                    <span className="text-xs text-slate-500 font-mono">Verified Certification</span>
                                )}

                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                        title="Verify Certificate Credential"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-display font-bold text-white text-lg">{selectedCert.title}</h4>
                                    <p className="text-xs text-slate-400">{selectedCert.issuer} • {selectedCert.date}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="w-full max-h-[65vh] overflow-hidden rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-center p-2">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="max-h-[60vh] max-w-full object-contain rounded-lg"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800">
                                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                                    <CheckCircle2 size={14} />
                                    <span>Verified Credential</span>
                                </span>
                                {selectedCert.link && (
                                    <a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
                                    >
                                        <span>Open Verification Link</span>
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
