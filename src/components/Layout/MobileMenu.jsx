// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   X,
//   ChevronRight,
//   Search,
//   Factory,
//   Zap,
//   Settings,
//   Globe,
//   Building,
//   Activity,
//   ExternalLink,
//   Eye,
//   Bot
// } from 'lucide-react';

// const MobileMenu = ({ isOpen, onClose }) => {
//   const [expandedItems, setExpandedItems] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');

//   // Complete menu structure
//   const menuStructure = [
//     {
//       name: 'Industry',
//       icon: Factory,
//       color: '#00ffff',
//       path: '/industry',
//       children: [
//         { name: 'Automotive and Tyre', path: '/industry/automotiveandtyre' },
//         { name: 'Consumer Goods', path: '/industry/consumergoods' },
//         { name: 'Grocery', path: '/industry/grocery' },
//         { name: 'Solar and Battery', path: '/industry/solarandbattery' },
//         { name: 'Chemicals and Petrochemicals', path: '/industry/chemicalsandpetrochemicals' },
//         { name: 'E-Commerce', path: '/industry/ecommerce' },
//         { name: 'Pharmaceuticals', path: '/industry/pharmaceuticals' },
//         { name: 'Third Party Logistics', path: '/industry/thirdpartylogistics' },
//         { name: 'Cold Storage', path: '/industry/coldstorage' },
//         { name: 'Fashion', path: '/industry/fashion' },
//         { name: 'Semiconductors', path: '/industry/semiconductors' },
//       ]
//     },
//     {
//       name: 'Solutions',
//       icon: Zap,
//       color: '#ff00ff',
//       path: '/solutions',
//       children: [
//         {
//           name: 'Functionality',
//           path: '/solutions/functionality',
//           children: [
//             { name: 'Material Movement', path: '/solutions/functionality/materialmovement' },
//             { name: 'Sortation', path: '/solutions/functionality/sortation' },
//             { name: 'Picking', path: '/solutions/functionality/picking' },
//             { name: 'Storage', path: '/solutions/functionality/storage' },
//             { name: 'Reverse Logistics', path: '/solutions/functionality/reverselogistics' },
//           ]
//         },
//         {
//           name: 'Products',
//           path: '/products',
//           children: [
//             {
//               name: 'Mobile Robots',
//               children: [
//                 { name: 'Autonomous Forklift', path: '/products/mobilerobots/autonomousforklift' },
//                 { name: 'Autonomous Mobile Robot', path: '/products/mobilerobots/autonomousmobilerobot' },
//                 { name: 'Multi-Carton Picking Robot', path: '/products/mobilerobots/multicartonpickingrobot' },
//                 { name: 'Rail Guided Vehicle', path: '/products/mobilerobots/railguidedrobot' },
//               ]
//             },
//             {
//               name: 'Sorting Robots',
//               children: [
//                 { name: 'Robotic Sorter', path: '/products/sortingrobots/roboticsorter' },
//                 { name: 'Vertical Sortation Robot', path: '/products/sortingrobots/verticalsortationrobot' },
//               ]
//             },
//             {
//               name: 'ASRS',
//               children: [
//                 { name: '4 Way Pallet Shuttle', path: '/products/asrs/4waypalletshuttle' },
//                 { name: 'Mother-Child Shuttle', path: '/products/asrs/motherchildshuttle' },
//                 { name: 'Pallet Shuttle', path: '/products/asrs/palletshuttle' },
//                 { name: 'Crane ASRS', path: '/products/asrs/craneasrs' },
//                 { name: 'Carton Shuttle', path: '/products/asrs/cartonshuttle' },
//                 { name: 'Multi Level Shuttle', path: '/products/asrs/multilevelshuttle' },
//               ]
//             },
//             {
//               name: 'Picking Systems',
//               children: [
//                 { name: 'Horizontal Carousel', path: '/products/pickingsystems/horizontalcarousel' },
//                 { name: 'Pick-to-Light', path: '/products/pickingsystems/picktolight' },
//               ]
//             },
//             {
//               name: 'Software',
//               children: [
//                 { name: 'Warehouse Management System', path: '/products/software/warehousemanagementsoftware' },
//                 { name: 'Warehouse Execution System', path: '/products/software/warehouseexecutionsystem' },
//                 { name: 'Warehouse Control System', path: '/products/software/warehousecontrolsystem' },
//                 { name: 'Fleet Management System', path: '/products/software/fleetmanagementsystem' },
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Service',
//       icon: Settings,
//       color: '#00ff80',
//       path: '/service'
//     },
//     {
//       name: 'News Room',
//       icon: Globe,
//       color: '#ff8000',
//       path: '/newsroom',
//       children: [
//         { name: 'Case Studies', path: '/newsroom/casestudies' },
//         { name: 'Blogs', path: '/newsroom/blogs' },
//         { name: 'Whitepapers', path: '/newsroom/whitepapers' },
//         { name: 'Events', path: '/newsroom/events' },
//         { name: 'News', path: '/newsroom/news' },
//         { name: 'Podcasts', path: '/podcastpage' },
//         { name: 'Sustainability', path: '/newsroom/sustainability' },
//       ]
//     },
//     {
//       name: 'Company',
//       icon: Building,
//       color: '#8000ff',
//       path: '/company',
//       children: [
//         { name: 'About Us', path: '/company/aboutus' },
//         { name: 'Careers', path: '/company/careers' },
//         { name: 'Partners', path: '/company/partners' },
//       ]
//     }
//   ];

