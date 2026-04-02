import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Trash2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Lok's AI assistant. Ask me about this website, his projects, or how to contact him! 🚀", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAIResponse = (userMessage) => {
    const responses = {
      about: [
        "This is Lok's personal portfolio, showcasing his work as a MERN Stack Developer. It features projects, technical skills, and contact information.",
        "You're exploring Lok's digital portfolio, built with React and Tailwind CSS to highlight his journey in web development.",
        "This website serves as a technical showcase of Lok's skills in modern web development and AI integration."
      ],
      skills: [
        "Lok specializes in the MERN stack (MongoDB, Express, React, Node.js), with expertise in Tailwind CSS, Framer Motion animations, and AI integrations.",
        "He's proficient in building full-stack applications using modern technologies like React, Node.js, and MongoDB.",
        "His technical expertise includes responsive design, animation, and building scalable web solutions."
      ],
      projects: [
        "Check out his Projects section! Notable work includes MovieVerse (movie discovery), MediCare (healthcare app), and GitHub Visualizer.",
        "His portfolio features AI-integrated applications and full-stack projects with stunning animations.",
        "Each project demonstrates clean code, performance optimization, and modern web technologies."
      ],
      experience: [
        "Lok is a MERN Stack Developer focused on building scalable, AI-driven web applications.",
        "He has experience building real-world applications with modern tech and best practices.",
        "Passionate about solving complex problems and creating intuitive digital experiences."
      ],
      contact: [
        "📧 Email: kurubapradeep44@gmail.com\n🔗 GitHub: github.com/LokPradeep-04\n💼 LinkedIn: linkedin.com/in/kuruba-lok-pradeep",
        "You can reach out via email at kurubapradeep44@gmail.com or connect on LinkedIn and GitHub!",
        "Use the Contact section at the bottom of the page to get in touch directly."
      ],
      help: [
        "You can ask me about:\n• About this Website\n• Projects\n• Experience\n• How to Contact\n\nWhat would you like to know?",
        "I can help with questions about Lok's portfolio, skills, projects, and contact information!",
        "Try asking about 'about', 'projects', 'experience', or 'contact'!"
      ]
    };

    const userMsgLower = userMessage.toLowerCase();

    for (let [keyword, responseList] of Object.entries(responses)) {
      if (userMsgLower.includes(keyword) || (keyword === 'about' && userMsgLower.includes('website'))) {
        return responseList[Math.floor(Math.random() * responseList.length)];
      }
    }

    return "I'm sorry, I can only answer questions related to Lok's portfolio, website, projects, and professional background. For other inquiries, please contact Lok directly at kurubapradeep44@gmail.com. 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const userMessage = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getAIResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 800);
  };

  const handleSuggestion = (suggestion) => {
    setMessages(prev => [...prev, { text: suggestion, isBot: false }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getAIResponse(suggestion.toLowerCase());
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 800);
  };

  const clearChat = () => {
    setMessages([
      { text: "Chat cleared! Feel free to ask me anything about Lok's portfolio. 😊", isBot: true }
    ]);
  };

  const suggestions = [
    "What is this website?",
    "Show me projects",
    "How to contact?",
    "What's your experience?"
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 cursor-pointer relative"
            >
              <span className="z-10">🤖</span>
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] glass-card bg-[#0f1016]/95 backdrop-blur-2xl rounded-2xl border border-purple-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 flex flex-col overflow-hidden will-change-transform"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={clearChat} 
                  className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative scroll-smooth">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none"></div>
              {messages.length === 1 && !isTyping && (
                <div className="space-y-3 pb-4">
                  <p className="text-xs text-gray-400 text-center">Quick suggestions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((suggestion, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleSuggestion(suggestion)}
                        className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-all"
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-2"></div>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex gap-3 ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-white/10 text-purple-400 border border-purple-500/20' : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'}`}>
                    {msg.isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm whitespace-pre-wrap ${msg.isBot ? 'bg-white/5 border border-white/5 text-gray-200 rounded-tl-sm' : 'bg-purple-600/20 border border-purple-500/30 text-white rounded-tr-sm backdrop-blur-md'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-white/10 bg-[#0f1016]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all cursor-pointer disabled:opacity-50"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
