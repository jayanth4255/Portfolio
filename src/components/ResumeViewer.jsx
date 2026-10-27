import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2, Minimize2, Mail, Phone, ExternalLink, FileText, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/personal';

const ResumeViewer = ({ isOpen, onClose, resumePath }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    if (!isOpen) return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = `Mothukuri_Siva_Naga_Jayantha_Achary_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 15 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`relative bg-[#0F172A] border border-slate-700/80 shadow-2xl shadow-black/80 flex flex-col z-10 overflow-hidden ${
                        isFullscreen
                            ? 'fixed inset-0 w-full h-full rounded-none'
                            : 'w-full max-w-5xl h-[90vh] rounded-2xl'
                    }`}
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-slate-900/90 border-b border-slate-800 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold text-white">
                                    {personalInfo.fullName}
                                </h3>
                                <p className="text-xs text-slate-400 flex items-center gap-2">
                                    <span>{personalInfo.title}</span>
                                    <span>•</span>
                                    <span className="text-emerald-400 font-mono">Verified SDE Resume</span>
                                </p>
                            </div>
                        </div>

                        {/* Top Action Toolbar */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-colors"
                            >
                                <Download size={14} />
                                <span>Download PDF</span>
                            </button>

                            <button
                                onClick={handleCopyEmail}
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                            >
                                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
                                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                            </button>

                            <a
                                href={resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                                title="Open in new tab"
                            >
                                <ExternalLink size={16} />
                            </a>

                            <button
                                onClick={() => setIsFullscreen(!isFullscreen)}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                            >
                                {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                            </button>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-500/30 transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* PDF Viewer Body */}
                    <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-hidden">
                        <div className="w-full h-full rounded-xl overflow-hidden border border-slate-800 shadow-inner bg-slate-900">
                            <iframe
                                src={`${resumePath}#toolbar=1&navpanes=0`}
                                className="w-full h-full border-0"
                                title={`${personalInfo.fullName} Resume`}
                            />
                        </div>
                    </div>

                    {/* Recruiter Quick Contact Footer */}
                    <div className="px-6 py-3 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
                        <div className="flex items-center gap-4">
                            <span>Direct Inquiries: <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 hover:underline">{personalInfo.email}</a></span>
                            <span>Phone: <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:underline">{personalInfo.phoneDisplay}</a></span>
                        </div>
                        <span className="text-emerald-400 font-mono">Ready for Technical Interview & SDE Onboarding</span>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
};

export default ResumeViewer;
