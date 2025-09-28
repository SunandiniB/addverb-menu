// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, Bot, Settings, Globe, Zap, Factory, Building, ChevronDown, Search, Phone } from 'lucide-react';

// const Header = ({ onMenuClick }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [hoverTimeout, setHoverTimeout] = useState(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     // Initial check
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Complete navigation structure with dropdowns
//   const navigationItems = [
//     {
//       name: 'Industry',
//       href: '/industry',
//       icon: Factory,
//       color: '#00ffff',
//       dropdown: [
//         { name: 'Automotive and Tyre', href: '/industry/automotiveandtyre' },
//         { name: 'Consumer Goods', href: '/industry/consumergoods' },
//         { name: 'Grocery', href: '/industry/grocery' },
//         { name: 'Solar and Battery', href: '/industry/solarandbattery' },
//         { name: 'Chemicals and Petrochemicals', href: '/industry/chemicalsandpetrochemicals' },
//         { name: 'E-Commerce', href: '/industry/ecommerce' },
//         { name: 'Pharmaceuticals', href: '/industry/pharmaceuticals' },
//         { name: 'Third Party Logistics', href: '/industry/thirdpartylogistics' },
//         { name: 'Cold Storage', href: '/industry/coldstorage' },
//         { name: 'Fashion', href: '/industry/fashion' },
//         { name: 'Semiconductors', href: '/industry/semiconductors' },
//       ]
//     },
//     {
//       name: 'Solutions',
//       href: '/solutions',
//       icon: Zap,
//       color: '#ff00ff',
//       dropdown: [
//         {
//           name: 'Functionality',
//           href: '/solutions/functionality',
//           children: [
//             { name: 'Material Movement', href: '/solutions/functionality/materialmovement' },
//             { name: 'Sortation', href: '/solutions/functionality/sortation' },
//             { name: 'Picking', href: '/solutions/functionality/picking' },
//             { name: 'Storage', href: '/solutions/functionality/storage' },
//             { name: 'Reverse Logistics', href: '/solutions/functionality/reverselogistics' },
//           ]
//         },
//         {
//           name: 'Products',
//           href: '/products',
//           children: [
//             {
//               name: 'Mobile Robots',
//               children: [
//                 { name: 'Autonomous Forklift', href: '/products/mobilerobots/autonomousforklift' },
//                 { name: 'Autonomous Mobile Robot', href: '/products/mobilerobots/autonomousmobilerobot' },
//                 { name: 'Multi-Carton Picking Robot', href: '/products/mobilerobots/multicartonpickingrobot' },
//                 { name: 'Rail Guided Vehicle', href: '/products/mobilerobots/railguidedrobot' },
//               ]
//             },
//             {
//               name: 'Sorting Robots',
//               children: [
//                 { name: 'Robotic Sorter', href: '/products/sortingrobots/roboticsorter' },
//                 { name: 'Vertical Sortation Robot', href: '/products/sortingrobots/verticalsortationrobot' },
//               ]
//             },
//             {
//               name: 'ASRS',
//               children: [
//                 { name: '4 Way Pallet Shuttle', href: '/products/asrs/4waypalletshuttle' },
//                 { name: 'Mother-Child Shuttle', href: '/products/asrs/motherchildshuttle' },
//                 { name: 'Pallet Shuttle', href: '/products/asrs/palletshuttle' },
//                 { name: 'Crane ASRS', href: '/products/asrs/craneasrs' },
//                 { name: 'Carton Shuttle', href: '/products/asrs/cartonshuttle' },
//                 { name: 'Multi Level Shuttle', href: '/products/asrs/multilevelshuttle' },
//               ]
//             },
//             {
//               name: 'Picking Systems',
//               children: [
//                 { name: 'Horizontal Carousel', href: '/products/pickingsystems/horizontalcarousel' },
//                 { name: 'Pick-to-Light', href: '/products/pickingsystems/picktolight' },
//               ]
//             },
//             {
//               name: 'Software',
//               children: [
//                 { name: 'Warehouse Management System', href: '/products/software/warehousemanagementsoftware' },
//                 { name: 'Warehouse Execution System', href: '/products/software/warehouseexecutionsystem' },
//                 { name: 'Warehouse Control System', href: '/products/software/warehousecontrolsystem' },
//                 { name: 'Fleet Management System', href: '/products/software/fleetmanagementsystem' },
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Service',
//       href: '/service',
//       icon: Settings,
//       color: '#00ff80'
//     },
//     {
//       name: 'News Room',
//       href: '/newsroom',
//       icon: Globe,
//       color: '#ff8000',
//       dropdown: [
//         { name: 'Case Studies', href: '/newsroom/casestudies' },
//         { name: 'Blogs', href: '/newsroom/blogs' },
//         { name: 'Whitepapers', href: '/newsroom/whitepapers' },
//         { name: 'Events', href: '/newsroom/events' },
//         { name: 'News', href: '/newsroom/news' },
//         { name: 'Podcasts', href: '/newsroom/podcasts' },
//         { name: 'Sustainability', href: '/newsroom/sustainability' },
//       ]
//     },
//     {
//       name: 'Company',
//       href: '/company',
//       icon: Building,
//       color: '#8000ff',
//       dropdown: [
//         { name: 'About Us', href: '/company/aboutus' },
//         { name: 'Careers', href: '/company/careers' },
//         { name: 'Partners', href: '/company/partners' },
//       ]
//     }
//   ];

