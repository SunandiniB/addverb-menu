// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { Menu, Bot, Settings, Globe, Zap, Factory, Building } from 'lucide-react';

// // const Header = ({ onMenuClick }) => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [activeItem, setActiveItem] = useState('');

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navItems = [
// //     { name: 'Industry', href: '/industry', icon: Factory },
// //     { name: 'Solutions', href: '/solutions', icon: Zap },
// //     { name: 'Service', href: '/service', icon: Settings },
// //     { name: 'News Room', href: '/newsroom', icon: Globe },
// //     { name: 'Company', href: '/company', icon: Building },
// //   ];

// //   return (
// //     <motion.header
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.8, type: 'spring' }}
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
// //         isScrolled 
// //           ? 'bg-black/90 backdrop-blur-lg border-b border-cyan-400/30' 
// //           : 'bg-black/60 backdrop-blur-md'
// //       }`}
// //     >
// //       {/* Top Support Bar */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 0.5 }}
// //         className="hidden md:block bg-gray-100 text-gray-600 text-xs py-1 px-6 text-center font-mono"
// //       >
// //         GLOBAL ROBOTICS COMPANY | 24/7 AFTER SALES SUPPORT
// //       </motion.div>

// //       {/* Animated top border */}
// //       <motion.div
// //         className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
// //         animate={{
// //           width: ['0%', '100%', '0%'],
// //         }}
// //         transition={{
// //           duration: 4,
// //           repeat: Infinity,
// //           ease: 'easeInOut',
// //         }}
// //       />

// //       <div className="flex justify-between items-center px-6 py-4">
// //         {/* Logo */}
// //         <motion.div 
// //           className="relative group"
// //           whileHover={{ scale: 1.05 }}
// //         >
// //           <motion.div
// //             className="flex items-center space-x-2"
// //           >
// //             <motion.div
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
// //               className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center"
// //             >
// //               <Bot className="w-4 h-4 text-cyan-400" />
// //             </motion.div>
// //             <motion.span
// //               className="text-3xl font-bold text-red-500 font-sans tracking-tight"
// //               style={{
// //                 textShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
// //               }}
// //               animate={{
// //                 textShadow: [
// //                   '0 0 20px rgba(239, 68, 68, 0.5)',
// //                   '0 0 30px rgba(239, 68, 68, 0.8)',
// //                   '0 0 20px rgba(239, 68, 68, 0.5)',
// //                 ],
// //               }}
// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity,
// //                 ease: 'easeInOut',
// //               }}
// //             >
// //               ADDVERB
// //             </motion.span>
// //           </motion.div>
          
// //           {/* Hover effect */}
// //           <motion.div
// //             className="absolute -inset-2 border border-cyan-400/50 rounded-lg opacity-0 group-hover:opacity-100"
// //             initial={{ scale: 0.8 }}
// //             whileHover={{ scale: 1 }}
// //             transition={{ duration: 0.2 }}
// //           />
// //         </motion.div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex items-center space-x-8">
// //           {navItems.map((item, index) => {
// //             const Icon = item.icon;
            
// //             return (
// //               <motion.div
// //                 key={item.name}
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: index * 0.1, duration: 0.5 }}
// //                 className="relative"
// //               >
// //                 <a
// //                   href={item.href}
// //                   className="relative group flex items-center space-x-2 px-4 py-2 rounded-lg font-mono font-semibold tracking-wide transition-all duration-300 text-white hover:text-cyan-400"
// //                   onMouseEnter={() => setActiveItem(item.name)}
// //                   onMouseLeave={() => setActiveItem('')}
// //                 >
// //                   <motion.div
// //                     animate={activeItem === item.name ? { rotate: 360 } : { rotate: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                   >
// //                     <Icon className="w-4 h-4" />
// //                   </motion.div>
// //                   <span className="text-sm">{item.name}</span>
                  
// //                   {/* Animated underline */}
// //                   <motion.div
// //                     className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
// //                     initial={{ width: 0 }}
// //                     animate={{ 
// //                       width: activeItem === item.name ? '100%' : '0%'
// //                     }}
// //                     transition={{ duration: 0.3 }}
// //                   />
                  
// //                   {/* Glow effect */}
// //                   <motion.div
// //                     className="absolute inset-0 rounded-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100"
// //                     transition={{ duration: 0.3 }}
// //                   />
// //                 </a>
// //               </motion.div>
// //             );
// //           })}
          
