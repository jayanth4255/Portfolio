import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personal';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#070A11] border-t border-slate-800/80 py-12 px-4 sm:px-6 text-slate-400 font-sans text-xs">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand & Rights */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-display font-extrabold text-white text-base shadow-md">
                        JA
                    </div>
                    <div>
                        <p className="font-display font-bold text-white text-sm">
                            {personalInfo.fullName}
                        </p>
                        <p className="text-slate-500 font-mono text-[11px] mt-0.5">
                            Software Development Engineer (SDE) • Full-Stack Systems
                        </p>
                    </div>
                </div>

                {/* Status & Tech Info */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for SDE Onboarding • Immediate Availability</span>
                </div>

                {/* Social Channels & Back to Top */}
                <div className="flex items-center gap-3">
                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={16} />
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 font-mono text-xs"
                        title="Back to top"
                    >
                        <span>Top</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-[11px] font-mono text-center sm:text-left">
                <p>© {new Date().getFullYear()} Mothukuri Siva Naga Jayantha Achary. Built for engineering rigor.</p>
                <p>Deployed on GitHub Pages: <a href="https://jayanth4255.github.io/Portfolio/" className="text-slate-500 hover:underline">jayanth4255.github.io/Portfolio/</a></p>
            </div>
        </footer>
    );
};

export default Footer;
