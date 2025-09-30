
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Bot,
//   Cpu,
//   Cog,
//   Wrench,
//   ChevronRight,
//   Zap,
//   Settings,
//   Hexagon,
//   Triangle,
//   ArrowRight,
//   Play,
//   Star,
//   Activity,
//   ChevronLeft,
//   ExternalLink,
//   Eye,
//   Award,
//   TrendingUp,
//   Users,
//   Building,
//   Globe,
//   Leaf,
//   Factory,
//   Package,
//   Layers,
//   RotateCcw,
//   Phone
// } from 'lucide-react';

// // Import images
// import sortationImg from '/src/assets/images/functionalities/sortation.jpg';
// import materialMovementImg from '/src/assets/images/functionalities/material-movement.jpg';
// import storageImg from '/src/assets/images/functionalities/storage.jpg';
// import pickingImg from '/src/assets/images/functionalities/picking.jpg';
// import reverseLogisticsImg from '/src/assets/images/functionalities/reverse-logistics.jpg';
// import aiTeaserImg from '/src/assets/images/content/ai-teaser.jpg';
// import woosterCaseStudyImg from '/src/assets/images/content/wooster-case-study.jpg';
// import palletShuttleImg from '/src/assets/images/content/pallet-shuttle.jpg';
// import sasImperialImg from '/src/assets/images/content/sas-imperial.jpg';
// import fleetManagementImg from '/src/assets/images/content/fleet-management.jpg';
// import teamPhotoImg from '/src/assets/images/about/team-photo.jpg';
// import ecoWarehouseImg from '/src/assets/images/sustainability/eco-warehouse.jpg';
// import automationWarehouseImg from '/src/assets/images/contact/automation-warehouse.jpg';

// // Enhanced Particle System with reduced particles for better performance
// const ParticleSystem = () => {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const generateParticles = () => {
//       return Array.from({ length: 80 }, (_, i) => ({
//         id: i,
//         x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//         y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//         size: Math.random() * 3 + 1,
//         speedX: (Math.random() - 0.5) * 1.5,
//         speedY: (Math.random() - 0.5) * 1.5,
//         color: Math.random() > 0.7 ? '#00ffff' : Math.random() > 0.4 ? '#ff00ff' : '#00ff80',
//         pulse: Math.random() * 3 + 1,
//       }));
//     };

//     setParticles(generateParticles());

//     const interval = setInterval(() => {
//       setParticles(prev => prev.map(particle => ({
//         ...particle,
//         x: (particle.x + particle.speedX + (typeof window !== 'undefined' ? window.innerWidth : 1200)) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
//         y: (particle.y + particle.speedY + (typeof window !== 'undefined' ? window.innerHeight : 800)) % (typeof window !== 'undefined' ? window.innerHeight : 800),
//       })));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//       {particles.map(particle => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             left: particle.x,
//             top: particle.y,
//             width: particle.size,
//             height: particle.size,
//             backgroundColor: particle.color,
//             boxShadow: `0 0 ${particle.size * 4}px ${particle.color}40`,
//           }}
//           animate={{
//             opacity: [0.2, 0.6, 0.2],
//             scale: [0.8, 1.2, 0.8],
//           }}
//           transition={{
//             duration: particle.pulse,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Circuit Pattern Background
// const CircuitPattern = () => {
//   return (
//     <div className="fixed inset-0 opacity-5 z-0">
//       <svg width="100%" height="100%" className="absolute inset-0">
//         <defs>
//           <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
//             <rect width="200" height="200" fill="none"/>
//             <path d="M20 20h160v160h-160z" fill="none" stroke="#00ffff" strokeWidth="1"/>
//             <circle cx="20" cy="20" r="4" fill="#00ffff">
//               <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite"/>
//             </circle>
//             <circle cx="180" cy="20" r="4" fill="#ff00ff">
//               <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite"/>
//             </circle>
//             <circle cx="20" cy="180" r="4" fill="#00ff80">
//               <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
//             </circle>
//             <circle cx="180" cy="180" r="4" fill="#ff8000">
//               <animate attributeName="r" values="4;7;4" dur="1.8s" repeatCount="indefinite"/>
//             </circle>
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#circuit)"/>
//       </svg>
//     </div>
//   );
// };

// // Animated Counter Component
// const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime = null;
//     const startCount = 0;
//     const endCount = parseInt(target.toString().replace(/\D/g, ''));

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = (timestamp - startTime) / duration;

//       if (progress < 1) {
//         const currentCount = Math.floor(startCount + (endCount - startCount) * progress);
//         setCount(currentCount);
//         requestAnimationFrame(animate);
//       } else {
//         setCount(endCount);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [isVisible, target, duration]);

//   return (
//     <span ref={counterRef}>
//       {count}{suffix}
//     </span>
//   );
// };

// // Hero Background with lighter theme
// const HeroBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
    
//     {/* Animated Grid */}
//     <div 
//       className="absolute inset-0 opacity-10"
//       style={{
//         backgroundImage: `
//           linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
//         `,
//         backgroundSize: '80px 80px',
//       }}
//     />
    
//     {/* Floating Geometric Shapes */}
//     <motion.div
//       className="absolute inset-0"
//       style={{
//         backgroundImage: `
//           radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0%, transparent 50%),
//           radial-gradient(circle at 80% 70%, rgba(255,0,255,0.08) 0%, transparent 50%),
//           radial-gradient(circle at 60% 20%, rgba(0,255,128,0.06) 0%, transparent 40%)
//         `
//       }}
//       animate={{
//         backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
//       }}
//       transition={{
//         duration: 25,
//         repeat: Infinity,
//         ease: 'linear'
//       }}
//     />
//   </div>
// );

// // Company Logos with cyberpunk style
// const CompanyLogos = () => {
//   const logos = [
//     { name: 'Coca-Cola', color: '#FF0000' },
//     { name: 'DHL', color: '#FFCC00' },
//     { name: 'Peka', color: '#FF6B35' },
//     { name: 'Flipkart', color: '#2874F0' },
//     { name: 'ITC Limited', color: '#003366' },
//     { name: 'Mondial Relay', color: '#8B0000' },
//   ];

