import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] mb-20 -z-10 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-purple-400 tracking-[0.3em] uppercase mb-4">Discover</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
            About Me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full neon-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

            <p>
              I am a passionate <span className="text-white font-semibold neon-text">MERN Stack Developer</span> driven by the desire to build highly scalable, real-world web applications. My journey in web development is fueled by a love for solving complex problems and turning innovative ideas into intuitive digital experiences.
            </p>
            <p>
              With expertise in creating seamless user interfaces and robust backend architectures, I thrive in environments where performance and design converge. Whether it's integrating <span className="text-white font-semibold">AI chatbots</span> or building dynamic dashboards, I focus on delivering impact.
            </p>
            
            <div className="flex gap-4 pt-6">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-white font-medium hover:bg-white/10 glass-card-hover text-center w-full md:w-auto">
                Let's collaborate
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <AboutCard
              icon={<Terminal className="w-8 h-8 text-blue-400" />}
              title="Modern Tech"
              desc="Latest frameworks & tools to ensure peak performance."
            />
             <AboutCard
              icon={<Zap className="w-8 h-8 text-purple-400" />}
              title="Fast & Fluid"
              desc="Smooth animations and highly responsive layouts."
            />
             <AboutCard
              icon={<Lightbulb className="w-8 h-8 text-cyan-400" />}
              title="AI Integration"
              desc="Seamlessly blending AI models into web applications."
            />
             <AboutCard
              icon={<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-blue-400">100%</div>}
              title="Commitment"
              desc="Dedicated to writing clean, maintainable code."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, desc }) => (
  <div className="glass-card p-6 rounded-2xl glass-card-hover group flex flex-col items-start gap-4">
    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-gray-100 mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

export default About;
