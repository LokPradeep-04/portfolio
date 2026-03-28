import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Database, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Zap className="w-6 h-6 text-blue-400 fill-blue-400/20" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Wrench className="w-6 h-6 text-purple-400 fill-purple-400/20" />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-cyan-400 fill-cyan-400/20" />,
    skills: ["MongoDB", "Mongoose"]
  },
  {
    category: "Tools & Others",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    skills: ["Git", "GitHub", "Postman"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-purple-500 tracking-[0.4em] uppercase mb-6 block">WHAT I KNOW</span>
          <h3 className="text-6xl md:text-8xl font-[1000] text-white tracking-tighter uppercase leading-[0.8] mb-8">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">&</span> Tools
          </h3>
          <div className="w-40 h-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, idx) => (
            <SkillCategory key={idx} data={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#12121A] p-8 md:p-10 rounded-[32px] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-500 shadow-2xl"
    >
      <div className="flex flex-col gap-6 relative z-10">
        <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          {data.icon}
        </div>
        
        <h4 className="text-2xl font-bold text-white tracking-tight">{data.category}</h4>

        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-blue-200 hover:text-white hover:border-blue-400/50 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
