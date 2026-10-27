import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Academics from './sections/Academics';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Academics />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