//   const handleMouseEnter = (itemName) => {
//     if (hoverTimeout) {
//       clearTimeout(hoverTimeout);
//     }
//     setActiveDropdown(itemName);
//   };

//   const handleMouseLeave = () => {
//     const timeout = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 150);
//     setHoverTimeout(timeout);
//   };

//   const renderDropdownContent = (item) => {
//     if (!item.dropdown) return null;

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: -10, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: -10, scale: 0.95 }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//         className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border-2 border-cyan-400/30 rounded-xl p-6 shadow-2xl z-50"
//         onMouseEnter={() => handleMouseEnter(item.name)}
//         onMouseLeave={handleMouseLeave}
//         style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
//       >
//         {/* Cyberpunk corners */}
//         <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
//         <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
//         <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
//         <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

//         <div className="space-y-3">
//           {item.dropdown.map((subItem, index) => (
//             <div key={index}>
//               <a
//                 href={subItem.href}
//                 className="flex items-center justify-between p-3 rounded-lg text-white hover:bg-cyan-400/20 transition-all group font-mono border border-transparent hover:border-cyan-400/30"
//               >
//                 <span className="font-medium group-hover:text-cyan-400 transition-colors">{subItem.name}</span>
//                 {subItem.children && (
//                   <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transform group-hover:rotate-180 transition-transform" />
//                 )}
//               </a>
              
//               {/* Third level dropdown for complex items */}
//               {subItem.children && (
//                 <div className="ml-4 mt-2 space-y-2 border-l-2 border-cyan-400/30 pl-4">
//                   {subItem.children.map((childItem, childIndex) => (
//                     <div key={childIndex}>
//                       <a
//                         href={childItem.href || '#'}
//                         className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm font-mono rounded hover:bg-cyan-400/10"
//                       >
//                         {childItem.name}
//                       </a>
//                       {childItem.children && (
//                         <div className="ml-4 mt-1 space-y-1 border-l border-gray-600 pl-3">
//                           {childItem.children.map((grandChild, grandIndex) => (
//                             <a
//                               key={grandIndex}
//                               href={grandChild.href}
//                               className="block p-1 text-gray-400 hover:text-cyan-300 transition-colors text-xs font-mono rounded hover:bg-cyan-400/10"
//                             >
//                               &gt; {grandChild.name}
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   if (!mounted) {
//     return null; // Prevent hydration mismatch
//   }

//   return (
//     <>
//       {/* Top Support Bar */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="hidden md:block bg-slate-800/90 text-cyan-400 text-xs py-2 px-6 text-center font-mono border-b border-cyan-400/20 backdrop-blur-sm"
//       >
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <span>&gt; GLOBAL_ROBOTICS_COMPANY | 24/7_AFTER_SALES_SUPPORT</span>
//           <div className="flex items-center space-x-4">
//             <span className="text-white">🌐 EN</span>
//             <a href="/contact" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
//               CONTACT_US.exe
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Header */}
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
//         className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${
//           isScrolled 
//             ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-cyan-400/30' 
//             : 'bg-slate-800/70 backdrop-blur-sm border-b border-cyan-400/10'
//         }`}
//         style={{
//           boxShadow: isScrolled ? '0 0 30px rgba(0, 255, 255, 0.2)' : 'none'
//         }}
//       >
//         <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
//           {/* Logo */}
//           <motion.div 
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <a href="/" className="flex items-center space-x-3">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//                 className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center relative overflow-hidden"
//                 style={{
//                   background: 'linear-gradient(135deg, #00ffff, #0080ff)',
//                   boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
//                 }}
//               >
//                 <Bot className="w-4 h-4 text-white relative z-10" />
                