//   return (
//     <div className="py-16 bg-slate-800/40 backdrop-blur-sm border-y border-cyan-400/20">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h3 
//           className="text-center text-cyan-400 text-sm font-mono mb-12 tracking-wider"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           &gt; TRUSTED BY INDUSTRY LEADERS WORLDWIDE
//         </motion.h3>
//         <div className="relative overflow-hidden">
//           <motion.div 
//             className="flex space-x-12"
//             animate={{ x: [0, -1200] }}
//             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//           >
//             {[...logos, ...logos].map((logo, index) => (
//               <motion.div
//                 key={index}
//                 className="flex-shrink-0 w-40 h-20 flex items-center justify-center border border-cyan-400/30 rounded-lg bg-slate-800/40 backdrop-blur-sm relative group"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <span 
//                   className="font-bold text-lg font-mono tracking-wider"
//                   style={{ color: logo.color }}
//                 >
//                   {logo.name}
//                 </span>
                
//                 {/* Hover corners */}
//                 <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Enhanced Functionalities Carousel with Techfest-inspired cards
// const FunctionalitiesCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   const functionalities = [
//     {
//       title: 'Sortation',
//       description: 'Scale your business and meet the increased demand with our flexible sortation solutions that increase your efficiency and accuracy.',
//       image: sortationImg,
//       color: '#00ffff',
//       icon: Package
//     },
//     {
//       title: 'Material Movement',
//       description: 'Discover our wide range of robots and automation systems that can help you to improve productivity and lower overall handling costs.',
//       image: materialMovementImg,
//       color: '#ff00ff',
//       icon: Bot
//     },
//     {
//       title: 'Storage',
//       description: 'Optimise your storage space and ensure real time inventory visibility for your pallet and crate handling operations with our automated storage and retrieval system.',
//       image: storageImg,
//       color: '#00ff80',
//       icon: Layers
//     },
//     {
//       title: 'Picking',
//       description: 'Improve the productivity and accuracy of your picking processes for faster order fulfilment with our Pick-to-Light and Pick-by-Voice.',
//       image: pickingImg,
//       color: '#ff8000',
//       icon: Cpu
//     },
//     {
//       title: 'Reverse Logistics',
//       description: 'Streamline your return processes with automated reverse logistics solutions that reduce costs and improve customer satisfaction.',
//       image: reverseLogisticsImg,
//       color: '#ff0080',
//       icon: RotateCcw
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % (functionalities.length - 2));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + (functionalities.length - 2)) % (functionalities.length - 2));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-24 px-6 relative bg-slate-800/20">
//       <CircuitPattern />
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <h2 className="text-4xl md:text-7xl font-bold font-mono tracking-wider mb-4">
//             <span 
//               style={{
//                 background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80)',
//                 backgroundSize: '400% 400%',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 textShadow: '0 0 30px rgba(0,255,255,0.5)',
//               }}
//             >
//               &gt; FUNCTIONALITIES.sys
//             </span>
//           </h2>
//         </motion.div>

//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[500px]">
//             {functionalities.slice(currentIndex, currentIndex + 3).map((item, index) => {
//               const Icon = item.icon;
//               const isHovered = hoveredCard === index;
              
//               return (
//                 <motion.div 
//                   key={index}
//                   className="relative rounded-xl overflow-hidden group cursor-pointer border-2"
//                   style={{
//                     borderColor: item.color,
//                     background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9))`,
//                   }}
//                   initial={{ opacity: 0, y: 100, scale: 0.8 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: index * 0.2, duration: 0.8 }}
//                   whileHover={{ 
//                     scale: 1.05, 
//                     y: -10,
//                     boxShadow: `0 20px 40px ${item.color}40`,
//                     transition: { duration: 0.3 }
//                   }}
//                   onHoverStart={() => setHoveredCard(index)}
//                   onHoverEnd={() => setHoveredCard(null)}
//                 >
//                   {/* Background Image */}
//                   <div 
//                     className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                     style={{
//                       backgroundImage: `url(${item.image})`,
//                       filter: 'brightness(0.3)',
//                     }}
//                   />
                  
//                   {/* Animated Border Effects */}
//                   <motion.div
//                     className="absolute inset-0"
//                     animate={isHovered ? {
//                       background: [
//                         `linear-gradient(90deg, ${item.color}20, transparent, ${item.color}20)`,
//                         `linear-gradient(180deg, ${item.color}20, transparent, ${item.color}20)`,
//                         `linear-gradient(270deg, ${item.color}20, transparent, ${item.color}20)`,
//                         `linear-gradient(360deg, ${item.color}20, transparent, ${item.color}20)`,
//                       ]
//                     } : {}}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
                  
//                   {/* Corner Elements like Techfest */}
//                   <div className="absolute top-4 left-4 w-8 h-8">
//                     <div 
//                       className="w-full h-full border-t-2 border-l-2 opacity-60 group-hover:opacity-100"
//                       style={{ borderColor: item.color }}
//                     />
//                   </div>
//                   <div className="absolute top-4 right-4 w-8 h-8">
//                     <div 
//                       className="w-full h-full border-t-2 border-r-2 opacity-60 group-hover:opacity-100"
//                       style={{ borderColor: item.color }}
//                     />
//                   </div>
//                   <div className="absolute bottom-4 left-4 w-8 h-8">
//                     <div 
//                       className="w-full h-full border-b-2 border-l-2 opacity-60 group-hover:opacity-100"
//                       style={{ borderColor: item.color }}
//                     />
//                   </div>
//                   <div className="absolute bottom-4 right-4 w-8 h-8">
//                     <div 
//                       className="w-full h-full border-b-2 border-r-2 opacity-60 group-hover:opacity-100"
//                       style={{ borderColor: item.color }}
//                     />
//                   </div>
                  
//                   <div className="relative h-full p-6 flex flex-col justify-between z-10">
//                     {/* Icon and Title */}
//                     <div>
//                       <motion.div
//                         animate={{ rotate: isHovered ? 360 : 0 }}
//                         transition={{ duration: 1, ease: "easeInOut" }}
//                         className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border-2"
//                         style={{
//                           background: `${item.color}20`,
//                           borderColor: item.color,
//                           boxShadow: `0 0 20px ${item.color}40`,
//                         }}
//                       >
//                         <Icon className="w-8 h-8" style={{ color: item.color }} />
//                       </motion.div>
                      
