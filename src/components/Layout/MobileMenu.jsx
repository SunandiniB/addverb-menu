import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ChevronDown, 
  Settings, 
  Robot, 
  Home, 
  Newspaper,
  Building,
  Headphones,
  ExternalLink,
  Zap
} from 'lucide-react';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Menu data structure
  const menuData = {
    industry: {
      title: 'Industry',
      icon: Settings,
      items: [
        { name: 'Automotive and Tyre', path: '/industry/automotive', emoji: '🚗' },
        { name: 'Consumer Goods', path: '/industry/consumer-goods', emoji: '📦' },
        { name: 'Grocery', path: '/industry/grocery', emoji: '🛒' },
        { name: 'Solar and Battery', path: '/industry/solar', emoji: '☀️' },
        { name: 'Chemicals and Petrochemicals', path: '/industry/chemicals', emoji: '🧪' },
        { name: 'E-Commerce', path: '/industry/ecommerce', emoji: '🛍️' },
        { name: 'Pharmaceuticals', path: '/industry/pharma', emoji: '💊' },
        { name: 'Third Party Logistics', path: '/industry/logistics', emoji: '🚚' },
        { name: 'Cold Storage', path: '/industry/cold-storage', emoji: '❄️' },
        { name: 'Fashion', path: '/industry/fashion', emoji: '👕' },
        { name: 'Semiconductors', path: '/industry/semiconductors', emoji: '💾' }
      ]
    },
    solutions: {
      title: 'Solutions',
      icon: Zap,
      subsections: [
        {
          title: 'Functionality',
          items: [
            { name: 'Material Movement', path: '/solutions/material-movement', emoji: '↔️' },
            { name: 'Sortation', path: '/solutions/sortation', emoji: '📊' },
            { name: 'Picking', path: '/solutions/picking', emoji: '🤏' },
            { name: 'Storage', path: '/solutions/storage', emoji: '📚' },
            { name: 'Reverse Logistics', path: '/solutions/reverse-logistics', emoji: '🔄' }
          ]
        }
      ]
    },
    products: {
      title: 'Products',
      icon: Robot,
      subsections: [
        {
          title: 'Mobile Robots',
          items: [
            { name: 'Autonomous Forklift', path: '/products/autonomous-forklift', emoji: '🏗️' },
            { name: 'Autonomous Mobile Robot', path: '/products/mobile-robot', emoji: '🤖' },
            { name: 'Multi-Carton Picking Robot', path: '/products/multi-carton-picking', emoji: '📦' },
            { name: 'Rail Guided Vehicle', path: '/products/rail-guided-vehicle', emoji: '🚊' }
          ]
        },
        {
          title: 'Sorting Robots',
          items: [
            { name: 'Robotic Sorter', path: '/products/robotic-sorter', emoji: '🔄' },
            { name: 'Vertical Sortation Robot', path: '/products/vertical-sortation', emoji: '📈' }
          ]
        },
        {
          title: 'ASRS',
          items: [
            { name: '4 Way Pallet Shuttle', path: '/products/pallet-shuttle', emoji: '🚀' },
            { name: 'Mother-Child Shuttle', path: '/products/mother-child-shuttle', emoji: '👨‍👧' },
            { name: 'Pallet Shuttle', path: '/products/pallet-shuttle-basic', emoji: '📋' },
            { name: 'Crane ASRS', path: '/products/crane-asrs', emoji: '🏗️' },
            { name: 'Carton Shuttle', path: '/products/carton-shuttle', emoji: '📦' },
            { name: 'Multi Level Shuttle', path: '/products/multi-level-shuttle', emoji: '🏢' }
          ]
        },
        {
          title: 'Software',
          items: [
            { name: 'Warehouse Management System', path: '/products/wms', emoji: '💾' },
            { name: 'Warehouse Execution System', path: '/products/wes', emoji: '⚙️' },
            { name: 'Warehouse Control System', path: '/products/wcs', emoji: '🎛️' },
            { name: 'Fleet Management System', path: '/products/fleet-management', emoji: '🚛' }
          ]
        }
      ]
    },
    service: {
      title: 'Service',
      icon: Home,
      path: '/service'
    },
    newsroom: {
      title: 'News Room',
      icon: Newspaper,
      items: [
        { name: 'Case Studies', path: '/news/case-studies', emoji: '📋' },
        { name: 'Blogs', path: '/news/blogs', emoji: '📝' },
        { name: 'Whitepapers', path: '/news/whitepapers', emoji: '📄' },
        { name: 'Events', path: '/news/events', emoji: '📅' },
        { name: 'News', path: '/news/news', emoji: '📰' },
        { name: 'Podcasts', path: '/news/podcasts', emoji: '🎧' },
        { name: 'Sustainability', path: '/news/sustainability', emoji: '🌱' }
      ]
    },
    company: {
      title: 'Company',
      icon: Building,
      items: [
        { name: 'Careers', path: '/company/careers', emoji: '💼' },
        { name: 'About Us', path: '/company/about', emoji: 'ℹ️' },
        { name: 'Partners', path: '/company/partners', emoji: '🤝' }
      ]
    }
  };

  // Animation variants
  const overlayVariants = {
    closed: { 
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    open: { 
      opacity: 1,
      backdropFilter: 'blur(10px)',
      transition: { duration: 0.3 }
    }
  };

  const menuVariants = {
    closed: { 
      x: '100%',
      transition: { 
        type: 'tween', 
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    open: { 
      x: 0,
      transition: { 
        type: 'tween', 
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  const sectionContentVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Sound effects using Web Audio API
  const playSound = (frequency = 800, duration = 0.1) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      // Sound not supported
    }
  };

  // Handle menu item click
  const handleItemClick = (path) => {
    playSound(1000, 0.08);
    navigate(path);
    onClose();
  };

  // Handle section toggle
  const toggleSection = (sectionKey) => {
    playSound(600, 0.05);
    setActiveSection(activeSection === sectionKey ? null : sectionKey);
  };

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems([]);
      return;
    }

    const results = [];
    Object.entries(menuData).forEach(([key, section]) => {
      if (section.items) {
        section.items.forEach(item => {
          if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({ ...item, section: section.title });
          }
        });
      }
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          subsection.items.forEach(item => {
            if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
              results.push({ ...item, section: section.title, subsection: subsection.title });
            }
          });
        });
      }
    });

    setFilteredItems(results);
  }, [searchQuery]);

  // Focus management
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Render menu section
  const renderSection = (sectionKey, section, index) => {
    const Icon = section.icon;
    const isActive = activeSection === sectionKey;

    if (section.path) {
      // Single link section
      return (
        <motion.div
          key={sectionKey}
          variants={itemVariants}
          custom={index}
          className="mb-2"
        >
          <motion.button
            onClick={() => handleItemClick(section.path)}
            className="w-full flex items-center p-4 bg-black/20 border border-slate-600 rounded-xl text-white font-medium text-lg hover:bg-red-600/20 hover:border-red-500 transition-all duration-300 group"
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center w-8 h-8 mr-4 text-red-500 group-hover:scale-110 transition-transform">
              <Icon size={20} />
            </div>
            <span className="flex-1 text-left">{section.title}</span>
            <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
          </motion.button>
        </motion.div>
      );
    }

    // Expandable section
    return (
      <motion.div
        key={sectionKey}
        variants={itemVariants}
        custom={index}
        className="mb-2"
      >
        <motion.button
          onClick={() => toggleSection(sectionKey)}
          className={clsx(
            "w-full flex items-center p-4 border rounded-xl font-medium text-lg transition-all duration-300 group",
            isActive 
              ? "bg-red-600/20 border-red-500 text-white" 
              : "bg-black/20 border-slate-600 text-white hover:bg-red-600/10 hover:border-red-500"
          )}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center w-8 h-8 mr-4 text-red-500 group-hover:scale-110 transition-transform">
            <motion.div
              animate={{ rotate: isActive ? 360 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Icon size={20} />
            </motion.div>
          </div>
          <span className="flex-1 text-left">{section.title}</span>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-400"
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isActive && (
            <motion.div
              variants={sectionContentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden"
            >
              <div className="mt-2 p-4 bg-black/40 rounded-b-xl border border-slate-600 border-t-0">
                {section.subsections ? (
                  section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-6 last:mb-0">
                      <h4 className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-3 pb-1 border-b border-red-600/30">
                        {subsection.title}
                      </h4>
                      {subsection.items.map((item, itemIndex) => (
                        <MenuItem key={itemIndex} item={item} onItemClick={handleItemClick} />
                      ))}
                    </div>
                  ))
                ) : (
                  section.items?.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} item={item} onItemClick={handleItemClick} />
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // Menu item component
  const MenuItem = ({ item, onItemClick }) => (
    <motion.button
      onClick={() => onItemClick(item.path)}
      className="w-full flex items-center p-3 rounded-lg text-white hover:bg-red-600/10 transition-all duration-200 group mb-1 last:mb-0"
      whileHover={{ x: 8, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-lg mr-3 group-hover:scale-125 transition-transform">
        {item.emoji}
      </span>
      <span className="flex-1 text-left text-base">{item.name}</span>
      <div className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300" />
    </motion.button>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Circuit pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #ef4444 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, #ef4444 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'circuitFlow 20s linear infinite'
              }}
            />
          </div>

          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 w-full max-w-md h-full bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl border-l-2 border-red-500 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-black/40 border-b border-slate-600 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-red-500 font-bold text-xl tracking-wider"
              >
                ADDVERB
              </motion.div>
              
              <motion.button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 bg-red-600/20 border border-red-500 rounded-lg hover:bg-red-600 transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
              >
                <X size={20} className="text-white" />
              </motion.button>
            </div>

            {/* Search */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 bg-black/30 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
                />
              </motion.div>

              {/* Search Results */}
              <AnimatePresence>
                {searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 max-h-48 overflow-y-auto"
                  >
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <MenuItem item={item} onItemClick={handleItemClick} />
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 text-slate-400"
                      >
                        <div className="text-2xl mb-2">🔍</div>
                        <p>No results found for "{searchQuery}"</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Menu Navigation */}
            <div className="flex-1 px-6 pb-6 overflow-y-auto scrollbar-thin scrollbar-thumb-red-600">
              {Object.entries(menuData).map((entry, index) => 
                renderSection(entry[0], entry[1], index)
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-black/40 border-t border-slate-600">
              <div className="flex justify-center space-x-6 mb-4">
                <motion.a
                  href="#"
                  className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <Headphones size={16} />
                  <span className="text-sm">Support</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Contact</span>
                </motion.a>
              </div>
              <div className="text-center text-xs text-slate-500 uppercase tracking-wider">
                24/7 Global Robotics Support
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;