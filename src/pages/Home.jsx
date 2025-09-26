import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot,
  Cpu,
  Cog,
  Wrench,
  ChevronRight,
  Zap,
  Settings,
  Hexagon,
  Triangle,
  ArrowRight,
  Play,
  Star,
  Activity
} from 'lucide-react';

// Enhanced Particle System with Neon Effects
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        pulse: Math.random() * 2 + 1,
      }));
    };

    setParticles(generateParticles());

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + (typeof window !== 'undefined' ? window.innerWidth : 1200)) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: (particle.y + particle.speedY + (typeof window !== 'undefined' ? window.innerHeight : 800)) % (typeof window !== 'undefined' ? window.innerHeight : 800),
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.pulse,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Circuit Pattern with Animated Lines
const CircuitPattern = () => {
  return (
    <div className="fixed inset-0 opacity-15 z-0">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect width="120" height="120" fill="none"/>
            <path d="M10 10h100v100h-100z" fill="none" stroke="#00ffff" strokeWidth="1"/>
            <circle cx="10" cy="10" r="3" fill="#00ffff">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="110" cy="10" r="3" fill="#ff00ff">
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="10" cy="110" r="3" fill="#00ffff">
              <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="110" cy="110" r="3" fill="#ff00ff">
              <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <path d="M30 10v30h50v-30M10 40h30v40h-30" fill="none" stroke="#00ffff" strokeWidth="1"/>
            <path d="M80 40h30v40h-30M40 80v30h30v-30" fill="none" stroke="#ff00ff" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};

// Futuristic Service Card with Enhanced Animations
const ServiceCard = ({ title, icon: Icon, price, description, delay, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardColors = [
    { primary: '#00ffff', secondary: '#0080ff' },
    { primary: '#ff00ff', secondary: '#ff0080' },
    { primary: '#00ff80', secondary: '#80ff00' },
    { primary: '#ff8000', secondary: '#ffff00' },
  ];

  const color = cardColors[index % cardColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10, 
        z: 50,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div className="relative bg-black/80 border rounded-2xl p-6 overflow-hidden backdrop-blur-sm">
        {/* Animated Border */}
        <motion.div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(45deg, ${color.primary}40, ${color.secondary}40, ${color.primary}40)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner Content Container */}
        <div className="relative z-10 bg-black/60 rounded-xl p-4 border border-white/10">
          {/* Icon with Rotation Animation */}
          <motion.div
            animate={{ 
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
              boxShadow: `0 0 20px ${color.primary}50`,
            }}
          >
            <Icon className="w-8 h-8 text-black font-bold" />
            
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2"
              style={{ borderColor: color.primary }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <motion.span 
              className="font-bold text-lg font-mono"
              style={{ color: color.primary }}
              animate={{
                textShadow: isHovered ? `0 0 10px ${color.primary}` : 'none',
              }}
            >
              {price}
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 rounded-lg text-sm font-bold text-black transition-all duration-300 flex items-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
                boxShadow: `0 0 15px ${color.primary}30`,
              }}
            >
              EXPLORE
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-2xl flex items-center justify-center backdrop-blur-sm z-20"
              style={{
                background: `linear-gradient(135deg, ${color.primary}20, ${color.secondary}20)`,
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                className="text-center"
              >
                <Bot className="w-16 h-16 mx-auto mb-4" style={{ color: color.primary }} />
                <p className="text-white font-bold text-lg font-mono">FUTURE TECH</p>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-t-transparent rounded-full mx-auto mt-2"
                  style={{ borderColor: color.primary }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Floating Geometric Shapes
const FloatingShapes = () => {
  const shapes = [
    { Icon: Hexagon, delay: 0, duration: 8 },
    { Icon: Triangle, delay: 2, duration: 10 },
    { Icon: Settings, delay: 4, duration: 12 },
    { Icon: Zap, delay: 6, duration: 6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {shapes.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${30 + (index * 15)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon 
            className="w-12 h-12 text-cyan-400 opacity-20" 
            style={{
              filter: 'drop-shadow(0 0 10px #00ffff40)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: Bot,
      price: "₹1699",
      description: "Advanced AI systems with neural networks, deep learning algorithms, and cognitive computing solutions for next-gen automation."
    },
    {
      title: "MACHINE LEARNING",
      icon: Cpu,
      price: "₹1699", 
      description: "Comprehensive ML frameworks with predictive analytics, pattern recognition, and intelligent data processing capabilities."
    },
    {
      title: "ROBOTICS AUTOMATION",
      icon: Cog,
      price: "₹1299",
      description: "Cutting-edge robotic systems with autonomous navigation, precision control, and adaptive learning mechanisms."
    },
    {
      title: "INDUSTRIAL IoT",
      icon: Wrench,
      price: "₹1999",
      description: "Smart industrial solutions with real-time monitoring, predictive maintenance, and seamless connectivity protocols."
    }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Background Effects */}
      <CircuitPattern />
      <ParticleSystem />
      <FloatingShapes />
      
      {/* Cyberpunk Grid Overlay */}
      <div 
        className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-24 left-6 right-6 flex justify-between items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-black/60 backdrop-blur-sm rounded-lg p-3"
          >
            <span>STATUS: ONLINE</span>
            <span>TIME: {currentTime.toLocaleTimeString()}</span>
            <span>USERS: 50K+ ACTIVE</span>
          </motion.div>

          {/* Rotating Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-96 h-96 border border-cyan-400/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 border border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border border-pink-500/20 rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            className="relative z-20 max-w-6xl"
          >
            {/* Main Title */}
            <motion.h1 
              className="text-4xl md:text-8xl font-bold mb-6 font-mono tracking-wider"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80, #ff8000)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 50px rgba(0,255,255,0.5)',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ADDVERB
            </motion.h1>
            
            {/* Glitch Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mb-8"
            >
              <motion.p
                className="text-xl md:text-4xl text-white mb-2 font-mono"
                animate={{
                  textShadow: [
                    '0 0 10px #00ffff',
                    '0 0 20px #ff00ff',
                    '0 0 10px #00ffff',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ASIA'S LARGEST ROBOTICS FESTIVAL
              </motion.p>
              
              {/* Typing Animation */}
              <motion.p
                className="text-lg md:text-xl text-cyan-400 font-mono"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, delay: 1 }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderRight: '2px solid #00ffff' }}
              >
                &gt; Initializing future technologies...
              </motion.p>
            </motion.div>

            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { text: "ROBOTICS", color: "#00ffff" },
                { text: "AUTOMATION", color: "#ff00ff" },
                { text: "AI/ML", color: "#00ff80" },
                { text: "IoT", color: "#ff8000" }
              ].map((tag, index) => (
                <motion.span
                  key={tag.text}
                  className="px-6 py-3 border rounded-full font-mono font-bold text-sm tracking-widest cursor-pointer"
                  style={{
                    borderColor: tag.color,
                    color: tag.color,
                    background: `${tag.color}10`,
                    boxShadow: `0 0 15px ${tag.color}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 25px ${tag.color}60`,
                  }}
                  animate={{
                    borderColor: [tag.color, `${tag.color}80`, tag.color],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {tag.text}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-4 text-lg font-bold font-mono tracking-wider text-black rounded-2xl overflow-hidden group"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                boxShadow: '0 0 30px rgba(0,255,255,0.5)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5" />
                ENTER THE FUTURE
                <Zap className="w-5 h-5" />
              </span>
              
              {/* Button Animation Overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-7xl font-bold mb-6 font-mono tracking-wider"
              style={{
                background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0,255,255,0.3)',
              }}
            >
              QUANTUM WORKSHOPS
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg max-w-3xl mx-auto font-mono leading-relaxed"
              animate={{
                color: ['#888', '#00ffff', '#888'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &gt; Experience cutting-edge technology workshops designed for the next generation of innovators
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.3}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-6 relative">
          {/* Neon Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center, #00ffff20, transparent 70%)',
            }}
          />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "50K+", label: "PARTICIPANTS", icon: Bot },
                { number: "200+", label: "WORKSHOPS", icon: Cog },
                { number: "100+", label: "COMPANIES", icon: Settings },
                { number: "25+", label: "COUNTRIES", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                  className="group cursor-pointer relative"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-black/40"
                    whileHover={{
                      borderColor: '#00ffff',
                      boxShadow: '0 0 30px rgba(0,255,255,0.3)',
                    }}
                  />
                  
                  <div className="relative z-10 p-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 mx-auto mb-4 text-cyan-400"
                    >
                      <stat.icon className="w-full h-full" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-3xl md:text-5xl font-bold mb-2 font-mono"
                      style={{
                        background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-400 font-semibold font-mono tracking-wide text-sm">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h3 
              className="text-2xl md:text-4xl font-bold mb-6 font-mono"
              style={{
                background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ff80)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              READY TO BUILD THE FUTURE?
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-8 font-mono text-lg"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              &gt; Join thousands of innovators shaping tomorrow's technology
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.9 }}
              className="px-10 py-4 font-bold font-mono text-black rounded-xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                boxShadow: '0 0 40px rgba(0,255,255,0.4)',
              }}
            >
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                START YOUR JOURNEY
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}