//                       <h3 
//                         className="text-2xl font-bold mb-3 font-mono tracking-wider"
//                         style={{ color: item.color }}
//                       >
//                         {item.title}
//                       </h3>
//                       <motion.div 
//                         className="h-1 mb-4"
//                         style={{ backgroundColor: item.color }}
//                         initial={{ width: 0 }}
//                         whileInView={{ width: '3rem' }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                       />
//                     </div>
                    
//                     {/* Description and Button - Hidden by default, shown on hover */}
//                     <AnimatePresence>
//                       {isHovered && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 30 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 30 }}
//                           transition={{ duration: 0.3 }}
//                           className="mt-4"
//                         >
//                           <p className="text-white/90 text-sm leading-relaxed mb-6 font-mono">
//                             {item.description}
//                           </p>
//                           <motion.button
//                             whileHover={{ scale: 1.05, x: 5 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-6 py-2 rounded-lg text-sm font-bold font-mono transition-all flex items-center gap-2 border-2"
//                             style={{
//                               background: `${item.color}20`,
//                               color: item.color,
//                               borderColor: item.color,
//                               boxShadow: `0 0 15px ${item.color}30`,
//                             }}
//                           >
//                             EXPLORE
//                             <ArrowRight className="w-4 h-4" />
//                           </motion.button>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
                  
//                   {/* Hover overlay with sliding effect */}
//                   <motion.div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                       background: `linear-gradient(135deg, ${item.color}10, ${item.color}20)`
//                     }}
//                     initial={{ x: '-100%' }}
//                     animate={isHovered ? { x: 0 } : { x: '-100%' }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Navigation Arrows */}
//           <motion.button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border-2 border-cyan-400/50 bg-slate-800/60 backdrop-blur-sm transition-all z-10 group"
//             whileHover={{ 
//               scale: 1.1,
//               boxShadow: '0 0 30px rgba(0,255,255,0.4)',
//               borderColor: '#00ffff'
//             }}
//           >
//             <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white" />
//           </motion.button>
//           <motion.button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border-2 border-cyan-400/50 bg-slate-800/60 backdrop-blur-sm transition-all z-10 group"
//             whileHover={{ 
//               scale: 1.1,
//               boxShadow: '0 0 30px rgba(0,255,255,0.4)',
//               borderColor: '#00ffff'
//             }}
//           >
//             <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white" />
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Latest Content Section with enhanced animations
// const LatestContent = () => {
//   const content = [
//     {
//       type: 'VIDEO',
//       title: "Addverb's Physical AI Teaser",
//       thumbnail: aiTeaserImg,
//       isVideo: true,
//       color: '#00ffff'
//     },
//     {
//       type: 'CASE STUDY',
//       title: "Wooster's Automated Material Handling",
//       thumbnail: woosterCaseStudyImg,
//       category: 'CASE STUDY',
//       color: '#ff00ff'
//     },
//     {
//       type: 'PRODUCT',
//       title: "Addverb's 4 Way Pallet Shuttle",
//       thumbnail: palletShuttleImg,
//       category: 'PRODUCT',
//       color: '#00ff80'
//     },
//     {
//       type: 'CASE STUDY',
//       title: "SAS Imperial's Automated Distribution Centre",
//       thumbnail: sasImperialImg,
//       category: 'CASE STUDY',
//       color: '#ff8000'
//     },
//     {
//       type: 'WHITEPAPER',
//       title: "3 Real World Fleet Management Success Stories",
//       thumbnail: fleetManagementImg,
//       category: 'WHITEPAPER',
//       color: '#ff0080'
//     }
//   ];

//   return (
//     <section className="py-24 px-6 bg-slate-800/30 border-y border-cyan-400/20">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <h2 className="text-4xl md:text-7xl font-bold mb-4 font-mono tracking-wider">
//             <span 
//               style={{
//                 background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 textShadow: '0 0 30px rgba(0,255,255,0.3)',
//               }}
//             >
//               &gt; LATEST@ADDVERB
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           <motion.div 
//             className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer border-2 border-cyan-400/30"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02, y: -5 }}
//           >
//             <div 
//               className="aspect-video flex items-center justify-center relative overflow-hidden"
//               style={{
//                 background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), linear-gradient(45deg, #00ffff, #ff00ff)',
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.2, rotate: 10 }}
//                 className="p-6 rounded-full border-4 border-white/50 relative z-10"
//                 style={{ boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
//               >
//                 <Play className="w-16 h-16 text-white" />
//               </motion.div>
              
//               {/* Corner decorations */}
//               <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
//               <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
//               <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
//               <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
//             </div>
//           </motion.div>

//           {content.slice(1).map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="relative rounded-xl overflow-hidden group cursor-pointer border-2 border-cyan-400/20"
//             >
//               <div className="aspect-square bg-gray-800 relative overflow-hidden">
//                 <div 
//                   className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                   style={{
//                     backgroundImage: `url(${item.thumbnail})`,
//                   }}
//                 />
//                 <div 
//                   className="absolute inset-0"
//                   style={{
//                     background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))`
//                   }}
//                 />
//               </div>
//               <div className="absolute top-4 left-4">
//                 <span 
//                   className="px-3 py-1 rounded text-xs font-bold font-mono border backdrop-blur-sm"
//                   style={{ 
//                     color: item.color, 
//                     borderColor: item.color,
//                     background: `${item.color}20`,
//                     boxShadow: `0 0 10px ${item.color}30`
//                   }}
//                 >
//                   {item.category}
//                 </span>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h3 className="text-white font-bold text-sm leading-tight font-mono">
//                   {item.title}
//                 </h3>
//               </div>
              
