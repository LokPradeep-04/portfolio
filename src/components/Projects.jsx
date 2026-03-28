import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';

const projects = [
  {
    title: "GitHub Profile Visualizer",
    desc: "A powerful tool to visually represent GitHub user data, repositories, and activity using the GitHub API.",
    tech: ["React.js", "Tailwind CSS", "GitHub API", "Chart.js"],
    live: "https://git-hub-profile-visualizer-two.vercel.app/",
    github: "https://github.com/LokPradeep-04/GitHub-Profile-Visualizer",
    glow: "purple",
    thumbnail: "github-project.png" // placeholder
  },
  {
    title: "MovieVerse",
    desc: "A fully-fledged MERN application with seamless user authentication, personalized movie recommendations, and an integrated AI Chatbot.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Google Gemini API"],
    live: "https://movies-app-gamma-one.vercel.app/",
    github: "https://github.com/LokPradeep-04/movies-app", // Assuming repo name
    glow: "blue",
    thumbnail: "movieverse.png" // placeholder
  },
  {
    title: "MediCare",
    desc: "Comprehensive healthcare platform featuring real-time doctor scheduling, patient dashboards, and an intelligent AI assistant for healthcare queries.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Google Gemini API", "Nodemailer"],
    live: "https://medicare-weld-seven.vercel.app/",
    github: "https://github.com/LokPradeep-04/medicare", // Assuming repo name
    glow: "cyan",
    thumbnail: "medicare.png" // placeholder
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-6xl md:text-8xl font-[1000] text-white tracking-tighter uppercase leading-[0.8] mb-8">
            My Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full neon-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const glowColors = {
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] border-purple-500/20",
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-blue-500/20",
    cyan: "hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-cyan-500/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`glass-card rounded-2xl overflow-hidden group flex flex-col h-full border transition-all duration-500 ${glowColors[project.glow]}`}
    >
      <div className="relative h-48 sm:h-56 bg-[#0f1016] overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Background for Thumbnail */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${
            project.glow === 'purple' ? 'from-purple-600 via-transparent to-blue-600' :
            project.glow === 'blue' ? 'from-blue-600 via-transparent to-cyan-600' :
            'from-cyan-600 via-transparent to-purple-600'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
        <MonitorPlay className="w-16 h-16 text-gray-400 opacity-50 group-hover:scale-110 transition-transform duration-500 group-hover:text-white relative z-10" />
        
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161e] directly to-transparent opacity-100 relative z-20 top-auto h-full"></div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 bg-gradient-to-b from-[#15161e] to-[#0f1016] mt-[-20px] rounded-t-2xl border-t border-white/5">
        <h4 className="text-2xl font-bold text-white mb-3 group-hover:neon-text transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 rounded-full border border-white/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            title="GitHub Repository"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <Github className="w-5 h-5" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live demo`}
            title="Live Demo"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full transition-all text-sm border border-purple-500/30 neon-border font-medium"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
