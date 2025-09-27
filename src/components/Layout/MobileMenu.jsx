// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Home,
//   Settings,
//   Package,
//   Bot,
//   Phone,
//   X,
//   Zap,
//   Globe,
//   ChevronRight,
//   ChevronDown,
//   Search,
//   Factory,
//   Truck,
//   Cpu,
//   BookOpen,
//   Users,
//   Building,
//   Mic,
//   FileText,
//   MessageSquare,
//   HelpCircle
// } from 'lucide-react';

// const MobileMenu = ({ isOpen, onClose }) => {
//   const [expandedItems, setExpandedItems] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');

//   // Complete menu structure based on your images and App.jsx routes
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
//         { name: 'Podcasts', path: '/newsroom/podcasts' },
//         { name: 'Sustainability', path: '/newsroom/sustainability' },
//       ]
//     },
//     {
//       name: 'Company',
//       icon: Building,
//       color: '#8000ff',
//       path: '/company',
//       children: [
//         { name: 'Careers', path: '/company/careers' },
//         { name: 'About Us', path: '/company/aboutus' },
//         { name: 'Partners', path: '/company/partners' },
//       ]
//     }
//   ];

//   // Bottom navigation items
//   const bottomNavItems = [
//     { name: 'Podcasts', icon: Mic, path: '/podcasts' },
//     { name: 'Enquire', icon: MessageSquare, path: '/enquire' },
//     { name: 'Blog', icon: FileText, path: '/blog' },
//     { name: 'Support', icon: HelpCircle, path: '/support' },
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
//       <div key={itemKey} className="relative">
//         <motion.button
//           onClick={() => handleItemClick(item)}
//           className={`w-full flex items-center justify-between p-3 mx-2 my-1 rounded-lg font-mono font-semibold transition-all duration-300 group text-left ${
//             depth === 0 ? 'text-sm' : depth === 1 ? 'text-xs ml-4' : 'text-xs ml-8'
//           }`}
//           style={{
//             background: isExpanded && depth === 0 ? `${item.color}15` : 'transparent',
//             borderLeft: isExpanded && depth === 0 ? `3px solid ${item.color}` : 
//                        depth > 0 ? '2px solid #333' : '3px solid transparent',
//             paddingLeft: depth > 0 ? `${12 + (depth * 8)}px` : '12px'
//           }}
//           whileHover={{ x: depth === 0 ? 5 : 2 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <div className="flex items-center space-x-3">
//             {depth === 0 && item.icon && (
//               <motion.div
//                 animate={isExpanded ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="p-2 rounded-lg"
//                 style={{
//                   background: `${item.color}20`,
//                   boxShadow: isExpanded ? `0 0 15px ${item.color}40` : 'none',
//                 }}
//               >
//                 <item.icon 
//                   className="w-4 h-4" 
//                   style={{ color: isExpanded ? item.color : '#ffffff' }}
//                 />
//               </motion.div>
//             )}
            
//             <div>
//               <div 
//                 className="font-bold tracking-wider"
//                 style={{ 
//                   color: isExpanded && depth === 0 ? item.color : '#ffffff',
//                   fontSize: depth === 0 ? '14px' : depth === 1 ? '13px' : '12px'
//                 }}
//               >
//                 {item.name}
//               </div>
//             </div>
//           </div>
          
//           {hasChildren && (
//             <motion.div
//               animate={{ rotate: isExpanded ? 90 : 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <ChevronRight 
//                 className={`w-4 h-4 ${depth === 0 ? 'text-white' : 'text-gray-400'}`}
//               />
//             </motion.div>
//           )}
//         </motion.button>

//         {/* Submenu */}
//         <AnimatePresence>
//           {hasChildren && isExpanded && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               {item.children.map((child) => 
//                 renderMenuItem(child, depth + 1, itemKey)
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
//             onClick={onClose}
//           />

//           {/* Menu Panel */}
//           <motion.div
//             initial={{ x: '-100%' }}
//             animate={{ x: '0%' }}
//             exit={{ x: '-100%' }}
//             transition={{
//               type: 'spring',
//               stiffness: 400,
//               damping: 40
//             }}
//             className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-lg border-r border-cyan-400/30 z-50 overflow-hidden flex flex-col"
//           >
//             {/* Header */}
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="flex-shrink-0 p-4 border-b border-cyan-400/30"
//             >
//               {/* Top Bar */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-xs text-gray-400 font-mono">
//                   GLOBAL ROBOTICS COMPANY | 24/7 AFTER SALES SUPPORT
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={onClose}
//                   className="p-1 text-white"
//                 >
//                   <X className="w-5 h-5" />
//                 </motion.button>
//               </div>

//               {/* Logo */}
//               <div className="flex items-center space-x-3 mb-4">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//                   className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center"
//                 >
//                   <Bot className="w-4 h-4 text-cyan-400" />
//                 </motion.div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-red-500 font-sans">ADDVERB</h2>
//                 </div>
//               </div>

