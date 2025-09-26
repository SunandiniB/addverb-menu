import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Settings, Globe, Menu, X, Zap, Home, Package, Phone } from 'lucide-react';

// Enhanced Header Component
const Header = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services', icon: Settings },
    { name: 'About Us', href: '#about', icon: Bot },
    { name: 'Solutions', href: '#solutions', icon: Zap },
    { name: 'Newsroom', href: '#newsroom', icon: Globe },
    { name: 'Products', href: '#products', icon: Settings },
    { name: 'Industry', href: '#industry', icon: Settings },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-cyan-400/30' 
          : 'bg-black/60 backdrop-blur-md'
      }`}
    >
      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        animate={{
          width: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <motion.span
              className="font-mono text-2xl font-bold tracking-wider"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(0,255,255,0.5)',
              }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(0,255,255,0.5)',
                  '0 0 30px rgba(255,0,255,0.5)',
                  '0 0 20px rgba(0,255,255,0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ADDVERB
            </motion.span>
          </motion.div>
          
          {/* Hover effect */}
          <motion.div
            className="absolute -inset-2 border border-cyan-400/50 rounded-lg opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <a
                  href={item.href}
                  className="relative group flex items-center space-x-2 px-4 py-2 rounded-lg font-mono font-semibold tracking-wide transition-all duration-300 text-white hover:text-cyan-400"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  <motion.div
                    animate={activeItem === item.name ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <span>{item.name}</span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeItem === item.name ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            );
          })}
          
          {/* Contact CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 font-mono font-bold text-black rounded-lg overflow-hidden group"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              boxShadow: '0 0 20px rgba(0,255,255,0.3)',
            }}
          >
            <span className="relative z-10">CONTACT</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative p-2 text-white border border-cyan-400/50 rounded-lg bg-black/60 backdrop-blur-sm"
          onClick={onMenuClick}
        >
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Menu className="w-6 h-6" />
          </motion.div>
          
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 border border-cyan-400/50 rounded-lg"
            animate={{
              boxShadow: [
                '0 0 5px rgba(0,255,255,0.3)',
                '0 0 15px rgba(0,255,255,0.6)',
                '0 0 5px rgba(0,255,255,0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      </div>

      {/* System Status Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-full left-6 mt-2 text-xs font-mono text-cyan-400 bg-black/80 px-3 py-1 rounded border border-cyan-400/30"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ● SYSTEM ONLINE
        </motion.span>
      </motion.div>
    </motion.header>
  );
};

// Enhanced Mobile Menu Component
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
    window.location.hash = href;
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

// Main Layout Component
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Grid Pattern */}
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

      {/* Header */}
      <Header onMenuClick={openMenu} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Scroll Indicator */}
      <motion.div
        className="fixed right-6 bottom-6 w-12 h-12 border-2 border-cyan-400/50 rounded-full flex items-center justify-center cursor-pointer z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-cyan-400"
        >
          ↑
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Layout;