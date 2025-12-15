import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

// Mock responses for the chatbot (no API needed)
const getMockResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm the AI assistant for this portfolio. Feel free to ask me about the developer's skills, projects, or experience!";
    }

    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
        return "The developer specializes in React, Next.js, Three.js, TypeScript, and Framer Motion. They're particularly skilled in creating immersive 3D web experiences and modern UI/UX design.";
    }

    if (message.includes('project')) {
        return "Some featured projects include Quantum Dashboard (3D data visualization), Stellar Commerce (e-commerce with AR), and Cosmic UI Kit (premium component library). Each showcases expertise in modern web technologies!";
    }

    if (message.includes('experience') || message.includes('work')) {
        return "The developer has 3+ years of experience in frontend development, with 15+ completed projects and 100% client satisfaction. They focus on creating pixel-perfect, performant web applications.";
    }

    if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
        return "You can reach out via the contact form on this page, or email directly at hello@portfolio.com. Looking forward to hearing from you!";
    }

    // Default response
    return "That's a great question! I can help you learn about the developer's skills, projects, experience, and how to get in touch. What would you like to know?";
};

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello traveler! Welcome to my portfolio. I\'m here to help you explore my work and answer any questions you might have.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        // Simulate AI thinking delay
        setTimeout(() => {
            const response = getMockResponse(userMessage);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsLoading(false);
        }, 800);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-nebula-purple to-orbit-glow shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
                <div className="absolute inset-0 rounded-full bg-orbit-glow animate-pulse-glow opacity-50" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-28 right-8 z-50 w-96 h-[500px] glass-morphism rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-orbit-glow/30"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-nebula-purple to-orbit-glow p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-white">AI Assistant</h3>
                                <p className="text-xs text-white/80">Always here to help</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                                                ? 'bg-gradient-to-r from-nebula-purple to-orbit-glow text-white'
                                                : 'bg-white/10 text-star-white'
                                            }`}
                                    >
                                        <p className="text-sm">{message.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-orbit-glow rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 bg-orbit-glow rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 bg-orbit-glow rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={sendMessage} className="p-4 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-orbit-glow transition-colors"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-nebula-purple to-orbit-glow flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} className="text-white" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
