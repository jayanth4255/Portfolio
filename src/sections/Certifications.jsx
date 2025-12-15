import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award, ExternalLink, LayoutGrid, BookOpen, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState('grid'); // 'slideshow', 'roller', 'grid'

    const viewModes = [
        { id: 'grid', icon: LayoutGrid, label: 'Grid View' },
        { id: 'slideshow', icon: Layers, label: 'Slideshow' },
        { id: 'roller', icon: BookOpen, label: 'Card Stack' },
    ];

    const nextCert = () => {
        setActiveIndex((prev) => (prev + 1) % certifications.length);
    };

    const prevCert = () => {
        setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
    };

    return (
        <section id="certifications" className="py-32 px-6 relative overflow-hidden">
            {/* Cosmic Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orbit-glow/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
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
                        Certifications
                    </h2>
                    <p className="text-xl text-star-white/70">Credentials & Achievements</p>
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
                            <div className="relative aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={certifications[activeIndex].id}
                                        src={certifications[activeIndex].image}
                                        alt={certifications[activeIndex].title}
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
                                        onClick={prevCert}
                                        className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/20 transition-all group/btn border border-white/20 hover:border-orbit-glow/50 hover:shadow-lg hover:shadow-orbit-glow/25"
                                    >
                                        <ChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={nextCert}
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
                                        key={certifications[activeIndex].id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-nebula-purple border border-white/10">
                                                {certifications[activeIndex].date}
                                            </span>
                                            <span className="text-star-white/50">|</span>
                                            <span className="text-star-white/70 font-medium">
                                                {certifications[activeIndex].issuer}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                                            {certifications[activeIndex].title}
                                        </h3>

                                        <a
                                            href={certifications[activeIndex].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex px-8 py-4 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-xl font-bold items-center gap-2 hover:shadow-lg hover:shadow-orbit-glow/25 transition-all"
                                        >
                                            View Certificate <ExternalLink size={20} />
                                        </a>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Dots */}
                                <div className="flex gap-3 mt-12">
                                    {certifications.map((_, index) => (
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

                {/* Card Stack Mode */}
                {viewMode === 'roller' && (
                    <div className="relative max-w-5xl mx-auto h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-[500px]">
                            {certifications.map((cert, index) => {
                                const offset = index - activeIndex;
                                const isActive = index === activeIndex;
                                const isPrev = offset < 0;
                                const isNext = offset > 0;

                                return (
                                    <motion.div
                                        key={cert.id}
                                        className="absolute top-1/2 left-1/2 w-full max-w-2xl"
                                        initial={false}
                                        animate={{
                                            x: '-50%',
                                            y: isPrev ? '-60%' : isNext ? '-40%' : '-50%',
                                            scale: isActive ? 1 : isPrev ? 0.85 : 0.9,
                                            opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5,
                                            zIndex: isActive ? 10 : isPrev ? 5 - Math.abs(offset) : 10 - offset,
                                            rotateX: isPrev ? -5 : isNext ? 5 : 0,
                                        }}
                                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                    >
                                        <div className={`relative glass-morphism rounded-3xl overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-orbit-glow/50 shadow-2xl shadow-orbit-glow/20' : 'border-white/10'}`}>
                                            <div className="relative h-64 overflow-hidden">
                                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                                                <div className="absolute top-4 right-4 bg-deep-space/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                                    <Award size={14} className="text-orbit-glow" />
                                                    <span className="text-xs font-medium text-star-white">{cert.date}</span>
                                                </div>
                                            </div>
                                            <div className="p-8 text-center">
                                                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                                                <p className="text-star-white/60 mb-6">Issued by {cert.issuer}</p>
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl items-center gap-2 font-semibold transition-colors border border-white/10"
                                                >
                                                    View Certificate <ExternalLink size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Navigation Controls */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6">
                            <button onClick={prevCert} className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/20">
                                <ChevronLeft size={24} />
                            </button>
                            <div className="flex gap-2">
                                {certifications.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 h-2 bg-orbit-glow' : 'w-2 h-2 bg-white/30'}`}
                                    />
                                ))}
                            </div>
                            <button onClick={nextCert} className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/20">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500" />

                                <div className="relative glass-morphism rounded-2xl overflow-hidden border border-white/10 group-hover:border-orbit-glow/50 transition-all h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-80" />

                                        <div className="absolute top-4 right-4 bg-deep-space/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                            <Award size={14} className="text-orbit-glow" />
                                            <span className="text-xs font-medium text-star-white">{cert.date}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-orbit-glow transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-star-white/60 mb-6 text-sm">
                                            Issued by <span className="text-star-white/90 font-medium">{cert.issuer}</span>
                                        </p>

                                        <div className="mt-auto">
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors border border-white/10 hover:border-white/20"
                                            >
                                                View Certificate <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
