import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const FloatingCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={cn(
                "glass-morphism rounded-2xl p-8 shadow-2xl hover:shadow-orbit-glow/20 transition-all duration-300",
                "border-2 border-transparent hover:border-orbit-glow/30",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default FloatingCard;