//   // Bottom navigation items with reduced importance
//   const bottomNavItems = [
//     { name: 'Podcasts', icon: Activity, path: '/podcastpage', color: '#00ffff' },
//     { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#ff00ff' },
//     { name: 'Blog', icon: Eye, path: '/blog', color: '#00ff80' },
//     { name: 'Support', icon: Settings, path: '/support', color: '#ff8000' },
//   ];

//   const toggleExpanded = (itemPath) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [itemPath]: !prev[itemPath]
//     }));
//   };

//   const handleItemClick = (item) => {
//     if (item.children) {
//       toggleExpanded(item.path || item.name);
//     } else {
//       // Navigate to the page
//       window.location.href = item.path;
//       onClose();
//     }
//   };

//   const renderMenuItem = (item, depth = 0, parentPath = '') => {
//     const itemKey = `${parentPath}-${item.name}`;
//     const isExpanded = expandedItems[itemKey] || expandedItems[item.path] || expandedItems[item.name];
//     const hasChildren = item.children && item.children.length > 0;
    
//     return (
//       <motion.div
//         key={itemKey}
//         className="relative"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: depth * 0.1 }}
//       >
//         <motion.button
//           onClick={() => handleItemClick(item)}
//           className={`w-full flex items-center justify-between p-2 mx-2 my-1 rounded-lg font-mono font-semibold transition-all duration-300 group text-left relative overflow-hidden ${
//             depth === 0 ? 'text-sm' : depth === 1 ? 'text-xs ml-2' : 'text-xs ml-4'
//           }`}
//           style={{
//             background: isExpanded && depth === 0 ? `${item.color}15` : 'transparent',
//             borderLeft: isExpanded && depth === 0 ? `3px solid ${item.color}` : 
//                        depth > 0 ? '1px solid #475569' : '2px solid transparent',
//             paddingLeft: depth > 0 ? `${8 + (depth * 6)}px` : '8px'
//           }}
//           whileHover={{ x: depth === 0 ? 4 : 2, scale: 1.01 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           {/* Glow effect on hover */}
//           {depth === 0 && (
//             <motion.div
//               className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
//               style={{
//                 background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           )}

