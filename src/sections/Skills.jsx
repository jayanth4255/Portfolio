import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills.jsx';

const Skills = () => {
    const categories = [
        { name: 'Frontend', skills: skills.frontend, color: 'from-nebula-purple to-orbit-glow' },
        { name: 'Backend', skills: skills.backend, color: 'from-orbit-glow to-nebula-pink' },
        { name: 'Tools', skills: skills.tools, color: 'from-nebula-pink to-nebula-purple' }
    ];

    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
            {/* Cosmic Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orbit-glow/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-star-white/70">Technologies I work with</p>
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-16">
                    {categories.map((category, catIndex) => (
                        <div key={category.name}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl font-display font-bold mb-8 text-center md:text-left"
                            >
                                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {category.name}
                                </span>
                            </motion.h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                        className="relative glass-morphism rounded-2xl p-6 text-center group cursor-pointer border border-white/10 hover:border-orbit-glow/50 transition-all duration-300"
                                    >
                                        {/* Cosmic Glow Effect on Hover */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-nebula-purple to-orbit-glow rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                                                {skill.icon}
                                            </div>
                                            <h4 className="font-semibold mb-2 group-hover:text-orbit-glow transition-colors">
                                                {skill.name}
                                            </h4>
                                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className={`h-full bg-gradient-to-r ${category.color} shadow-lg`}
                                                    style={{
                                                        boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                                                    }}
                                                />
                                            </div>
                                            <p className="text-xs text-star-white/60 mt-2 font-medium">{skill.level}%</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