// //           {/* Contact CTA */}
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="relative px-6 py-2 font-mono font-bold text-white rounded-lg overflow-hidden border-2 border-red-500 hover:bg-red-500 transition-all duration-300"
// //             style={{
// //               boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
// //             }}
// //           >
// //             <span className="relative z-10">CONTACT</span>
// //           </motion.button>
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <motion.button
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //           className="md:hidden relative p-2 text-white border border-cyan-400/50 rounded-lg bg-black/60 backdrop-blur-sm"
// //           onClick={onMenuClick}
// //         >
// //           <motion.div
// //             animate={{ rotate: 0 }}
// //             whileHover={{ rotate: 180 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <Menu className="w-6 h-6" />
// //           </motion.div>
          
// //           {/* Button glow effect */}
// //           <motion.div
// //             className="absolute inset-0 border border-cyan-400/50 rounded-lg"
// //             animate={{
// //               boxShadow: [
// //                 '0 0 5px rgba(0,255,255,0.3)',
// //                 '0 0 15px rgba(0,255,255,0.6)',
// //                 '0 0 5px rgba(0,255,255,0.3)',
// //               ],
// //             }}
// //             transition={{
// //               duration: 2,
// //               repeat: Infinity,
// //               ease: 'easeInOut',
// //             }}
// //           />
// //         </motion.button>
// //       </div>

// //       {/* System Status Indicator */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1 }}
// //         className="absolute top-full left-6 mt-2 text-xs font-mono text-cyan-400 bg-black/80 px-3 py-1 rounded border border-cyan-400/30 hidden md:block"
// //       >
// //         <motion.span
// //           animate={{ opacity: [0.5, 1, 0.5] }}
// //           transition={{ duration: 1.5, repeat: Infinity }}
// //         >
// //           ● SYSTEM ONLINE
// //         </motion.span>
// //       </motion.div>
// //     </motion.header>
// //   );
// // };

// // export default Header;
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, Bot, Settings, Globe, Zap, Factory, Building, ChevronDown, Search, Phone } from 'lucide-react';

// const Header = ({ onMenuClick }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [hoverTimeout, setHoverTimeout] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
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
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.2 }}
//         className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-6 shadow-2xl"
//         onMouseEnter={() => handleMouseEnter(item.name)}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="space-y-3">
//           {item.dropdown.map((subItem, index) => (
//             <div key={index}>
//               <a
//                 href={subItem.href}
//                 className="flex items-center justify-between p-3 rounded-lg text-white hover:bg-white/10 transition-colors group"
//               >
//                 <span className="font-medium">{subItem.name}</span>
//                 {subItem.children && (
//                   <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
//                 )}
//               </a>
              
//               {/* Third level dropdown for complex items */}
//               {subItem.children && (
//                 <div className="ml-4 mt-2 space-y-2">
//                   {subItem.children.map((childItem, childIndex) => (
//                     <div key={childIndex}>
//                       <a
//                         href={childItem.href || '#'}
//                         className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
//                       >
//                         {childItem.name}
//                       </a>
//                       {childItem.children && (
//                         <div className="ml-4 mt-1 space-y-1">
//                           {childItem.children.map((grandChild, grandIndex) => (
//                             <a
//                               key={grandIndex}
//                               href={grandChild.href}
//                               className="block p-1 text-gray-400 hover:text-cyan-300 transition-colors text-xs"
//                             >
//                               {grandChild.name}
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

//   return (
//     <>
//       {/* Top Support Bar */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="hidden md:block bg-gray-100 text-gray-600 text-xs py-2 px-6 text-center font-mono border-b"
//       >
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <span>GLOBAL ROBOTICS COMPANY | 24/7 AFTER SALES SUPPORT</span>
//           <div className="flex items-center space-x-4">
//             <span>🇬🇧 EN</span>
//             <a href="/contact" className="text-red-500 hover:text-red-600 font-semibold">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Header */}
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, type: 'spring' }}
//         className={`sticky top-0 w-full z-50 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b' 
//             : 'bg-white/90 backdrop-blur-sm'
//         }`}
//       >
//         <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//           {/* Logo */}
//           <motion.div 
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//           >
//             <a href="/" className="flex items-center space-x-3">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//                 className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-600"
//               >
//                 <Bot className="w-4 h-4 text-white" />
//               </motion.div>
//               <span className="text-3xl font-bold text-red-500 tracking-tight">
//                 ADDVERB
//               </span>
//             </a>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
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
//                   <a
//                     href={item.href}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
//                       activeDropdown === item.name 
//                         ? 'bg-gray-100 text-red-500' 
//                         : 'text-gray-700 hover:bg-gray-50 hover:text-red-500'
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     <span className="font-medium">{item.name}</span>
//                     {hasDropdown && (
//                       <ChevronDown 
//                         className={`w-4 h-4 transition-transform duration-200 ${
//                           activeDropdown === item.name ? 'rotate-180' : ''
//                         }`} 
//                       />
//                     )}
//                   </a>

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
//               className="p-2 text-gray-700 hover:text-red-500 transition-colors"
//             >
//               <Search className="w-5 h-5" />
//             </motion.button>