//           <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
//             {depth === 0 && item.icon && (
//               <motion.div
//                 animate={isExpanded ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
//                 transition={{ duration: 0.3, type: "spring" }}
//                 className="p-2 rounded-lg border relative overflow-hidden"
//                 style={{
//                   background: `${item.color}20`,
//                   borderColor: `${item.color}50`,
//                 }}
//               >
//                 <item.icon 
//                   className="w-4 h-4" 
//                   style={{ color: isExpanded ? item.color : '#e2e8f0' }}
//                 />
//               </motion.div>
//             )}
            
//             <div>
//               <div 
//                 className="font-bold tracking-wider font-mono"
//                 style={{ 
//                   color: isExpanded && depth === 0 ? item.color : '#e2e8f0',
//                   fontSize: depth === 0 ? '14px' : depth === 1 ? '12px' : '11px',
//                 }}
//               >
//                 {depth > 0 && '> '}{item.name}
//               </div>
//             </div>
//           </div>
          
//           {hasChildren && (
//             <motion.div
//               animate={{ rotate: isExpanded ? 90 : 0, scale: isExpanded ? 1.1 : 1 }}
//               transition={{ duration: 0.2, type: "spring" }}
//               className="relative z-10"
//             >
//               <ChevronRight 
//                 className={`w-4 h-4 ${depth === 0 ? 'text-gray-300' : 'text-gray-400'}`}
//                 style={{ color: isExpanded ? item.color : undefined }}
//               />
//             </motion.div>
//           )}
//         </motion.button>

//         {/* Submenu with enhanced animations */}
//         <AnimatePresence>
//           {hasChildren && isExpanded && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               <motion.div
//                 initial={{ y: -20 }}
//                 animate={{ y: 0 }}
//                 exit={{ y: -20 }}
//                 transition={{ duration: 0.3, delay: 0.1 }}
//               >
//                 {item.children.map((child) => 
//                   renderMenuItem(child, depth + 1, itemKey)
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     );
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Overlay with blur effect */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-slate-900/90 backdrop-blur-lg z-40"
//             onClick={onClose}
//           />

//           {/* Menu Panel with proper sizing */}
//           <motion.div
//             initial={{ x: '-100%', opacity: 0 }}
//             animate={{ x: '0%', opacity: 1 }}
//             exit={{ x: '-100%', opacity: 0 }}
//             transition={{
//               type: 'spring',
//               stiffness: 300,
//               damping: 40
//             }}
//             className="fixed left-0 top-0 h-full w-72 sm:w-80 bg-slate-800/95 backdrop-blur-xl border-r-2 border-cyan-400/30 z-50 overflow-hidden flex flex-col"
//             style={{ boxShadow: '0 0 50px rgba(0, 255, 255, 0.3)' }}
//           >
//             {/* Cyberpunk corner decorations */}
//             <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
//             <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />

//             {/* Header */}
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="flex-shrink-0 p-4 border-b-2 border-cyan-400/30 relative"
//             >
//               {/* Top Bar */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-xs text-cyan-400 font-mono">
//                   &gt; GLOBAL_ROBOTICS_COMPANY
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={onClose}
//                   className="p-2 text-white hover:text-cyan-400 rounded-lg border border-cyan-400/30 hover:border-cyan-400 transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </motion.button>
//               </div>

//               {/* Logo */}
//               <div className="flex items-center space-x-3 mb-4">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//                   className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center relative overflow-hidden"
//                   style={{
//                     background: 'linear-gradient(135deg, #00ffff, #0080ff)',
//                     boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
//                   }}
//                 >
//                   <Bot className="w-4 h-4 text-white relative z-10" />
//                 </motion.div>
//                 <div>
//                   <h2 className="text-xl font-bold text-red-400 font-mono">ADDVERB</h2>
//                   <div className="text-xs text-cyan-400 font-mono">&gt; Automation_Systems</div>
//                 </div>
//               </div>

//               {/* Search Bar */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
//                 <input
//                   type="text"
//                   placeholder="&gt; Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-cyan-400/50 rounded-lg text-white text-sm font-mono focus:outline-none focus:border-cyan-400 transition-all"
//                 />
//               </div>
//             </motion.div>

