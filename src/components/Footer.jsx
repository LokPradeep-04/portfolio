import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0F] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="flex items-center gap-2 group">
            <Code2 className="w-6 h-6 text-purple-500 group-hover:neon-text transition-all duration-300" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 tracking-wide">
              LOK.DEV
            </span>
          </a>
          <p className="text-gray-500 text-sm">Building AI-Driven Applications</p>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white glass-card-hover group border border-purple-500/20"
        >
          <ArrowUp className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
        </motion.button>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right font-mono">
          © {new Date().getFullYear()} Lok Pradeep.<br className="hidden md:block"/> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