//                 {/* Pulsing effect */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-cyan-400"
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0, 0.3, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 />
//               </motion.div>
//               <span className="text-2xl sm:text-3xl font-bold text-red-400 tracking-tight font-mono">
//                 ADDVERB
//               </span>
//             </a>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navigationItems.map((item, index) => {
//               const Icon = item.icon;
//               const hasDropdown = item.dropdown && item.dropdown.length > 0;
              
//               return (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <motion.a
//                     href={item.href}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group font-mono relative overflow-hidden ${
//                       activeDropdown === item.name 
//                         ? 'bg-slate-700/50 text-cyan-400' 
//                         : 'text-gray-300 hover:bg-slate-700/30 hover:text-cyan-400'
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     style={{
//                       boxShadow: activeDropdown === item.name ? `0 0 15px ${item.color}30` : 'none'
//                     }}
//                   >
//                     {/* Background glow effect */}
//                     {activeDropdown === item.name && (
//                       <motion.div
//                         className="absolute inset-0 rounded-lg"
//                         style={{ background: `${item.color}10` }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
                    
//                     <Icon className="w-4 h-4 relative z-10" />
//                     <span className="font-medium relative z-10">{item.name}</span>
//                     {hasDropdown && (
//                       <motion.div
//                         animate={{ 
//                           rotate: activeDropdown === item.name ? 180 : 0,
//                           scale: activeDropdown === item.name ? 1.1 : 1
//                         }}
//                         transition={{ duration: 0.2 }}
//                         className="relative z-10"
//                       >
//                         <ChevronDown className="w-4 h-4" />
//                       </motion.div>
//                     )}
//                   </motion.a>

//                   {/* Dropdown Menu */}
//                   <AnimatePresence>
//                     {hasDropdown && activeDropdown === item.name && renderDropdownContent(item)}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}

//             {/* Search Icon */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-700/30"
//             >
//               <Search className="w-5 h-5" />
//             </motion.button>

//             {/* Contact Button */}
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="ml-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold font-mono transition-all border-2 border-red-500 hover:border-red-600 relative overflow-hidden group"
//               style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
//             >
//               {/* Button glow effect */}
//               <motion.div
//                 className="absolute inset-0 bg-red-400"
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: '100%' }}
//                 transition={{ duration: 0.6 }}
//                 style={{ opacity: 0.2 }}
//               />
//               <span className="relative z-10 flex items-center">
//                 <Phone className="inline w-4 h-4 mr-2" />
//                 CONTACT.exe
//               </span>
//             </motion.a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="lg:hidden relative p-3 text-gray-300 border-2 border-cyan-400/50 rounded-lg hover:bg-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all"
//             onClick={onMenuClick}
//             style={{ boxShadow: '0 0 15px rgba(0,255,255,0.2)' }}
//           >
//             <Menu className="w-6 h-6" />
            