//               {/* Hover overlay */}
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//                 style={{
//                   background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`
//                 }}
//               >
//                 <ExternalLink className="w-8 h-8" style={{ color: item.color }} />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Enhanced Bottom Navigation
// const BottomNavigation = () => {
//   const navItems = [
//     { name: 'Podcasts', icon: Activity, path: '/podcastpage', color: '#00ffff' },
//     { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#ff00ff' },
//     { name: 'Blog', icon: Eye, path: '/blog', color: '#00ff80' },
//     { name: 'Support', icon: Settings, path: '/support', color: '#ff8000' },
//   ];

//   return (
//     <motion.div 
//       className="fixed bottom-6 right-6 z-50"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 2 }}
//     >
//       <div className="flex space-x-3">
//         {navItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <motion.button
//               key={item.name}
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ delay: 2 + index * 0.15, type: "spring" }}
//               whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               className="relative group"
//               onClick={() => window.location.href = item.path}
//             >
//               <div 
//                 className="w-16 h-16 rounded-full flex items-center justify-center border-2 backdrop-blur-sm relative overflow-hidden"
//                 style={{ 
//                   borderColor: item.color,
//                   background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
//                   boxShadow: `0 0 25px ${item.color}50`
//                 }}
//               >
//                 <Icon className="w-7 h-7 text-white relative z-10" />
                
//                 {/* Rotating border */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent"
//                   style={{ borderTopColor: item.color, borderRightColor: item.color }}
//                 />
                
//                 {/* Hover pulse effect */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full"
//                   style={{ background: item.color }}
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0, 0.2, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 />
//               </div>
              
//               {/* Tooltip */}
//               <div 
//                 className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border backdrop-blur-sm"
//                 style={{
//                   background: `${item.color}20`,
//                   color: item.color,
//                   borderColor: item.color,
//                   boxShadow: `0 0 15px ${item.color}30`
//                 }}
//               >
//                 {item.name}.exe
//               </div>
//             </motion.button>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };

// export default function Home() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative overflow-hidden min-h-screen bg-slate-900">
//       {/* Background Effects */}
//       <ParticleSystem />
//       <HeroBackground />
      
//       {/* Cyberpunk Grid Overlay */}
//       <div 
//         className="fixed inset-0 opacity-5 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px'
//         }}
//       />
      
//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative">
//           {/* Status Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute top-20 sm:top-24 left-4 right-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 gap-2 sm:gap-0"
//           >
//             <span>&gt; STATUS: ONLINE</span>
//             <span>&gt; TIME: {currentTime.toLocaleTimeString()}</span>
//             <span className="hidden sm:inline">&gt; AUTOMATION_LEVEL: MAXIMUM</span>
//           </motion.div>

//           {/* Rotating Background Elements */}
//           <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//               className="w-72 sm:w-96 h-72 sm:h-96 border border-cyan-400/20 rounded-full"
//             />
//             <motion.div
//               animate={{ rotate: -360 }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute w-60 sm:w-80 h-60 sm:h-80 border border-purple-500/20 rounded-full"
//             />
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute w-48 sm:w-64 h-48 sm:h-64 border border-pink-500/20 rounded-full"
//             />
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
//             className="relative z-20 max-w-6xl px-4"
//           >
//             {/* Main Title with Enhanced Cyberpunk Effect */}
//             <motion.h1 
//               className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 font-mono tracking-wider text-center"
//               style={{
//                 background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80, #ff8000)',
//                 backgroundSize: '400% 400%',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}
//               animate={{
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                 textShadow: [
//                   '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
//                   '0 0 40px rgba(255,0,255,0.7), 0 0 60px rgba(255,0,255,0.4)',
//                   '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
//                 ],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//             >
//               WAREHOUSE AUTOMATION
//             </motion.h1>
            
//             {/* Subtitle with Glitch Effect */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="relative mb-8 sm:mb-12"
//             >
//               <motion.p
//                 className="text-xl sm:text-2xl md:text-4xl text-white mb-4 font-mono text-center"
//                 animate={{
//                   textShadow: [
//                     '0 0 10px #00ffff, 0 0 20px #00ffff',
//                     '0 0 20px #ff00ff, 0 0 30px #ff00ff',
//                     '0 0 10px #00ffff, 0 0 20px #00ffff',
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 that delivers value!
//               </motion.p>
              
//               {/* Typing Animation */}
//               <motion.p
//                 className="text-base sm:text-lg md:text-xl text-cyan-400 font-mono text-center"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 3, delay: 1 }}
//                 style={{ 
//                   overflow: 'hidden', 
//                   whiteSpace: 'nowrap', 
//                   borderRight: '2px solid #00ffff',
//                   margin: '0 auto'
//                 }}
//               >
//                 &gt; Initializing_future_warehouse_technologies...
//               </motion.p>
//             </motion.div>

//             {/* CTA Button */}
//             <motion.button
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 1 }}
//               whileHover={{ 
//                 scale: 1.05, 
//                 rotateX: 5,
//                 boxShadow: '0 0 50px rgba(0,255,255,0.8)'
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="relative px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold font-mono tracking-wider text-black rounded-xl overflow-hidden group border border-cyan-400"
//               style={{
//                 background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
//                 boxShadow: '0 0 30px rgba(0,255,255,0.5)',
//               }}
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 <Play className="w-4 sm:w-5 h-4 sm:h-5" />
//                 ENTER THE FUTURE
//                 <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
//               </span>
              
//               {/* Button Animation Overlay */}
//               <motion.div
//                 className="absolute inset-0"
//                 style={{
//                   background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
//                 }}
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>
//           </motion.div>
//         </section>

//         {/* Company Logos */}
//         <CompanyLogos />

