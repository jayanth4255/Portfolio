import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
