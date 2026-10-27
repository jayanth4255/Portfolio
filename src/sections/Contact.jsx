import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Github, 
    Linkedin, 
    Download, 
    Check, 
    Copy, 
    MessageSquare, 
    Clock, 
    ShieldCheck,
    Loader2,
    AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/personal';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: "b4e88753-1994-453e-9387-d90636e5fc87",
                    name: formData.name,
                    email: formData.email,
                    role: formData.role || "Not specified",
                    message: formData.message,
                    subject: `Portfolio Message from ${formData.name}${formData.role ? ` (${formData.role})` : ''}`,
                    from_name: `${formData.name} (Portfolio)`
                })
            });

            const data = await response.json();
            if (data.success) {
                setFormSubmitted(true);
                setFormData({ name: '', email: '', role: '', message: '' });
            } else {
                setErrorMessage(data.message || "Failed to send message. Please try again or email directly.");
            }
        } catch (err) {
            setErrorMessage("Network error occurred. Please check your connection or email directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDownloadDirect = () => {
        const link = document.createElement('a');
        link.href = './resume.pdf';
        link.download = `Mothukuri_Siva_Naga_Jayantha_Achary_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Mail size={13} />
                            <span>Recruiter & Hiring Inquiries</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Get In Touch
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Open for Software Development Engineer (SDE), Backend Engineer, and Full-Stack Engineering roles. Immediate joiner.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Communication Channels (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-xl shadow-black/30 space-y-6">
                            <div>
                                <h3 className="text-xl font-display font-bold text-white mb-2">
                                    Direct Contact Information
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    Feel free to reach out directly via email, phone, or LinkedIn for technical interview schedules or job openings.
                                </p>
                            </div>

                            {/* Email Card */}
                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[11px] font-mono text-slate-400 block">Primary Email</span>
                                        <a 
                                            href={`mailto:${personalInfo.email}`}
                                            className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 truncate block transition-colors"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy(personalInfo.email, 'email')}
                                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                                    title="Copy email"
                                >
                                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                                </button>
                            </div>

                            {/* Phone Card */}
                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[11px] font-mono text-slate-400 block">Direct Phone</span>
                                        <a 
                                            href={`tel:${personalInfo.phone}`}
                                            className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 truncate block transition-colors font-mono"
                                        >
                                            {personalInfo.phoneDisplay}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                                    title="Copy phone"
                                >
                                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                                </button>
                            </div>

                            {/* Location Card */}
                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="text-[11px] font-mono text-slate-400 block">Current Location</span>
                                    <span className="text-xs sm:text-sm font-semibold text-white">
                                        {personalInfo.location}
                                    </span>
                                </div>
                            </div>

                            {/* Social Profiles */}
                            <div className="pt-2 flex items-center gap-3">
                                <a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
                                >
                                    <Linkedin size={15} className="text-sky-400" />
                                    <span>LinkedIn</span>
                                </a>

                                <a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
                                >
                                    <Github size={15} />
                                    <span>GitHub</span>
                                </a>
                            </div>

                            {/* Download Resume Quick Button */}
                            <button
                                onClick={handleDownloadDirect}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50"
                            >
                                <Download size={16} />
                                <span>Download Verified SDE Resume (PDF)</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Recruiter Message Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-xl shadow-black/30">
                            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                                <MessageSquare size={18} className="text-indigo-400" />
                                <span>Send a Direct Message</span>
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 mb-6">
                                Recruiters and engineering hiring managers can leave inquiries below. Messages are routed straight to my inbox.
                            </p>

                            {formSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                                >
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                                        <Check size={24} />
                                    </div>
                                    <h4 className="font-display font-bold text-white text-lg">Message Received!</h4>
                                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                                        Thank you for reaching out. I prioritize hiring inquiries and will respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setErrorMessage('');
                                        }}
                                        className="mt-2 px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                                    >
                                        Send Another Note
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {errorMessage && (
                                        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs">
                                            <AlertCircle size={16} className="shrink-0" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono text-slate-400 mb-1.5">
                                                Your Name / Recruiter Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                disabled={isSubmitting}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g., Alex Johnson"
                                                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono text-slate-400 mb-1.5">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                disabled={isSubmitting}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="alex@company.com"
                                                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                                            Company / Opportunity Role
                                        </label>
                                        <input
                                            type="text"
                                            name="role"
                                            disabled={isSubmitting}
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="e.g., SDE-1 (Python / Backend) at TechCorp"
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                                            Message / Job Description *
                                        </label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            required
                                            disabled={isSubmitting}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="We reviewed your NoteAI Pro and PayNow projects and would like to discuss an engineering role..."
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-colors resize-none disabled:opacity-50"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={14} className="animate-spin" />
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={14} />
                                                <span>Dispatch Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