//         {/* About Section */}
//         <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-800/20 border-y border-cyan-400/20">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 font-mono tracking-wider">
//                 <span 
//                   style={{
//                     background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   &gt; ABOUT US
//                 </span>
//                 <div className="w-16 h-1 bg-cyan-400 mt-4" style={{boxShadow: '0 0 10px #00ffff'}} />
//               </h2>
//               <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed text-white/90 font-mono">
//                 Addverb is a global leader in <span className="text-cyan-400 font-bold">robotics</span>, offering 
//                 innovative <span className="text-cyan-400 font-bold">warehouse automation solutions</span> with 
//                 intelligent robots, powered by modular software. 
//                 We <span className="text-cyan-400 font-bold">transform supply chains</span> and provide our 
//                 clients with a crucial competitive edge.
//               </p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
//                 {[
//                   { number: '350+', label: 'Clients', color: '#00ffff' },
//                   { number: '500+', label: 'Warehouses Automated', color: '#ff00ff' },
//                   { number: '2000+', label: 'Robots Deployed', color: '#00ff80' }
//                 ].map((stat, index) => (
//                   <motion.div 
//                     key={index} 
//                     className="text-center relative group"
//                     whileHover={{ scale: 1.1, y: -5 }}
//                   >
//                     <motion.div
//                       className="absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity"
//                       style={{ borderColor: stat.color, boxShadow: `0 0 20px ${stat.color}30` }}
//                     />
//                     <div className="relative p-4">
//                       <div 
//                         className="text-3xl sm:text-4xl font-bold mb-2 font-mono"
//                         style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}` }}
//                       >
//                         <AnimatedCounter target={stat.number} />
//                       </div>
//                       <div className="text-white/80 font-semibold font-mono text-sm">{stat.label}</div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
              
//               <motion.button
//                 whileHover={{ scale: 1.05, x: 5 }}
//                 className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono transition-colors border border-cyan-400 bg-slate-800/60 text-cyan-400 hover:bg-cyan-400 hover:text-black"
//                 style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
//               >
//                 KNOW MORE
//               </motion.button>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30">
//                 <div 
//                   className="w-full h-64 sm:h-80 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${teamPhotoImg})`,
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
//                 {/* Cyberpunk corners */}
//                 <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
//                 <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
//                 <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
//                 <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Functionalities Carousel */}
//         <FunctionalitiesCarousel />

//         {/* Latest Content */}
//         <LatestContent />

//         {/* Sustainability Section */}
//         <section className="py-16 sm:py-24 px-4 sm:px-6 relative bg-slate-800/40">
//           <CircuitPattern />
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${ecoWarehouseImg})`
//             }}
//           />
//           <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 font-mono tracking-wider">
//                 <span 
//                   style={{
//                     background: 'linear-gradient(90deg, #00ff80, #00ffff)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   &gt; TECHNOLOGICAL ECOLOGY
//                 </span>
//                 <div className="w-16 h-1 bg-green-400 mx-auto mt-4" style={{boxShadow: '0 0 10px #00ff80'}} />
//               </h2>
//               <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed font-mono">
//                 At Addverb, environmental stewardship isn't just a choice; it's our <span className="text-green-400 font-bold">legacy</span> for the 
//                 planet and future generations. Amidst pressing challenges like climate change, 
//                 we're committed to <span className="text-green-400 font-bold">curbing emissions</span> through comprehensive monitoring and 
//                 reduction measures.
//               </p>
//               <p className="text-base sm:text-lg mb-8 sm:mb-10 text-gray-300 font-mono">
//                 Our proactive approach includes creating green belts, leveraging <span className="text-green-400 font-bold">solar energy</span>, 
//                 and optimising energy consumption with efficient robotics and automation systems.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono border border-green-400 bg-slate-800/60 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
//                 style={{ boxShadow: '0 0 20px rgba(0,255,128,0.3)' }}
//               >
//                 READ ESG REPORT
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Form Section */}
//         <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-800/30">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 font-mono tracking-wider">
//                 <span 
//                   style={{
//                     background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   &gt; TALK TO OUR
//                   <br />
//                   AUTOMATION EXPERTS
//                 </span>
//                 <div className="w-16 h-1 bg-purple-400 mt-4" style={{boxShadow: '0 0 10px #ff00ff'}} />
//               </h2>
              
//               <form className="space-y-6">
//                 <motion.select 
//                   whileFocus={{ scale: 1.02 }}
//                   className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
//                 >
//                   <option>&gt; Enquiry Reason*</option>
//                   <option>&gt; Product Information</option>
//                   <option>&gt; Partnership</option>
//                   <option>&gt; Support</option>
//                 </motion.select>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.input 
//                     whileFocus={{ scale: 1.02 }}
//                     type="text" 
//                     placeholder="&gt; Full Name*"
//                     className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
//                   />
//                   <motion.input 
//                     whileFocus={{ scale: 1.02 }}
//                     type="email" 
//                     placeholder="&gt; Email Id*"
//                     className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
//                   />
//                 </div>
                
//                 <motion.input 
//                   whileFocus={{ scale: 1.02 }}
//                   type="tel" 
//                   placeholder="&gt; Mobile with Country Code*"
//                   className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
//                 />
                
//                 <div className="flex items-start space-x-3">
//                   <input type="checkbox" className="mt-1" />
//                   <label className="text-sm text-gray-300 font-mono">
//                     I agree to the Privacy Policy, Terms of Use, and to receive 
//                     promotional emails and other messages from Addverb.
//                   </label>
//                 </div>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05, x: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono border border-purple-400 bg-slate-800/60 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors flex items-center gap-3"
//                   style={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
//                 >
//                   SUBMIT
//                   <ArrowRight className="w-4 h-4" />
//                 </motion.button>
//               </form>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden border border-purple-400/30">
//                 <div 
//                   className="w-full h-64 sm:h-80 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${automationWarehouseImg})`,
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
//                 {/* Cyberpunk corners */}
//                 <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
//                 <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
//                 <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
//                 <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Enhanced Bottom Navigation */}
//       <BottomNavigation />
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Cpu, ChevronRight, Zap, Settings, ArrowRight, Play,
  Activity, ChevronLeft, ExternalLink, Eye, Package, Layers, RotateCcw, Phone
} from 'lucide-react';

// Import images
import sortationImg from '/src/assets/images/functionalities/sortation.jpg';
import materialMovementImg from '/src/assets/images/functionalities/material-movement.jpg';
import storageImg from '/src/assets/images/functionalities/storage.jpg';
import pickingImg from '/src/assets/images/functionalities/picking.jpg';
import reverseLogisticsImg from '/src/assets/images/functionalities/reverse-logistics.jpg';
import aiTeaserImg from '/src/assets/images/content/ai-teaser.jpg';
import woosterCaseStudyImg from '/src/assets/images/content/wooster-case-study.jpg';
import palletShuttleImg from '/src/assets/images/content/pallet-shuttle.jpg';
import sasImperialImg from '/src/assets/images/content/sas-imperial.jpg';
import fleetManagementImg from '/src/assets/images/content/fleet-management.jpg';
import teamPhotoImg from '/src/assets/images/about/team-photo.jpg';
import ecoWarehouseImg from '/src/assets/images/sustainability/eco-warehouse.jpg';
import automationWarehouseImg from '/src/assets/images/contact/automation-warehouse.jpg';

