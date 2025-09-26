import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const menuItems = [
    { 
      name: 'HOME', 
      icon: Home, 
      href: '/',
      description: 'System Dashboard',
      color: '#00ffff'
    },
    { 
      name: 'SERVICES', 
      icon: Settings, 
      href: '/service',
      description: 'Core Functions',
      color: '#ff00ff'
    },
    { 
      name: 'SOLUTIONS', 
      icon: Zap, 
      href: '/solutions',
      description: 'Tech Solutions',
      color: '#00ff80'
    },
    { 
      name: 'PRODUCTS', 
      icon: Package, 
      href: '/products',
      description: 'Hardware Catalog',
      color: '#ff8000'
    },
    { 
      name: 'ABOUT', 
      icon: Bot, 
      href: '/company/about',
      description: 'System Info',
      color: '#80ff00'
    },
    { 
      name: 'CONTACT', 
      icon: Phone, 
      href: '/contact',
      description: 'Communication',
      color: '#ffff00'
    },
  ];

  const handleItemClick = (href) => {
    window.location.href = href;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40
            }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-lg border-r border-cyan-400/30 z-50 overflow-hidden"
          >
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

            {/* Menu Items */}
            <nav className="flex-1 py-6">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => handleItemClick(item.href)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
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
                      
                      <ChevronRight 
                        className="w-4 h-4" 
                        style={{ color: isActive ? item.color : '#666666' }}
                      />
                    </motion.button>
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
              
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-xs font-mono text-cyan-400"
              >
                v2.0.25 | BUILD 2024.12
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;