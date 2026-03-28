import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Eye } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

const Hero = () => {
  const RESUME_VIEW_LINK = "https://drive.google.com/file/d/1Jw61iHrF6B-8p969q04Xo0SfCh3FKDly/view";
  const RESUME_DOWNLOAD_LINK = "https://drive.google.com/uc?export=download&id=1Jw61iHrF6B-8p969q04Xo0SfCh3FKDly";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-8 p-1 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 relative"
        >
          <div className="w-full h-full rounded-full bg-[#0f1016] flex items-center justify-center overflow-hidden">
             <span className="text-4xl md:text-5xl font-bold text-white">LP</span>
          </div>
          <div className="absolute inset-0 rounded-full neon-border rounded-full animate-pulse opacity-50"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 font-mono tracking-widest text-sm md:text-base uppercase mb-4"
        >
          Welcome to my universe
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          Hi, I'm <span className="gradient-text neon-text">Lok Pradeep</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 font-light"
        >
          MERN Stack Developer | Building <span className="text-white font-medium">AI-Driven</span> & <span className="text-white font-medium">Real-World</span> Applications
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-white text-[#0f1016] font-bold rounded-full overflow-hidden hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 backdrop-blur-sm neon-border hover:border-purple-500/50 transition-all duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
            
            <div className="flex items-center gap-3">
              <a 
                href={RESUME_VIEW_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-4 border border-purple-500/30 text-purple-400 font-medium rounded-full hover:bg-purple-500/10 backdrop-blur-sm neon-border transition-all duration-300 flex items-center gap-2"
                title="View Resume"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
              <a 
                href={RESUME_DOWNLOAD_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 border border-blue-500/30 text-blue-400 font-medium rounded-full hover:bg-blue-500/10 backdrop-blur-sm neon-border transition-all duration-300 flex items-center justify-center"
                title="Download Resume"
              >
                <Download className="w-5 h-5 mr-1.5" /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-6"
        >
          <SocialIcon href="https://github.com/LokPradeep-04" icon={<Github />} label="GitHub Profile" />
          <SocialIcon href="https://www.linkedin.com/in/kuruba-lok-pradeep" icon={<Linkedin />} label="LinkedIn Profile" />
          <SocialIcon href="mailto:kurubapradeep44@gmail.com" icon={<Mail />} label="Send Email" />
        </motion.div>
      </div>

      {/* Scroll indicator overlay at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-0.5 h-12 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-purple-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white glass-card-hover group"
  >
    <div className="group-hover:neon-text transition-all duration-300">
      {icon}
    </div>
  </a>
);

export default Hero;
