import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <main className="bg-deep-space min-h-screen text-star-white selection:bg-nebula-purple/30">
            {showWelcome ? (
                <WelcomeScreen onComplete={() => setShowWelcome(false)} />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Academics />
                    <Experience />
                    <Skills />
                    <Certifications />
                    <Projects />
                    <Contact />
                    <Footer />
                </>
            )}
        </main>
    );
};

export default App;
