import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Server, 
    Code2, 
    Cpu, 
    Database, 
    ShieldCheck, 
    Terminal, 
    Layers, 
    CheckCircle2, 
    Search,
    Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categoryIcons = {
        backend: Server,
        languages: Code2,
        frontend: Cpu,
        databases: Database,
        testing: ShieldCheck,
        tools: Terminal,
        fundamentals: Layers
    };

    // Filter skills based on category and search query
    const filteredCategories = skillCategories.map(cat => {
        const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
        const matchingSkills = cat.skills.filter(s => 
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
            ...cat,
            skills: matchingSkills,
            matchesCategory
        };
    }).filter(cat => cat.matchesCategory && cat.skills.length > 0);

    const levelColor = (level) => {
        switch (level) {
            case 'Advanced':
                return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
            case 'Proficient':
                return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
            case 'Intermediate':
                return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
            default:
                return 'bg-slate-700/30 text-slate-400 border-slate-700';
        }
    };

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 relative bg-[#090D16] border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
                            <Server size={13} />
                            <span>Technical Matrix & Competencies</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                            Technical Skills
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        Structured across backend architectures, database schemas, automated testing, and core computer science fundamentals.
                    </p>
                </div>

                {/* Filters & Search Toolbar */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
                    {/* Category Filter Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                                selectedCategory === 'all'
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            All Categories
                        </button>
                        {skillCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                                    selectedCategory === cat.id
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Quick Search Input */}
                    <div className="relative min-w-[240px]">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search skills (e.g., FastAPI, Docker, SQL)..."
                            className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 outline-none focus:border-indigo-500/50 transition-colors font-mono"
                        />
                    </div>
                </div>

                {/* Categories & Skills Display */}
                <div className="space-y-10">
                    {filteredCategories.map((category) => {
                        const Icon = categoryIcons[category.id] || Layers;
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all"
                            >
                                {/* Category Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800/60">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-white">
                                                {category.name}
                                            </h3>
                                            <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                                        </div>
                                    </div>
                                    <span className="self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-indigo-300 border border-slate-700/60">
                                        {category.badge}
                                    </span>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 hover:bg-slate-850 transition-all group"
                                        >
                                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                                <h4 className="font-display font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                                                    {skill.name}
                                                </h4>
                                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${levelColor(skill.level)}`}>
                                                    {skill.level}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400 leading-relaxed">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-16 bg-slate-900/30 border border-slate-800 rounded-2xl">
                            <p className="text-slate-400 font-mono text-sm">
                                No technical skills matching "{searchQuery}".
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                className="mt-3 px-4 py-2 rounded-lg bg-indigo-600 text-xs font-semibold text-white"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