//               {/* Search Bar */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search here..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:border-red-500"
//                 />
//               </div>
//             </motion.div>

//             {/* Menu Items */}
//             <div className="flex-1 overflow-y-auto py-2">
//               {menuStructure.map((item) => renderMenuItem(item))}
//             </div>

//             {/* Bottom Navigation */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex-shrink-0 border-t border-gray-200 bg-white"
//             >
//               <div className="flex justify-around py-3">
//                 {bottomNavItems.map((item, index) => (
//                   <motion.button
//                     key={item.name}
//                     onClick={() => {
//                       window.location.href = item.path;
//                       onClose();
//                     }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="flex flex-col items-center space-y-1 text-red-500"
//                   >
//                     <item.icon className="w-6 h-6" />
//                     <span className="text-xs font-medium">{item.name}</span>
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileMenu;

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
  ChevronRight,
  ChevronDown,
  Search,
  Factory,
  Truck,
  Cpu,
  BookOpen,
  Users,
  Building,
  Mic,
  FileText,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Complete menu structure based on your images and App.jsx routes
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
        { name: 'Podcasts', path: '/newsroom/podcasts' },
        { name: 'Sustainability', path: '/newsroom/sustainability' },
      ]
    },
    {
      name: 'Company',
      icon: Building,
      color: '#8000ff',
      path: '/company',
      children: [
        { name: 'Careers', path: '/company/careers' },
        { name: 'About Us', path: '/company/aboutus' },
        { name: 'Partners', path: '/company/partners' },
      ]
    }
  ];

  // Bottom navigation items
  const bottomNavItems = [
    { name: 'Podcasts', icon: Mic, path: '/podcasts', color: '#00ffff' },
    { name: 'Enquire', icon: MessageSquare, path: '/enquire', color: '#ff00ff' },
    { name: 'Blog', icon: FileText, path: '/blog', color: '#00ff80' },
    { name: 'Support', icon: HelpCircle, path: '/support', color: '#ff8000' },
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
      <div key={itemKey} className="relative">
        <motion.button
          onClick={() => handleItemClick(item)}
          className={`w-full flex items-center justify-between p-3 mx-2 my-1 rounded-lg font-mono font-semibold transition-all duration-300 group text-left ${
            depth === 0 ? 'text-sm' : depth === 1 ? 'text-xs ml-4' : 'text-xs ml-8'
          }`}
          style={{
            background: isExpanded && depth === 0 ? `${item.color}15` : 'transparent',
            borderLeft: isExpanded && depth === 0 ? `3px solid ${item.color}` : 
                       depth > 0 ? '2px solid #475569' : '3px solid transparent',
            paddingLeft: depth > 0 ? `${12 + (depth * 8)}px` : '12px'
          }}
          whileHover={{ x: depth === 0 ? 5 : 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            {depth === 0 && item.icon && (
              <motion.div
                animate={isExpanded ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-lg border"
                style={{
                  background: `${item.color}20`,
                  borderColor: `${item.color}50`,
                  boxShadow: isExpanded ? `0 0 15px ${item.color}40` : 'none',
                }}
              >
                <item.icon 
                  className="w-4 h-4" 
                  style={{ color: isExpanded ? item.color : '#e2e8f0' }}
                />
              </motion.div>
            )}
            
            <div>
              <div 
                className="font-bold tracking-wider font-mono"
                style={{ 
                  color: isExpanded && depth === 0 ? item.color : '#e2e8f0',
                  fontSize: depth === 0 ? '14px' : depth === 1 ? '13px' : '12px'
                }}
              >
                {item.name}
              </div>
            </div>
          </div>
          
          {hasChildren && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight 
                className={`w-4 h-4 ${depth === 0 ? 'text-gray-300' : 'text-gray-400'}`}
              />
            </motion.div>
          )}
        </motion.button>

        {/* Submenu */}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {item.children.map((child) => 
                renderMenuItem(child, depth + 1, itemKey)
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
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
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-40"
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
            className="fixed left-0 top-0 h-full w-80 bg-slate-800/95 backdrop-blur-lg border-r border-cyan-400/30 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 p-4 border-b border-cyan-400/30"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-cyan-400 font-mono">
                  &gt; GLOBAL_ROBOTICS_COMPANY | 24/7_SUPPORT
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1 text-white hover:text-cyan-400"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Logo */}
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-red-400 font-mono">ADDVERB</h2>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  placeholder="&gt; Search_here..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-cyan-400/50 rounded-md text-white text-sm font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                />
              </div>
            </motion.div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-2">
              {menuStructure.map((item) => renderMenuItem(item))}
            </div>

            {/* Bottom Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex-shrink-0 border-t border-cyan-400/30 bg-slate-800"
            >
              <div className="grid grid-cols-4 gap-2 py-3 px-4">
                {bottomNavItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      window.location.href = item.path;
                      onClose();
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center space-y-1 p-2 rounded-lg font-mono"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}50`
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    <span className="text-xs font-medium" style={{ color: item.color }}>
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;