//             {/* Corner decorations */}
//             <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400" />
//             <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyan-400" />
//             <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-400" />
//             <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-400" />
//           </motion.button>
//         </div>
//       </motion.header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Bot, Settings, Globe, Zap, Factory, Building, ChevronDown, Search, Phone } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Complete navigation structure with dropdowns
  const navigationItems = [
    {
      name: 'Industry',
      href: '/industry',
      icon: Factory,
      color: '#00ffff',
      dropdown: [
        { name: 'Automotive and Tyre', href: '/industry/automotiveandtyre' },
        { name: 'Consumer Goods', href: '/industry/consumergoods' },
        { name: 'Grocery', href: '/industry/grocery' },
        { name: 'Solar and Battery', href: '/industry/solarandbattery' },
        { name: 'Chemicals and Petrochemicals', href: '/industry/chemicalsandpetrochemicals' },
        { name: 'E-Commerce', href: '/industry/ecommerce' },
        { name: 'Pharmaceuticals', href: '/industry/pharmaceuticals' },
        { name: 'Third Party Logistics', href: '/industry/thirdpartylogistics' },
        { name: 'Cold Storage', href: '/industry/coldstorage' },
        { name: 'Fashion', href: '/industry/fashion' },
        { name: 'Semiconductors', href: '/industry/semiconductors' },
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Zap,
      color: '#ff00ff',
      dropdown: [
        {
          name: 'Functionality',
          href: '/solutions/functionality',
          children: [
            { name: 'Material Movement', href: '/solutions/functionality/materialmovement' },
            { name: 'Sortation', href: '/solutions/functionality/sortation' },
            { name: 'Picking', href: '/solutions/functionality/picking' },
            { name: 'Storage', href: '/solutions/functionality/storage' },
            { name: 'Reverse Logistics', href: '/solutions/functionality/reverselogistics' },
          ]
        },
        {
          name: 'Products',
          href: '/products',
          children: [
            {
              name: 'Mobile Robots',
              children: [
                { name: 'Autonomous Forklift', href: '/products/mobilerobots/autonomousforklift' },
                { name: 'Autonomous Mobile Robot', href: '/products/mobilerobots/autonomousmobilerobot' },
                { name: 'Multi-Carton Picking Robot', href: '/products/mobilerobots/multicartonpickingrobot' },
                { name: 'Rail Guided Vehicle', href: '/products/mobilerobots/railguidedrobot' },
              ]
            },
            {
              name: 'Sorting Robots',
              children: [
                { name: 'Robotic Sorter', href: '/products/sortingrobots/roboticsorter' },
                { name: 'Vertical Sortation Robot', href: '/products/sortingrobots/verticalsortationrobot' },
              ]
            },
            {
              name: 'ASRS',
              children: [
                { name: '4 Way Pallet Shuttle', href: '/products/asrs/4waypalletshuttle' },
                { name: 'Mother-Child Shuttle', href: '/products/asrs/motherchildshuttle' },
                { name: 'Pallet Shuttle', href: '/products/asrs/palletshuttle' },
                { name: 'Crane ASRS', href: '/products/asrs/craneasrs' },
                { name: 'Carton Shuttle', href: '/products/asrs/cartonshuttle' },
                { name: 'Multi Level Shuttle', href: '/products/asrs/multilevelshuttle' },
              ]
            },
            {
              name: 'Picking Systems',
              children: [
                { name: 'Horizontal Carousel', href: '/products/pickingsystems/horizontalcarousel' },
                { name: 'Pick-to-Light', href: '/products/pickingsystems/picktolight' },
              ]
            },
            {
              name: 'Software',
              children: [
                { name: 'Warehouse Management System', href: '/products/software/warehousemanagementsoftware' },
                { name: 'Warehouse Execution System', href: '/products/software/warehouseexecutionsystem' },
                { name: 'Warehouse Control System', href: '/products/software/warehousecontrolsystem' },
                { name: 'Fleet Management System', href: '/products/software/fleetmanagementsystem' },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Service',
      href: '/service',
      icon: Settings,
      color: '#00ff80'
    },
    {
      name: 'News Room',
      href: '/newsroom',
      icon: Globe,
      color: '#ff8000',
      dropdown: [
        { name: 'Case Studies', href: '/newsroom/casestudies' },
        { name: 'Blogs', href: '/newsroom/blogs' },
        { name: 'Whitepapers', href: '/newsroom/whitepapers' },
        { name: 'Events', href: '/newsroom/events' },
        { name: 'News', href: '/newsroom/news' },
        { name: 'Podcasts', href: '/newsroom/podcasts' },
        { name: 'Sustainability', href: '/newsroom/sustainability' },
      ]
    },
    {
      name: 'Company',
      href: '/company',
      icon: Building,
      color: '#8000ff',
      dropdown: [
        { name: 'About Us', href: '/company/aboutus' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'Partners', href: '/company/partners' },
      ]
    }
  ];

  const handleMouseEnter = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const renderDropdownContent = (item) => {
    if (!item.dropdown) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-slate-800/95 backdrop-blur-lg border-2 border-cyan-400/30 rounded-xl p-4 sm:p-6 shadow-2xl z-50 max-h-96 overflow-y-auto"
        onMouseEnter={() => handleMouseEnter(item.name)}
        onMouseLeave={handleMouseLeave}
        style={{ 
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
          scrollbarWidth: 'thin'
        }}
      >
        {/* Cyberpunk corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

        <div className="space-y-2">
          {item.dropdown.map((subItem, index) => (
            <div key={index}>
              <a
                href={subItem.href}
                className="flex items-center justify-between p-2 sm:p-3 rounded-lg text-white hover:bg-cyan-400/20 transition-all group font-mono border border-transparent hover:border-cyan-400/30 text-sm"
              >
                <span className="font-medium group-hover:text-cyan-400 transition-colors">{subItem.name}</span>
                {subItem.children && (
                  <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 transform group-hover:rotate-180 transition-transform" />
                )}
              </a>
              
              {/* Third level dropdown for complex items */}
              {subItem.children && (
                <div className="ml-3 mt-1 space-y-1 border-l border-cyan-400/30 pl-3">
                  {subItem.children.map((childItem, childIndex) => (
                    <div key={childIndex}>
                      <a
                        href={childItem.href || '#'}
                        className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors text-xs font-mono rounded hover:bg-cyan-400/10"
                      >
                        {childItem.name}
                      </a>
                      {childItem.children && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-gray-600/50 pl-2">
                          {childItem.children.map((grandChild, grandIndex) => (
                            <a
                              key={grandIndex}
                              href={grandChild.href}
                              className="block p-1 text-gray-400 hover:text-cyan-300 transition-colors text-xs font-mono rounded hover:bg-cyan-400/10"
                            >
                              &gt; {grandChild.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      {/* Top Support Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:block bg-slate-800/90 text-cyan-400 text-xs py-2 px-4 sm:px-6 text-center font-mono border-b border-cyan-400/20 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span>&gt; GLOBAL ROBOTICS COMPANY | 24/7 AFTER SALES SUPPORT</span>
          <div className="flex items-center space-x-4">
            <span className="text-white">🌐 EN</span>
            <a href="/contact" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
             
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-cyan-400/30' 
            : 'bg-slate-800/70 backdrop-blur-sm border-b border-cyan-400/10'
        }`}
        style={{
          boxShadow: isScrolled ? '0 0 30px rgba(0, 255, 255, 0.2)' : 'none'
        }}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a href="/" className="flex items-center space-x-2 sm:space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
                }}
              >
                <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white relative z-10" />
                
                {/* Pulsing effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 tracking-tight font-mono">
                ADDVERB
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.a
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 group font-mono relative overflow-hidden ${
                      activeDropdown === item.name 
                        ? 'bg-slate-700/50 text-cyan-400' 
                        : 'text-gray-300 hover:bg-slate-700/30 hover:text-cyan-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      boxShadow: activeDropdown === item.name ? `0 0 15px ${item.color}30` : 'none'
                    }}
                  >
                    {/* Background glow effect */}
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{ background: `${item.color}10` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="font-medium relative z-10 text-sm">{item.name}</span>
                    {hasDropdown && (
                      <motion.div
                        animate={{ 
                          rotate: activeDropdown === item.name ? 180 : 0,
                          scale: activeDropdown === item.name ? 1.1 : 1
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.name && renderDropdownContent(item)}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-700/30"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button - Only show on desktop */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 sm:px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold font-mono transition-all border-2 border-red-500 hover:border-red-600 relative overflow-hidden group text-sm"
              style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-red-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{ opacity: 0.2 }}
              />
              <span className="relative z-10 flex items-center">
                <Phone className="inline w-4 h-4 mr-2" />
                CONTACT
              </span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative p-2 sm:p-3 text-gray-300 border-2 border-cyan-400/50 rounded-lg hover:bg-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all"
            onClick={onMenuClick}
            style={{ boxShadow: '0 0 15px rgba(0,255,255,0.2)' }}
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            
            {/* Corner decorations */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-cyan-400" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-cyan-400" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-cyan-400" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-cyan-400" />
          </motion.button>
        </div>
      </motion.header>
    </>
  );
};

export default Header;