//             {/* Menu Items with proper spacing */}
//             <div className="flex-1 overflow-y-auto py-2" style={{ scrollbarWidth: 'thin' }}>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {menuStructure.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     {renderMenuItem(item)}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Bottom Navigation with compact design */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex-shrink-0 border-t border-cyan-400/30 bg-slate-800/80 p-3"
//             >
//               <div className="grid grid-cols-2 gap-2">
//                 {bottomNavItems.map((item, index) => (
//                   <motion.button
//                     key={item.name}
//                     onClick={() => {
//                       window.location.href = item.path;
//                       onClose();
//                     }}
//                     whileHover={{ scale: 1.02, y: -1 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="flex flex-col items-center space-y-1 p-2 rounded-lg font-mono border transition-all relative overflow-hidden group text-xs"
//                     style={{
//                       background: `${item.color}10`,
//                       borderColor: `${item.color}40`,
//                     }}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.9 + index * 0.05, type: "spring" }}
//                   >
//                     <item.icon className="w-4 h-4" style={{ color: item.color }} />
//                     <span 
//                       className="font-bold" 
//                       style={{ color: item.color }}
//                     >
//                       {item.name}
//                     </span>
//                   </motion.button>
//                 ))}
//               </div>
              
//               {/* Status indicator */}
//               <div className="flex items-center justify-center mt-2 text-xs font-mono text-cyan-400">
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"
//                 />
//                 &gt; System_Online
//               </div>
//             </motion.div>

