import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Github, ExternalLink, LayoutGrid, BookOpen, Layers, ChevronLeft, ChevronRight, AlertTriangle, Copy, Check, X } from 'lucide-react';
const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState('slideshow'); // 'slideshow', 'roller', 'grid'
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [copiedField, setCopiedField] = useState(null);

    const handleDemoClick = (e, project) => {
        e.preventDefault();
        if (project.title === "PayNow") {
            setSelectedProject(project);
            setShowDemoModal(true);
        } else {
            window.open(project.links.demo, '_blank');
        }
    };

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const viewModes = [
        { id: 'slideshow', icon: Layers, label: 'Slideshow' },
        { id: 'roller', icon: BookOpen, label: 'Card Stack' },
        { id: 'grid', icon: LayoutGrid, label: 'Grid View' },
    ];

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-32 px-6 bg-black/20 relative overflow-hidden">
            {/* Cosmic Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orbit-glow/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-star-white/70">Showcase of my latest work</p>
                </motion.div>

                {/* View Mode Switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    {viewModes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setViewMode(mode.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${viewMode === mode.id
                                ? 'bg-gradient-to-r from-nebula-purple to-orbit-glow text-white shadow-lg shadow-orbit-glow/25'
                                : 'glass-morphism text-star-white/70 hover:text-white border border-white/10 hover:border-orbit-glow/50'
                                }`}
                        >
                            <mode.icon size={20} />
                            <span className="hidden sm:inline">{mode.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Slideshow Mode */}
                {viewMode === 'slideshow' && (
                    <div className="relative glass-morphism rounded-3xl overflow-hidden p-1">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative aspect-video lg:aspect-auto lg:h-[600px] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={projects[activeIndex].id}
                                        src={projects[activeIndex].image}
                                        alt={projects[activeIndex].title}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent lg:bg-gradient-to-r" />

                                {/* Navigation Buttons on Image */}
                                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={prevProject}
                                        className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-all group/btn border border-white/20 hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25"
                                    >
                                        <ChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={nextProject}
                                        className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-all group/btn border border-white/20 hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25"
                                    >
                                        <ChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={projects[activeIndex].id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h3 className="text-4xl font-display font-bold mb-6">
                                            {projects[activeIndex].title}
                                        </h3>
                                        <p className="text-lg text-star-white/70 mb-8 leading-relaxed">
                                            {projects[activeIndex].description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-10">
                                            {projects[activeIndex].tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-nebula-purple border border-white/10 hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25 transition-all"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-6">
                                            <a
                                                href={projects[activeIndex].links.demo}
                                                onClick={(e) => handleDemoClick(e, projects[activeIndex])}
                                                className="px-8 py-4 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-orbit-glow/25 transition-all"
                                            >
                                                Live Demo <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={projects[activeIndex].links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-4 glass-morphism rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                                            >
                                                GitHub <Github size={20} />
                                            </a>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Dots */}
                                <div className="flex gap-3 mt-12">
                                    {projects.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? 'w-8 bg-orbit-glow'
                                                : 'w-2 bg-white/20 hover:bg-white/40'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Card Stack Carousel Mode */}
                {viewMode === 'roller' && (
                    <div className="relative max-w-5xl mx-auto h-[700px] flex items-center justify-center">
                        {/* Card Stack */}
                        <div className="relative w-full h-[600px]">
                            {projects.map((project, index) => {
                                const offset = index - activeIndex;
                                const isActive = index === activeIndex;
                                const isPrev = offset < 0;
                                const isNext = offset > 0;

                                return (
                                    <motion.div
                                        key={project.id}
                                        className="absolute top-1/2 left-1/2 w-full max-w-3xl"
                                        initial={false}
                                        animate={{
                                            x: '-50%',
                                            y: isPrev ? '-60%' : isNext ? '-40%' : '-50%',
                                            scale: isActive ? 1 : isPrev ? 0.85 : 0.9,
                                            opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5,
                                            zIndex: isActive ? 10 : isPrev ? 5 - Math.abs(offset) : 10 - offset,
                                            rotateX: isPrev ? -5 : isNext ? 5 : 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.32, 0.72, 0, 1]
                                        }}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            perspective: '1000px',
                                        }}
                                    >
                                        <div className={`relative glass-morphism rounded-3xl overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-orbit-glow/50 shadow-2xl shadow-orbit-glow/20' : 'border-white/10'
                                            }`}>
                                            {/* Project Image */}
                                            <div className="relative h-80 overflow-hidden">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                    animate={{
                                                        scale: isActive ? 1 : 1.1,
                                                    }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/60 to-transparent" />

                                                {/* Floating Tech Stack */}
                                                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-xs">
                                                    {project.tech.slice(0, 4).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-deep-space/80 backdrop-blur-md rounded-full text-xs font-medium border border-white/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.tech.length > 4 && (
                                                        <span className="px-3 py-1 bg-deep-space/80 backdrop-blur-md rounded-full text-xs font-medium border border-white/20">
                                                            +{project.tech.length - 4}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Project Content */}
                                            <div className="p-8">
                                                <h3 className="text-3xl font-display font-bold mb-4 gradient-text">
                                                    {project.title}
                                                </h3>
                                                <p className="text-star-white/80 mb-6 leading-relaxed line-clamp-3">
                                                    {project.description}
                                                </p>

                                                {/* Action Buttons */}
                                                <div className="flex gap-4">
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleDemoClick(e, project)}
                                                        className="flex-1 py-3 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-bold text-center hover:shadow-lg hover:shadow-orbit-glow/25 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <ExternalLink size={18} />
                                                        Live Demo
                                                    </a>
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 py-3 glass-morphism rounded-xl font-bold text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <Github size={18} />
                                                        GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Navigation Controls */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6">
                            <button
                                onClick={prevProject}
                                className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all group border border-white/20 hover:border-orbit-glow/50"
                            >
                                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>

                            {/* Progress Dots */}
                            <div className="flex gap-2">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === activeIndex
                                            ? 'w-8 h-2 bg-gradient-to-r from-nebula-purple to-orbit-glow'
                                            : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextProject}
                                className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all group border border-white/20 hover:border-orbit-glow/50"
                            >
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-orbit-glow transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-star-white/70 mb-4 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-3 py-1 text-xs text-star-white/50">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => handleDemoClick(e, project)}
                                            className="flex-1 py-2 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-lg text-sm font-bold text-center hover:shadow-lg hover:shadow-orbit-glow/25 transition-all"
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 glass-morphism rounded-lg text-sm font-bold text-center hover:bg-white/10 transition-all"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Demo Info Modal */}
            <AnimatePresence>
                {showDemoModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowDemoModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-deep-space border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowDemoModal(false)}
                                className="absolute top-4 right-4 text-star-white/50 hover:text-white"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                                    <AlertTriangle size={32} className="text-yellow-500" />
                                </div>
                                <h3 className="text-2xl font-bold gradient-text mb-2">Important Notice</h3>
                                <p className="text-star-white/80">
                                    This project is hosted on a free instance. Please wait <span className="text-yellow-400 font-bold">30-60 seconds</span> for the server to wake up.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6 space-y-3">
                                <h4 className="text-sm font-semibold text-star-white/60 uppercase tracking-wider mb-2">Test Credentials</h4>

                                <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg border border-white/5">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs text-star-white/50">Phone Number</span>
                                        <span className="font-mono text-orbit-glow">9398764230</span>
                                    </div>
                                    <button
                                        onClick={() => handleCopy('9398764230', 'phone')}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                                    >
                                        {copiedField === 'phone' ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-star-white/70" />}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg border border-white/5">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs text-star-white/50">PIN</span>
                                        <span className="font-mono text-orbit-glow">1234</span>
                                    </div>
                                    <button
                                        onClick={() => handleCopy('1234', 'pin')}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                                    >
                                        {copiedField === 'pin' ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-star-white/70" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowDemoModal(false)}
                                    className="flex-1 py-3 rounded-xl font-semibold text-star-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    Cancel
                                </button>
                                <a
                                    href={selectedProject?.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setShowDemoModal(false)}
                                    className="flex-1 py-3 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-bold text-center hover:shadow-lg hover:shadow-orbit-glow/25 transition-all flex items-center justify-center gap-2"
                                >
                                    Proceed to Demo <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
