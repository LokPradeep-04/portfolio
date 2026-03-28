import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-purple-400 tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
            Let's Build Together
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h4 className="text-3xl font-bold text-white">Connect with me.</h4>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing opportunities, collaborations, or innovative ideas. Feel free to reach out through any of the platforms below.
            </p>

            <div className="space-y-6">
              <ContactLink
                icon={<Mail className="w-6 h-6 text-purple-400" />}
                title="Email"
                value="kurubapradeep44@gmail.com"
                href="mailto:kurubapradeep44@gmail.com"
              />
              <ContactLink
                icon={<Github className="w-6 h-6 text-gray-400" />}
                title="GitHub"
                value="LokPradeep-04"
                href="https://github.com/LokPradeep-04"
              />
              <ContactLink
                icon={<Linkedin className="w-6 h-6 text-blue-400" />}
                title="LinkedIn"
                value="kuruba-lok-pradeep"
                href="https://www.linkedin.com/in/kuruba-lok-pradeep"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-xl bg-[#0f1016] flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
      {icon}
    </div>
    <div className="text-left">
      <h5 className="text-gray-400 text-sm font-mono mb-1">{title}</h5>
      <p className="text-white font-medium group-hover:neon-text transition-all break-all">
        {value}
      </p>
    </div>
  </a>
);

export default Contact;