// Particle System - Optimized for mobile
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const generateParticles = () => {
      const particleCount = isMobile ? 20 : 80;
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: Math.random() > 0.7 ? '#00ffff' : Math.random() > 0.4 ? '#ff00ff' : '#00ff80',
        pulse: Math.random() * 3 + 1,
      }));
    };

    setParticles(generateParticles());

    const intervalTime = isMobile ? 100 : 50;
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
      })));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isMobile]);

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
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}40`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
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

// Circuit Pattern - Disabled on mobile
const CircuitPattern = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 opacity-5 z-0">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="none"/>
            <path d="M20 20h160v160h-160z" fill="none" stroke="#00ffff" strokeWidth="1"/>
            <circle cx="20" cy="20" r="4" fill="#00ffff">
              <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="20" r="4" fill="#ff00ff">
              <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="180" r="4" fill="#00ff80">
              <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="180" r="4" fill="#ff8000">
              <animate attributeName="r" values="4;7;4" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};

// Animated Counter
const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startCount = 0;
    const endCount = parseInt(target.toString().replace(/\D/g, ''));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        const currentCount = Math.floor(startCount + (endCount - startCount) * progress);
        setCount(currentCount);
        requestAnimationFrame(animate);
      } else {
        setCount(endCount);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

// Hero Background - Optimized
const HeroBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '120px 120px' : '80px 80px',
        }}
      />
      
      {!isMobile && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255,0,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, rgba(0,255,128,0.06) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}
      {isMobile && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0,255,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255,0,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, rgba(0,255,128,0.06) 0%, transparent 40%)
            `
          }}
        />
      )}
    </div>
  );
};

// Company Logos
const CompanyLogos = () => {
  const logos = [
    { name: 'Coca-Cola', color: '#FF0000' },
    { name: 'DHL', color: '#FFCC00' },
    { name: 'Peka', color: '#FF6B35' },
    { name: 'Flipkart', color: '#2874F0' },
    { name: 'ITC Limited', color: '#003366' },
    { name: 'Mondial Relay', color: '#8B0000' },
  ];

  return (
    <div className="py-16 bg-slate-800/40 backdrop-blur-sm border-y border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3 
          className="text-center text-cyan-400 text-sm font-mono mb-12 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          &gt; TRUSTED BY INDUSTRY LEADERS WORLDWIDE
        </motion.h3>
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-12"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center border border-cyan-400/30 rounded-lg bg-slate-800/40 backdrop-blur-sm relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span 
                  className="font-bold text-lg font-mono tracking-wider"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
                
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Functionalities Carousel - Optimized
const FunctionalitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  const functionalities = [
    {
      title: 'Sortation',
      description: 'Scale your business and meet the increased demand with our flexible sortation solutions that increase your efficiency and accuracy.',
      image: sortationImg,
      color: '#00ffff',
      icon: Package
    },
    {
      title: 'Material Movement',
      description: 'Discover our wide range of robots and automation systems that can help you to improve productivity and lower overall handling costs.',
      image: materialMovementImg,
      color: '#ff00ff',
      icon: Bot
    },
    {
      title: 'Storage',
      description: 'Optimise your storage space and ensure real time inventory visibility for your pallet and crate handling operations with our automated storage and retrieval system.',
      image: storageImg,
      color: '#00ff80',
      icon: Layers
    },
    {
      title: 'Picking',
      description: 'Improve the productivity and accuracy of your picking processes for faster order fulfilment with our Pick-to-Light and Pick-by-Voice.',
      image: pickingImg,
      color: '#ff8000',
      icon: Cpu
    },
    {
      title: 'Reverse Logistics',
      description: 'Streamline your return processes with automated reverse logistics solutions that reduce costs and improve customer satisfaction.',
      image: reverseLogisticsImg,
      color: '#ff0080',
      icon: RotateCcw
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (functionalities.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (functionalities.length - 2)) % (functionalities.length - 2));
  };

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section className="py-24 px-6 relative bg-slate-800/20">
      <CircuitPattern />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-mono tracking-wider mb-4">
            <span 
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0,255,255,0.5)',
              }}
            >
              &gt; FUNCTIONALITIES.sys
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[500px]">
            {functionalities.slice(currentIndex, currentIndex + 3).map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <motion.div 
                  key={index}
                  className="relative rounded-xl overflow-hidden group cursor-pointer border-2"
                  style={{
                    borderColor: item.color,
                    background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9))`,
                  }}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    scale: isMobile ? 1 : 1.05, 
                    y: isMobile ? 0 : -10,
                    boxShadow: `0 20px 40px ${item.color}40`,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => !isMobile && setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onTouchStart={() => setHoveredCard(index)}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: imagesLoaded[index] ? `url(${item.image})` : 'none',
                      backgroundColor: imagesLoaded[index] ? 'transparent' : '#1e293b',
                      filter: 'brightness(0.3)',
                    }}
                  >
                    <img 
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onLoad={() => setImagesLoaded(prev => ({ ...prev, [index]: true }))}
                      className="hidden"
                    />
                  </div>
                  
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0"
                      animate={isHovered ? {
                        background: [
                          `linear-gradient(90deg, ${item.color}20, transparent, ${item.color}20)`,
                          `linear-gradient(180deg, ${item.color}20, transparent, ${item.color}20)`,
                          `linear-gradient(270deg, ${item.color}20, transparent, ${item.color}20)`,
                          `linear-gradient(360deg, ${item.color}20, transparent, ${item.color}20)`,
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  <div className="absolute top-4 left-4 w-8 h-8">
                    <div 
                      className="w-full h-full border-t-2 border-l-2 opacity-60 group-hover:opacity-100"
                      style={{ borderColor: item.color }}
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <div 
                      className="w-full h-full border-t-2 border-r-2 opacity-60 group-hover:opacity-100"
                      style={{ borderColor: item.color }}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8">
                    <div 
                      className="w-full h-full border-b-2 border-l-2 opacity-60 group-hover:opacity-100"
                      style={{ borderColor: item.color }}
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8">
                    <div 
                      className="w-full h-full border-b-2 border-r-2 opacity-60 group-hover:opacity-100"
                      style={{ borderColor: item.color }}
                    />
                  </div>
                  
                  <div className="relative h-full p-6 flex flex-col justify-between z-10">
                    <div>
                      <motion.div
                        animate={{ rotate: isHovered && !isMobile ? 360 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border-2"
                        style={{
                          background: `${item.color}20`,
                          borderColor: item.color,
                          boxShadow: `0 0 20px ${item.color}40`,
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </motion.div>
                      
                      <h3 
                        className="text-2xl font-bold mb-3 font-mono tracking-wider"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h3>
                      <motion.div 
                        className="h-1 mb-4"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '3rem' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 30 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-white/90 text-sm leading-relaxed mb-6 font-mono">
                            {item.description}
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-lg text-sm font-bold font-mono transition-all flex items-center gap-2 border-2"
                            style={{
                              background: `${item.color}20`,
                              color: item.color,
                              borderColor: item.color,
                              boxShadow: `0 0 15px ${item.color}30`,
                            }}
                          >
                            EXPLORE
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}10, ${item.color}20)`
                      }}
                      initial={{ x: '-100%' }}
                      animate={isHovered ? { x: 0 } : { x: '-100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border-2 border-cyan-400/50 bg-slate-800/60 backdrop-blur-sm transition-all z-10 group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(0,255,255,0.4)',
              borderColor: '#00ffff'
            }}
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border-2 border-cyan-400/50 bg-slate-800/60 backdrop-blur-sm transition-all z-10 group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(0,255,255,0.4)',
              borderColor: '#00ffff'
            }}
          >
            <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Latest Content - Optimized
