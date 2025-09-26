import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Settings,
  Package,
  Bot,
  Phone,
  X,
  Zap,
  Globe,
  ChevronRight,
  Activity,
  Cpu
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [systemTime, setSystemTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { 
      name: 'HOME', 
      icon: Home, 
      href: '#home',
      description: 'System Dashboard',
      color: '#00ffff'
    },
    { 
      name: 'SERVICES', 
      icon: Settings, 
      href: '#services',
      description: 'Core Functions',
      color: '#ff00ff'
    },
    { 
      name: 'SOLUTIONS', 
      icon: Zap, 
      href: '#solutions',
      description: 'Tech Solutions',
      color: '#00ff80'
    },
    { 
      name: 'PRODUCTS', 
      icon: Package, 
      href: '#products',
      description: 'Hardware Catalog',
      color: '#ff8000'
    },
    { 
      name: 'INDUSTRY', 
      icon: Cpu, 
      href: '#industry',
      description: 'Sector Analysis',
      color: '#8000ff'
    },
    { 
      name: 'NEWSROOM', 
      icon: Globe, 
      href: '#newsroom',
      description: 'Data Feed',
      color: '#ff0080'
    },
    { 
      name: 'ABOUT', 
      icon: Bot, 
      href: '#about',
      description: 'System Info',
      color: '#80ff00'
    },
    { 
      name: 'CONTACT', 
      icon: Phone, 
      href: '#contact',
      description: 'Communication',
      color: '#ffff00'
    },
  ];

  const handleItemClick = (href) => {
    // Simulate navigation
    window.location.hash = href;
    onClose();
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: {
      x: -50,
      opacity: 0
    },
    open: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-lg border-r border-cyan-400/30 z-50 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern id="mobileCircuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect width="60" height="60" fill="none"/>
                    <path d="M5 5h50v50h-50z" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
                    <circle cx="5" cy="5" r="2" fill="#00ffff">
                      <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="55" cy="55" r="2" fill="#ff00ff">
                      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mobileCircuit)"/>
              </svg>
            </div>

            {/* Header */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-6 border-b border-cyan-400/30"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                </motion.div>
                <div>
                  <h2 className="text-lg font-bold font-mono text-white tracking-wider">ADDVERB</h2>
                  <p className="text-xs text-cyan-400 font-mono">NAVIGATION SYSTEM</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-white border border-cyan-400/50 rounded-lg bg-black/60"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-3 border-b border-cyan-400/20"
            >
              <div className="flex justify-between items-center text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="text-cyan-400">{systemTime.toLocaleTimeString()}</div>
                <div className="flex items-center space-x-1">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-400">ACTIVE</span>
                </div>
              </div>
            </motion.div>

            {/* Menu Items */}
            <nav className="flex-1 py-6">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="relative"
                  >
                    <motion.button
                      onClick={() => handleItemClick(item.href)}
                      onHoverStart={() => setActiveIndex(index)}
                      onHoverEnd={() => setActiveIndex(-1)}
                      className="w-full flex items-center justify-between p-4 mx-4 my-1 rounded-lg font-mono font-semibold transition-all duration-300 group"
                      style={{
                        background: isActive ? `${item.color}15` : 'transparent',
                        borderLeft: isActive ? `3px solid ${item.color}` : '3px solid transparent',
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          animate={isActive ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="p-2 rounded-lg"
                          style={{
                            background: `${item.color}20`,
                            boxShadow: isActive ? `0 0 15px ${item.color}40` : 'none',
                          }}
                        >
                          <Icon 
                            className="w-5 h-5" 
                            style={{ color: isActive ? item.color : '#ffffff' }}
                          />
                        </motion.div>
                        
                        <div className="text-left">
                          <div 
                            className="text-sm font-bold tracking-wider"
                            style={{ color: isActive ? item.color : '#ffffff' }}
                          >
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 font-normal">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={isActive ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight 
                          className="w-4 h-4" 
                          style={{ color: isActive ? item.color : '#666666' }}
                        />
                      </motion.div>
                    </motion.button>
                    
                    {/* Item glow effect */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                          style={{ 
                            background: `linear-gradient(to bottom, ${item.color}, ${item.color}80)`,
                            boxShadow: `0 0 10px ${item.color}`,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border-t border-cyan-400/30 p-6"
            >
              <div className="text-center text-xs font-mono text-gray-400 mb-3">
                ADDVERB TECHNOLOGIES
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {[
                  { name: 'LinkedIn', color: '#0077b5' },
                  { name: 'Twitter', color: '#1da1f2' },
                  { name: 'GitHub', color: '#333' },
                  { name: 'YouTube', color: '#ff0000' },
                ].map((social, index) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors"
                    style={{
                      borderColor: social.color,
                      color: social.color,
                    }}
                  >
                    {social.name.charAt(0)}
                  </motion.button>
                ))}
              </div>
              
              {/* Version Info */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-xs font-mono text-cyan-400 mt-4"
              >
                v2.0.25 | BUILD 2024.12
              </motion.div>
            </motion.div>

            {/* Animated Side Accent */}
            <motion.div
              className="absolute right-0 top-1/4 bottom-1/4 w-1"
              style={{
                background: 'linear-gradient(to bottom, #00ffff, #ff00ff, #00ffff)',
                backgroundSize: '100% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;