//             {/* Contact Button */}
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="ml-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors border-2 border-red-500 hover:border-red-600"
//             >
//               <Phone className="inline w-4 h-4 mr-2" />
//               CONTACT
//             </motion.a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="md:hidden relative p-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
//             onClick={onMenuClick}
//           >
//             <Menu className="w-6 h-6" />
//           </motion.button>
//         </div>

//         {/* Mobile Search Bar (when needed) */}
//         <motion.div
//           className="md:hidden border-t bg-white/95 backdrop-blur-lg"
//           initial={{ height: 0 }}
//           animate={{ height: 'auto' }}
//         >
//           <div className="px-6 py-3">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products, solutions..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
//               />
//             </div>
//           </div>
//         </motion.div>
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-6 shadow-2xl z-50"
        onMouseEnter={() => handleMouseEnter(item.name)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="space-y-3">
          {item.dropdown.map((subItem, index) => (
            <div key={index}>
              <a
                href={subItem.href}
                className="flex items-center justify-between p-3 rounded-lg text-white hover:bg-cyan-400/20 transition-colors group font-mono"
              >
                <span className="font-medium">{subItem.name}</span>
                {subItem.children && (
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                )}
              </a>
              
              {/* Third level dropdown for complex items */}
              {subItem.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {subItem.children.map((childItem, childIndex) => (
                    <div key={childIndex}>
                      <a
                        href={childItem.href || '#'}
                        className="block p-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm font-mono"
                      >
                        {childItem.name}
                      </a>
                      {childItem.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {childItem.children.map((grandChild, grandIndex) => (
                            <a
                              key={grandIndex}
                              href={grandChild.href}
                              className="block p-1 text-gray-400 hover:text-cyan-300 transition-colors text-xs font-mono"
                            >
                              {grandChild.name}
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

  return (
    <>
      {/* Top Support Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:block bg-slate-800 text-cyan-400 text-xs py-2 px-6 text-center font-mono border-b border-cyan-400/20"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span>&gt; GLOBAL_ROBOTICS_COMPANY | 24/7_AFTER_SALES_SUPPORT</span>
          <div className="flex items-center space-x-4">
            <span>🌐 EN</span>
            <a href="/contact" className="text-red-400 hover:text-red-300 font-semibold">
              CONTACT_US.exe
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-cyan-400/20' 
            : 'bg-slate-800/90 backdrop-blur-sm'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/" className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-600"
              >
                <Bot className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-3xl font-bold text-red-400 tracking-tight font-mono">
                ADDVERB
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
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
                  <a
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group font-mono ${
                      activeDropdown === item.name 
                        ? 'bg-slate-700/50 text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)]' 
                        : 'text-gray-300 hover:bg-slate-700/30 hover:text-cyan-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </a>

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
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Contact Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold font-mono transition-colors border-2 border-red-500 hover:border-red-600"
              style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
            >
              <Phone className="inline w-4 h-4 mr-2" />
              CONTACT.exe
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative p-2 text-gray-300 border border-cyan-400/50 rounded-lg hover:bg-slate-700/50 bg-slate-800/60 backdrop-blur-sm"
            onClick={onMenuClick}
            style={{ boxShadow: '0 0 15px rgba(0,255,255,0.2)' }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Search Bar (when needed) */}
        <motion.div
          className="md:hidden border-t bg-slate-800/95 backdrop-blur-lg border-cyan-400/20"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
        >
          <div className="px-6 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <input
                type="text"
                placeholder="&gt; Search_products_solutions..."
                className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              />
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;