const LatestContent = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  const content = [
    {
      type: 'VIDEO',
      title: "Addverb's Physical AI Teaser",
      thumbnail: aiTeaserImg,
      isVideo: true,
      color: '#00ffff'
    },
    {
      type: 'CASE STUDY',
      title: "Wooster's Automated Material Handling",
      thumbnail: woosterCaseStudyImg,
      category: 'CASE STUDY',
      color: '#ff00ff'
    },
    {
      type: 'PRODUCT',
      title: "Addverb's 4 Way Pallet Shuttle",
      thumbnail: palletShuttleImg,
      category: 'PRODUCT',
      color: '#00ff80'
    },
    {
      type: 'CASE STUDY',
      title: "SAS Imperial's Automated Distribution Centre",
      thumbnail: sasImperialImg,
      category: 'CASE STUDY',
      color: '#ff8000'
    },
    {
      type: 'WHITEPAPER',
      title: "3 Real World Fleet Management Success Stories",
      thumbnail: fleetManagementImg,
      category: 'WHITEPAPER',
      color: '#ff0080'
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-800/30 border-y border-cyan-400/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4 font-mono tracking-wider">
            <span 
              style={{
                background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0,255,255,0.3)',
              }}
            >
              &gt; LATEST@ADDVERB
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <motion.div 
            className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer border-2 border-cyan-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div 
              className="aspect-video flex items-center justify-center relative overflow-hidden"
              style={{
                background: imagesLoaded[0] 
                  ? 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), linear-gradient(45deg, #00ffff, #ff00ff)' 
                  : '#1e293b',
              }}
            >
              <img 
                src={content[0].thumbnail}
                alt={content[0].title}
                loading="lazy"
                onLoad={() => setImagesLoaded(prev => ({ ...prev, 0: true }))}
                className="hidden"
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-6 rounded-full border-4 border-white/50 relative z-10"
                style={{ boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
              >
                <Play className="w-16 h-16 text-white" />
              </motion.div>
              
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
            </div>
          </motion.div>

          {content.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer border-2 border-cyan-400/20"
            >
              <div className="aspect-square bg-gray-800 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: imagesLoaded[index + 1] ? `url(${item.thumbnail})` : 'none',
                    backgroundColor: imagesLoaded[index + 1] ? 'transparent' : '#1e293b',
                  }}
                />
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  onLoad={() => setImagesLoaded(prev => ({ ...prev, [index + 1]: true }))}
                  className="hidden"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))`
                  }}
                />
              </div>
              <div className="absolute top-4 left-4">
                <span 
                  className="px-3 py-1 rounded text-xs font-bold font-mono border backdrop-blur-sm"
                  style={{ 
                    color: item.color, 
                    borderColor: item.color,
                    background: `${item.color}20`,
                    boxShadow: `0 0 10px ${item.color}30`
                  }}
                >
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm leading-tight font-mono">
                  {item.title}
                </h3>
              </div>
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`
                }}
              >
                <ExternalLink className="w-8 h-8" style={{ color: item.color }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Bottom Navigation
const BottomNavigation = () => {
  const navItems = [
    { name: 'Podcasts', icon: Activity, path: '/podcastpage', color: '#00ffff' },
    { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#ff00ff' },
    { name: 'Blog', icon: Eye, path: '/blog', color: '#00ff80' },
    { name: 'Support', icon: Settings, path: '/support', color: '#ff8000' },
  ];

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 hidden md:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="flex space-x-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.name}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2 + index * 0.15, type: "spring" }}
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              onClick={() => window.location.href = item.path}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 backdrop-blur-sm relative overflow-hidden"
                style={{ 
                  borderColor: item.color,
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                  boxShadow: `0 0 25px ${item.color}50`
                }}
              >
                <Icon className="w-7 h-7 text-white relative z-10" />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent"
                  style={{ borderTopColor: item.color, borderRightColor: item.color }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: item.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <div 
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border backdrop-blur-sm"
                style={{
                  background: `${item.color}20`,
                  color: item.color,
                  borderColor: item.color,
                  boxShadow: `0 0 15px ${item.color}30`
                }}
              >
                {item.name}.exe
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-900">
      <ParticleSystem />
      <HeroBackground />
      
      <div 
        className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 sm:top-24 left-4 right-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 gap-2 sm:gap-0"
          >
            <span>&gt; STATUS: ONLINE</span>
            <span>&gt; TIME: {currentTime.toLocaleTimeString()}</span>
            <span className="hidden sm:inline">&gt; AUTOMATION_LEVEL: MAXIMUM</span>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {!isMobile ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-72 sm:w-96 h-72 sm:h-96 border border-cyan-400/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-60 sm:w-80 h-60 sm:h-80 border border-purple-500/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 sm:w-64 h-48 sm:h-64 border border-pink-500/20 rounded-full"
                />
              </>
            ) : (
              <>
                <div className="w-72 h-72 border border-cyan-400/10 rounded-full" />
                <div className="absolute w-60 h-60 border border-purple-500/10 rounded-full" />
                <div className="absolute w-48 h-48 border border-pink-500/10 rounded-full" />
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            className="relative z-20 max-w-6xl px-4"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 font-mono tracking-wider text-center"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80, #ff8000)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
              WAREHOUSE AUTOMATION
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mb-8 sm:mb-12"
            >
              <motion.p
                className="text-xl sm:text-2xl md:text-4xl text-white mb-4 font-mono text-center"
              >
                that delivers value!
              </motion.p>
              
              <motion.p
                className="text-base sm:text-lg md:text-xl text-cyan-400 font-mono text-center"
              >
                &gt; Initializing_future_warehouse_technologies...
              </motion.p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 50px rgba(0,255,255,0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold font-mono tracking-wider text-black rounded-xl overflow-hidden group border border-cyan-400"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                boxShadow: '0 0 30px rgba(0,255,255,0.5)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                ENTER THE FUTURE
                <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
              </span>
              
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

        <CompanyLogos />

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-800/20 border-y border-cyan-400/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 font-mono tracking-wider">
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  &gt; ABOUT US
                </span>
                <div className="w-16 h-1 bg-cyan-400 mt-4" style={{boxShadow: '0 0 10px #00ffff'}} />
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed text-white/90 font-mono">
                Addverb is a global leader in <span className="text-cyan-400 font-bold">robotics</span>, offering 
                innovative <span className="text-cyan-400 font-bold">warehouse automation solutions</span> with 
                intelligent robots, powered by modular software. 
                We <span className="text-cyan-400 font-bold">transform supply chains</span> and provide our 
                clients with a crucial competitive edge.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {[
                  { number: '350+', label: 'Clients', color: '#00ffff' },
                  { number: '500+', label: 'Warehouses Automated', color: '#ff00ff' },
                  { number: '2000+', label: 'Robots Deployed', color: '#00ff80' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center relative group"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: stat.color, boxShadow: `0 0 20px ${stat.color}30` }}
                    />
                    <div className="relative p-4">
                      <div 
                        className="text-3xl sm:text-4xl font-bold mb-2 font-mono"
                        style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}` }}
                      >
                        <AnimatedCounter target={stat.number} />
                      </div>
                      <div className="text-white/80 font-semibold font-mono text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono transition-colors border border-cyan-400 bg-slate-800/60 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
              >
                KNOW MORE
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30">
                <img 
                  src={teamPhotoImg}
                  alt="Team"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </motion.div>
          </div>
        </section>

        <FunctionalitiesCarousel />
        <LatestContent />

        <section className="py-16 sm:py-24 px-4 sm:px-6 relative bg-slate-800/40">
          <CircuitPattern />
          <div className="absolute inset-0">
            <img 
              src={ecoWarehouseImg}
              alt="Eco Warehouse"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.3)',
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
              }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 font-mono tracking-wider">
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #00ff80, #00ffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  &gt; TECHNOLOGICAL ECOLOGY
                </span>
                <div className="w-16 h-1 bg-green-400 mx-auto mt-4" style={{boxShadow: '0 0 10px #00ff80'}} />
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed font-mono">
                At Addverb, environmental stewardship isn't just a choice; it's our <span className="text-green-400 font-bold">legacy</span> for the 
                planet and future generations. Amidst pressing challenges like climate change, 
                we're committed to <span className="text-green-400 font-bold">curbing emissions</span> through comprehensive monitoring and 
                reduction measures.
              </p>
              <p className="text-base sm:text-lg mb-8 sm:mb-10 text-gray-300 font-mono">
                Our proactive approach includes creating green belts, leveraging <span className="text-green-400 font-bold">solar energy</span>, 
                and optimising energy consumption with efficient robotics and automation systems.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono border border-green-400 bg-slate-800/60 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
                style={{ boxShadow: '0 0 20px rgba(0,255,128,0.3)' }}
              >
                READ ESG REPORT
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-800/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 font-mono tracking-wider">
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  &gt; TALK TO OUR
                  <br />
                  AUTOMATION EXPERTS
                </span>
                <div className="w-16 h-1 bg-purple-400 mt-4" style={{boxShadow: '0 0 10px #ff00ff'}} />
              </h2>
              
              <div className="space-y-6">
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                >
                  <option>&gt; Enquiry Reason*</option>
                  <option>&gt; Product Information</option>
                  <option>&gt; Partnership</option>
                  <option>&gt; Support</option>
                </motion.select>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="&gt; Full Name*"
                    className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    placeholder="&gt; Email Id*"
                    className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  />
                </div>
                
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="tel" 
                  placeholder="&gt; Mobile with Country Code*"
                  className="w-full p-3 sm:p-4 bg-slate-800/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                />
                
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-sm text-gray-300 font-mono">
                    I agree to the Privacy Policy, Terms of Use, and to receive 
                    promotional emails and other messages from Addverb.
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 rounded-lg font-semibold font-mono border border-purple-400 bg-slate-800/60 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors flex items-center gap-3"
                  style={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                >
                  SUBMIT
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-purple-400/30">
                <img 
                  src={automationWarehouseImg}
                  alt="Automation Warehouse"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <BottomNavigation />
    </div>
  );
}