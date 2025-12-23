import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2, Minimize2, Mail, Linkedin, AlertCircle, Upload, Heart, MessageSquare, Send } from 'lucide-react';
import { personalInfo } from '../data/personal';

const ResumeViewer = ({ isOpen, onClose, resumePath }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [resumeExists, setResumeExists] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [likes, setLikes] = useState(124); // Mock initial likes
    const [isLiked, setIsLiked] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(false);
            setResumeExists(true);
        }
    }, [isOpen]);

    const handleDownload = () => {
        if (!resumeExists) return;
        const link = document.createElement('a');
        link.href = resumePath;

        // Extract extension or default to pdf
        const extension = resumePath.split('.').pop() || 'pdf';
        link.download = `${personalInfo.name.replace(' ', '_')}_Resume.${extension}`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const handleEmail = () => {
        window.location.href = `mailto:jayanthmothukuri799@gmail.com`;
    };

    const handleLinkedIn = () => {
        window.open(personalInfo.social.linkedin, '_blank');
    };

    const handleLike = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className={`bg-deep-space/95 backdrop-blur-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/50 relative flex flex-col ${isFullscreen ? 'fixed inset-0 w-full h-full rounded-none z-[102]' : 'w-full max-w-7xl h-[85vh] rounded-3xl'
                                }`}
                        >
                            <div className="relative bg-gradient-to-r from-deep-space via-deep-space/98 to-deep-space border-b-2 border-white/10 px-4 sm:px-8 py-4 sm:py-6 shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple/10 via-orbit-glow/10 to-nebula-pink/10" />

                                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-purple to-orbit-glow flex items-center justify-center shadow-lg shadow-orbit-glow/25">
                                            <Download size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-display font-bold gradient-text">Resume</h2>
                                            <p className="text-xs sm:text-sm text-star-white/60">{personalInfo.name}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                                        {/* Like Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleLike}
                                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold flex items-center gap-2 border transition-all ${isLiked
                                                ? 'bg-nebula-pink/20 border-nebula-pink text-nebula-pink'
                                                : 'glass-morphism border-white/20 hover:border-nebula-pink/50 hover:bg-nebula-pink/10'}`}
                                        >
                                            <Heart size={18} className={isLiked ? "fill-current" : ""} />
                                            <span className="text-sm">{likes}</span>
                                        </motion.button>

                                        {/* Comment Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowCommentModal(true)}
                                            className="px-4 sm:px-5 py-2 sm:py-2.5 glass-morphism rounded-xl font-semibold flex items-center gap-2 border border-white/20 hover:border-orbit-glow/50 hover:bg-orbit-glow/10 transition-all"
                                        >
                                            <MessageSquare size={18} className="text-orbit-glow" />
                                            <span className="hidden sm:inline text-sm">Comment</span>
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleDownload}
                                            disabled={!resumeExists}
                                            className={`group px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all ${resumeExists ? 'bg-gradient-to-r from-nebula-purple to-orbit-glow shadow-orbit-glow/25 hover:shadow-orbit-glow/40' : 'bg-gray-600 opacity-50 cursor-not-allowed'
                                                }`}
                                        >
                                            <Download size={18} className={resumeExists ? 'group-hover:animate-bounce' : ''} />
                                            <span className="text-sm sm:text-base">Download</span>
                                        </motion.button>

                                        {/* Contact Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleEmail}
                                            className="px-4 sm:px-6 py-2 sm:py-3 glass-morphism rounded-xl font-semibold flex items-center gap-2 border border-white/20 hover:border-nebula-pink/50 hover:bg-nebula-pink/10 transition-all"
                                        >
                                            <Send size={18} className="text-nebula-pink" />
                                            <span className="hidden sm:inline text-sm sm:text-base">Contact</span>
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={toggleFullscreen}
                                            className="w-10 h-10 sm:w-12 sm:h-12 glass-morphism rounded-xl flex items-center justify-center border border-white/20 hover:border-orbit-glow/50 hover:bg-orbit-glow/10 transition-all"
                                        >
                                            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.05, rotate: 90, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={onClose}
                                            className="w-10 h-10 sm:w-12 sm:h-12 glass-morphism rounded-xl flex items-center justify-center border border-white/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all"
                                        >
                                            <X size={20} className="text-red-400" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full flex-1 bg-gradient-to-br from-deep-space/50 to-deep-space/80 p-4">
                                {isLoading ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-16 h-16 border-4 border-orbit-glow/30 border-t-orbit-glow rounded-full mx-auto mb-4"
                                            />
                                            <p className="text-star-white/70">Loading...</p>
                                        </div>
                                    </div>
                                ) : resumeExists ? (
                                    <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/50 bg-white">
                                        <iframe
                                            src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
                                            className="w-full h-full"
                                            title="Resume PDF"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-full rounded-2xl border-2 border-white/10 glass-morphism flex items-center justify-center p-8">
                                        <div className="text-center max-w-md">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-nebula-purple/20 to-orbit-glow/20 flex items-center justify-center"
                                            >
                                                <AlertCircle size={40} className="text-orbit-glow" />
                                            </motion.div>
                                            <h3 className="text-2xl font-display font-bold gradient-text mb-4">No Resume Found</h3>
                                            <p className="text-star-white/70 mb-6">Please upload your resume (PDF or Word document) to the public folder.</p>
                                            <div className="glass-morphism rounded-xl p-6 border border-white/10 text-left">
                                                <div className="flex items-start gap-3">
                                                    <Upload size={20} className="text-nebula-purple mt-1" />
                                                    <div>
                                                        <p className="font-semibold text-star-white mb-2">How to add:</p>
                                                        <ol className="text-sm text-star-white/70 space-y-2 list-decimal list-inside">
                                                            <li>Place your file in <code className="px-2 py-1 bg-white/10 rounded text-orbit-glow">public</code> folder</li>
                                                            <li>Name it <code className="px-2 py-1 bg-white/10 rounded text-orbit-glow">resume.pdf</code> (or .docx)</li>
                                                            <li>Refresh page</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-0 left-0 w-40 h-40 bg-nebula-purple/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orbit-glow/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 translate-y-1/2" />
                            </div>

                            {/* Comment Modal (Simple Overlay) */}
                            <AnimatePresence>
                                {showCommentModal && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.9, y: 20 }}
                                            animate={{ scale: 1, y: 0 }}
                                            exit={{ scale: 0.9, y: 20 }}
                                            className="w-full max-w-md bg-deep-space border border-white/20 rounded-2xl p-6 shadow-2xl m-4"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold gradient-text">Leave a Comment</h3>
                                                <button onClick={() => setShowCommentModal(false)} className="text-star-white/50 hover:text-white">
                                                    <X size={20} />
                                                </button>
                                            </div>
                                            <textarea
                                                placeholder="Write your thoughts..."
                                                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-star-white focus:outline-none focus:border-orbit-glow/50 transition-colors resize-none mb-4"
                                            />
                                            <div className="flex justify-end gap-3">
                                                <button
                                                    onClick={() => setShowCommentModal(false)}
                                                    className="px-4 py-2 rounded-lg text-star-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setShowCommentModal(false);
                                                        // Here you would typically send the comment to a backend
                                                    }}
                                                    className="px-4 py-2 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-lg font-semibold shadow-lg shadow-orbit-glow/25 hover:shadow-orbit-glow/40 transition-all"
                                                >
                                                    Post Comment
                                                </button>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orbit-glow/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nebula-purple/50 to-transparent" />
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ResumeViewer;