//             {/* Corner decorations bottom */}
//             <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
//             <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileMenu;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronRight,
  Search,
  Factory,
  Zap,
  Settings,
  Globe,
  Building,
  Activity,
  ExternalLink,
  Eye,
  Bot
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Complete menu structure
  const menuStructure = [
    {
      name: 'Industry',
      icon: Factory,
      color: '#00ffff',
      path: '/industry',
      children: [
        { name: 'Automotive and Tyre', path: '/industry/automotiveandtyre' },
        { name: 'Consumer Goods', path: '/industry/consumergoods' },
        { name: 'Grocery', path: '/industry/grocery' },
        { name: 'Solar and Battery', path: '/industry/solarandbattery' },
        { name: 'Chemicals and Petrochemicals', path: '/industry/chemicalsandpetrochemicals' },
        { name: 'E-Commerce', path: '/industry/ecommerce' },
        { name: 'Pharmaceuticals', path: '/industry/pharmaceuticals' },
        { name: 'Third Party Logistics', path: '/industry/thirdpartylogistics' },
        { name: 'Cold Storage', path: '/industry/coldstorage' },
        { name: 'Fashion', path: '/industry/fashion' },
        { name: 'Semiconductors', path: '/industry/semiconductors' },
      ]
    },
    {
      name: 'Solutions',
      icon: Zap,
      color: '#ff00ff',
      path: '/solutions',
      children: [
        {
          name: 'Functionality',
          path: '/solutions/functionality',
          children: [
            { name: 'Material Movement', path: '/solutions/functionality/materialmovement' },
            { name: 'Sortation', path: '/solutions/functionality/sortation' },
            { name: 'Picking', path: '/solutions/functionality/picking' },
            { name: 'Storage', path: '/solutions/functionality/storage' },
            { name: 'Reverse Logistics', path: '/solutions/functionality/reverselogistics' },
          ]
        },
        {
          name: 'Products',
          path: '/products',
          children: [
            {
              name: 'Mobile Robots',
              children: [
                { name: 'Autonomous Forklift', path: '/products/mobilerobots/autonomousforklift' },
                { name: 'Autonomous Mobile Robot', path: '/products/mobilerobots/autonomousmobilerobot' },
                { name: 'Multi-Carton Picking Robot', path: '/products/mobilerobots/multicartonpickingrobot' },
                { name: 'Rail Guided Vehicle', path: '/products/mobilerobots/railguidedrobot' },
              ]
            },
            {
              name: 'Sorting Robots',
              children: [
                { name: 'Robotic Sorter', path: '/products/sortingrobots/roboticsorter' },
                { name: 'Vertical Sortation Robot', path: '/products/sortingrobots/verticalsortationrobot' },
              ]
            },
            {
              name: 'ASRS',
              children: [
                { name: '4 Way Pallet Shuttle', path: '/products/asrs/4waypalletshuttle' },
                { name: 'Mother-Child Shuttle', path: '/products/asrs/motherchildshuttle' },
                { name: 'Pallet Shuttle', path: '/products/asrs/palletshuttle' },
                { name: 'Crane ASRS', path: '/products/asrs/craneasrs' },
                { name: 'Carton Shuttle', path: '/products/asrs/cartonshuttle' },
                { name: 'Multi Level Shuttle', path: '/products/asrs/multilevelshuttle' },
              ]
            },
            {
              name: 'Picking Systems',
              children: [
                { name: 'Horizontal Carousel', path: '/products/pickingsystems/horizontalcarousel' },
                { name: 'Pick-to-Light', path: '/products/pickingsystems/picktolight' },
              ]
            },
            {
              name: 'Software',
              children: [
                { name: 'Warehouse Management System', path: '/products/software/warehousemanagementsoftware' },
                { name: 'Warehouse Execution System', path: '/products/software/warehouseexecutionsystem' },
                { name: 'Warehouse Control System', path: '/products/software/warehousecontrolsystem' },
                { name: 'Fleet Management System', path: '/products/software/fleetmanagementsystem' },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Service',
      icon: Settings,
      color: '#00ff80',
      path: '/service'
    },
    {
      name: 'News Room',
      icon: Globe,
      color: '#ff8000',
      path: '/newsroom',
      children: [
        { name: 'Case Studies', path: '/newsroom/casestudies' },
        { name: 'Blogs', path: '/newsroom/blogs' },
        { name: 'Whitepapers', path: '/newsroom/whitepapers' },
        { name: 'Events', path: '/newsroom/events' },
        { name: 'News', path: '/newsroom/news' },
        { name: 'Podcasts', path: '/podcastpage' },
        { name: 'Sustainability', path: '/newsroom/sustainability' },
      ]
    },
    {
      name: 'Company',
      icon: Building,
      color: '#8000ff',
      path: '/company',
      children: [
        { name: 'About Us', path: '/company/aboutus' },
        { name: 'Careers', path: '/company/careers' },
        { name: 'Partners', path: '/company/partners' },
      ]
    }
  ];

  // Bottom navigation items with reduced importance
  const bottomNavItems = [
    { name: 'Podcasts', icon: Activity, path: '/podcastpage', color: '#00ffff' },
    { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#ff00ff' },
    { name: 'Blog', icon: Eye, path: '/blog', color: '#00ff80' },
    { name: 'Support', icon: Settings, path: '/support', color: '#ff8000' },
  ];

  const toggleExpanded = (itemPath) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemPath]: !prev[itemPath]
    }));
  };

  const handleItemClick = (item) => {
    if (item.children) {
      toggleExpanded(item.path || item.name);
    } else {
      // Navigate to the page
      window.location.href = item.path;
      onClose();
    }
  };

  const renderMenuItem = (item, depth = 0, parentPath = '') => {
    const itemKey = `${parentPath}-${item.name}`;
    const isExpanded = expandedItems[itemKey] || expandedItems[item.path] || expandedItems[item.name];
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <div
        key={itemKey}
        className="relative"
      >
        <button
          onClick={() => handleItemClick(item)}
          className={`w-full flex items-center justify-between p-2 mx-2 my-1 rounded-lg font-mono font-semibold transition-all duration-200 group text-left relative overflow-hidden ${
            depth === 0 ? 'text-sm' : depth === 1 ? 'text-xs ml-2' : 'text-xs ml-4'
          }`}
          style={{
            background: isExpanded && depth === 0 ? `${item.color}15` : 'transparent',
            borderLeft: isExpanded && depth === 0 ? `3px solid ${item.color}` : 
                       depth > 0 ? '1px solid #475569' : '2px solid transparent',
            paddingLeft: depth > 0 ? `${8 + (depth * 6)}px` : '8px'
          }}
        >
          <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
            {depth === 0 && item.icon && (
              <div
                className="p-2 rounded-lg border relative overflow-hidden transition-transform duration-200"
                style={{
                  background: `${item.color}20`,
                  borderColor: `${item.color}50`,
                  transform: isExpanded ? 'rotate(180deg) scale(1.1)' : 'rotate(0) scale(1)'
                }}
              >
                <item.icon 
                  className="w-4 h-4" 
                  style={{ color: isExpanded ? item.color : '#e2e8f0' }}
                />
              </div>
            )}
            
            <div>
              <div 
                className="font-bold tracking-wider font-mono"
                style={{ 
                  color: isExpanded && depth === 0 ? item.color : '#e2e8f0',
                  fontSize: depth === 0 ? '14px' : depth === 1 ? '12px' : '11px',
                }}
              >
                {depth > 0 && '> '}{item.name}
              </div>
            </div>
          </div>
          
          {hasChildren && (
            <div
              className="relative z-10 transition-transform duration-200"
              style={{ 
                transform: isExpanded ? 'rotate(90deg) scale(1.1)' : 'rotate(0) scale(1)',
                color: isExpanded ? item.color : undefined
              }}
            >
              <ChevronRight 
                className={`w-4 h-4 ${depth === 0 ? 'text-gray-300' : 'text-gray-400'}`}
              />
            </div>
          )}
        </button>

        {/* Submenu with simplified animations */}
        {hasChildren && isExpanded && (
          <div className="overflow-hidden">
            <div>
              {item.children.map((child) => 
                renderMenuItem(child, depth + 1, itemKey)
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - simplified for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel - optimized animations */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{
              type: isMobile ? 'tween' : 'spring',
              duration: isMobile ? 0.25 : undefined,
              stiffness: 300,
              damping: 40
            }}
            className="fixed left-0 top-0 h-full w-72 sm:w-80 bg-slate-800/95 backdrop-blur-xl border-r-2 border-cyan-400/30 z-50 overflow-hidden flex flex-col"
            style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)' }}
          >
            {/* Corner decorations - static on mobile */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />

            {/* Header */}
            <div className="flex-shrink-0 p-4 border-b-2 border-cyan-400/30 relative">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-cyan-400 font-mono">
                  &gt; GLOBAL_ROBOTICS_COMPANY
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white hover:text-cyan-400 rounded-lg border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Logo - simplified animation */}
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                  }}
                >
                  <Bot className="w-4 h-4 text-white relative z-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-400 font-mono">ADDVERB</h2>
                  <div className="text-xs text-cyan-400 font-mono">&gt; Automation_Systems</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  placeholder="&gt; Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-cyan-400/50 rounded-lg text-white text-sm font-mono focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Menu Items - optimized scrolling */}
            <div className="flex-1 overflow-y-auto py-2" style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
              <div>
                {menuStructure.map((item) => (
                  <div key={item.name}>
                    {renderMenuItem(item)}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation - compact design */}
            <div className="flex-shrink-0 border-t border-cyan-400/30 bg-slate-800/80 p-3">
              <div className="grid grid-cols-2 gap-2">
                {bottomNavItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      window.location.href = item.path;
                      onClose();
                    }}
                    className="flex flex-col items-center space-y-1 p-2 rounded-lg font-mono border transition-all relative overflow-hidden group text-xs"
                    style={{
                      background: `${item.color}10`,
                      borderColor: `${item.color}40`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    <span 
                      className="font-bold" 
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Status indicator - simplified */}
              <div className="flex items-center justify-center mt-2 text-xs font-mono text-cyan-400">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                &gt; System_Online
              </div>
            </div>

            {/* Corner decorations bottom */}
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;