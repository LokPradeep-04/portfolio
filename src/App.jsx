import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#0f1016] min-h-screen text-white relative font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen mix-blend-color-dodge"></div>
         <div className="absolute top-[40%] left-[-20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen mix-blend-color-dodge"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen mix-blend-color-dodge"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
