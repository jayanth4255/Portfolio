import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-white mb-2">Let's Work Together</h2>
                        <p className="text-gray-400">Creating digital experiences that matter.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
