// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   Bot,
// //   Cpu,
// //   Cog,
// //   Wrench,
// //   ChevronRight,
// //   Zap,
// //   Settings,
// //   Hexagon,
// //   Triangle,
// //   ArrowRight,
// //   Play,
// //   Star,
// //   Activity
// // } from 'lucide-react';

// // // Enhanced Particle System with Neon Effects
// // const ParticleSystem = () => {
// //   const [particles, setParticles] = useState([]);

// //   useEffect(() => {
// //     const generateParticles = () => {
// //       return Array.from({ length: 80 }, (_, i) => ({
// //         id: i,
// //         x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
// //         y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
// //         size: Math.random() * 4 + 1,
// //         speedX: (Math.random() - 0.5) * 1.5,
// //         speedY: (Math.random() - 0.5) * 1.5,
// //         color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
// //         pulse: Math.random() * 2 + 1,
// //       }));
// //     };

// //     setParticles(generateParticles());

// //     const interval = setInterval(() => {
// //       setParticles(prev => prev.map(particle => ({
// //         ...particle,
// //         x: (particle.x + particle.speedX + (typeof window !== 'undefined' ? window.innerWidth : 1200)) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
// //         y: (particle.y + particle.speedY + (typeof window !== 'undefined' ? window.innerHeight : 800)) % (typeof window !== 'undefined' ? window.innerHeight : 800),
// //       })));
// //     }, 50);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
// //       {particles.map(particle => (
// //         <motion.div
// //           key={particle.id}
// //           className="absolute rounded-full"
// //           style={{
// //             left: particle.x,
// //             top: particle.y,
// //             width: particle.size,
// //             height: particle.size,
// //             backgroundColor: particle.color,
// //             boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
// //           }}
// //           animate={{
// //             opacity: [0.3, 0.8, 0.3],
// //             scale: [1, 1.2, 1],
// //           }}
// //           transition={{
// //             duration: particle.pulse,
// //             repeat: Infinity,
// //             ease: "easeInOut"
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // // Enhanced Circuit Pattern with Animated Lines
// // const CircuitPattern = () => {
// //   return (
// //     <div className="fixed inset-0 opacity-15 z-0">
// //       <svg width="100%" height="100%" className="absolute inset-0">
// //         <defs>
// //           <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
// //             <rect width="120" height="120" fill="none"/>
// //             <path d="M10 10h100v100h-100z" fill="none" stroke="#00ffff" strokeWidth="1"/>
// //             <circle cx="10" cy="10" r="3" fill="#00ffff">
// //               <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
// //             </circle>
// //             <circle cx="110" cy="10" r="3" fill="#ff00ff">
// //               <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
// //             </circle>
// //             <circle cx="10" cy="110" r="3" fill="#00ffff">
// //               <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
// //             </circle>
// //             <circle cx="110" cy="110" r="3" fill="#ff00ff">
// //               <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
// //             </circle>
// //             <path d="M30 10v30h50v-30M10 40h30v40h-30" fill="none" stroke="#00ffff" strokeWidth="1"/>
// //             <path d="M80 40h30v40h-30M40 80v30h30v-30" fill="none" stroke="#ff00ff" strokeWidth="1"/>
// //           </pattern>
// //         </defs>
// //         <rect width="100%" height="100%" fill="url(#circuit)"/>
// //       </svg>
// //     </div>
// //   );
// // };

// // // Futuristic Service Card with Enhanced Animations
// // const ServiceCard = ({ title, icon: Icon, price, description, delay, index }) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   const cardColors = [
// //     { primary: '#00ffff', secondary: '#0080ff' },
// //     { primary: '#ff00ff', secondary: '#ff0080' },
// //     { primary: '#00ff80', secondary: '#80ff00' },
// //     { primary: '#ff8000', secondary: '#ffff00' },
// //   ];

// //   const color = cardColors[index % cardColors.length];

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 100, rotateX: -15 }}
// //       animate={{ opacity: 1, y: 0, rotateX: 0 }}
// //       transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
// //       whileHover={{ 
// //         scale: 1.05, 
// //         rotateY: 10, 
// //         z: 50,
// //         transition: { duration: 0.3 }
// //       }}
// //       onHoverStart={() => setIsHovered(true)}
// //       onHoverEnd={() => setIsHovered(false)}
// //       className="relative group cursor-pointer"
// //       style={{ perspective: "1000px" }}
// //     >
// //       <div className="relative bg-black/80 border rounded-2xl p-6 overflow-hidden backdrop-blur-sm">
// //         {/* Animated Border */}
// //         <motion.div 
// //           className="absolute inset-0 rounded-2xl"
// //           style={{
// //             background: `linear-gradient(45deg, ${color.primary}40, ${color.secondary}40, ${color.primary}40)`,
// //             backgroundSize: '200% 200%',
// //           }}
// //           animate={{
// //             backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// //           }}
// //           transition={{
// //             duration: 3,
// //             repeat: Infinity,
// //             ease: "linear"
// //           }}
// //         />
        
// //         {/* Inner Content Container */}
// //         <div className="relative z-10 bg-black/60 rounded-xl p-4 border border-white/10">
// //           {/* Icon with Rotation Animation */}
// //           <motion.div
// //             animate={{ 
// //               rotate: isHovered ? 360 : 0,
// //               scale: isHovered ? 1.1 : 1,
// //             }}
// //             transition={{ duration: 0.8, ease: "easeInOut" }}
// //             className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center relative"
// //             style={{
// //               background: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
// //               boxShadow: `0 0 20px ${color.primary}50`,
// //             }}
// //           >
// //             <Icon className="w-8 h-8 text-black font-bold" />
            
// //             {/* Pulsing Ring */}
// //             <motion.div
// //               className="absolute inset-0 rounded-xl border-2"
// //               style={{ borderColor: color.primary }}
// //               animate={{
// //                 scale: [1, 1.2, 1],
// //                 opacity: [1, 0, 1],
// //               }}
// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity,
// //                 ease: "easeInOut"
// //               }}
// //             />
// //           </motion.div>
          
// //           <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">
// //             {title}
// //           </h3>
// //           <p className="text-gray-300 text-sm mb-4 leading-relaxed">
// //             {description}
// //           </p>
          
// //           <div className="flex items-center justify-between">
// //             <motion.span 
// //               className="font-bold text-lg font-mono"
// //               style={{ color: color.primary }}
// //               animate={{
// //                 textShadow: isHovered ? `0 0 10px ${color.primary}` : 'none',
// //               }}
// //             >
// //               {price}
// //             </motion.span>
// //             <motion.button
// //               whileHover={{ scale: 1.1, x: 5 }}
// //               whileTap={{ scale: 0.9 }}
// //               className="px-6 py-2 rounded-lg text-sm font-bold text-black transition-all duration-300 flex items-center gap-2"
// //               style={{
// //                 background: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
// //                 boxShadow: `0 0 15px ${color.primary}30`,
// //               }}
// //             >
// //               EXPLORE
// //               <ArrowRight className="w-4 h-4" />
// //             </motion.button>
// //           </div>
// //         </div>
        
// //         {/* Hover Overlay */}
// //         <AnimatePresence>
// //           {isHovered && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="absolute inset-0 rounded-2xl flex items-center justify-center backdrop-blur-sm z-20"
// //               style={{
// //                 background: `linear-gradient(135deg, ${color.primary}20, ${color.secondary}20)`,
// //               }}
// //             >
// //               <motion.div
// //                 initial={{ scale: 0, rotate: -180 }}
// //                 animate={{ scale: 1, rotate: 0 }}
// //                 exit={{ scale: 0, rotate: 180 }}
// //                 className="text-center"
// //               >
// //                 <Bot className="w-16 h-16 mx-auto mb-4" style={{ color: color.primary }} />
// //                 <p className="text-white font-bold text-lg font-mono">FUTURE TECH</p>
// //                 <motion.div
// //                   animate={{ rotate: 360 }}
// //                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
// //                   className="w-8 h-8 border-2 border-t-transparent rounded-full mx-auto mt-2"
// //                   style={{ borderColor: color.primary }}
// //                 />
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // Floating Geometric Shapes
// // const FloatingShapes = () => {
// //   const shapes = [
// //     { Icon: Hexagon, delay: 0, duration: 8 },
// //     { Icon: Triangle, delay: 2, duration: 10 },
// //     { Icon: Settings, delay: 4, duration: 12 },
// //     { Icon: Zap, delay: 6, duration: 6 },
// //   ];

// //   return (
// //     <div className="fixed inset-0 pointer-events-none z-5">
// //       {shapes.map(({ Icon, delay, duration }, index) => (
// //         <motion.div
// //           key={index}
// //           className="absolute"
// //           style={{
// //             left: `${20 + (index * 20)}%`,
// //             top: `${30 + (index * 15)}%`,
// //           }}
// //           animate={{
// //             y: [0, -30, 0],
// //             rotate: [0, 360],
// //             scale: [1, 1.2, 1],
// //           }}
// //           transition={{
// //             duration,
// //             delay,
// //             repeat: Infinity,
// //             ease: "easeInOut"
// //           }}
// //         >
// //           <Icon 
// //             className="w-12 h-12 text-cyan-400 opacity-20" 
// //             style={{
// //               filter: 'drop-shadow(0 0 10px #00ffff40)',
// //             }}
// //           />
// //         </motion.div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default function Home() {
// //   const [currentTime, setCurrentTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const services = [
// //     {
// //       title: "ARTIFICIAL INTELLIGENCE",
// //       icon: Bot,
// //       price: "₹1699",
// //       description: "Advanced AI systems with neural networks, deep learning algorithms, and cognitive computing solutions for next-gen automation."
// //     },
// //     {
// //       title: "MACHINE LEARNING",
// //       icon: Cpu,
// //       price: "₹1699", 
// //       description: "Comprehensive ML frameworks with predictive analytics, pattern recognition, and intelligent data processing capabilities."
// //     },
// //     {
// //       title: "ROBOTICS AUTOMATION",
// //       icon: Cog,
// //       price: "₹1299",
// //       description: "Cutting-edge robotic systems with autonomous navigation, precision control, and adaptive learning mechanisms."
// //     },
// //     {
// //       title: "INDUSTRIAL IoT",
// //       icon: Wrench,
// //       price: "₹1999",
// //       description: "Smart industrial solutions with real-time monitoring, predictive maintenance, and seamless connectivity protocols."
// //     }
// //   ];

// //   return (
// //     <div className="relative overflow-hidden min-h-screen bg-black">
// //       {/* Background Effects */}
// //       <CircuitPattern />
// //       <ParticleSystem />
// //       <FloatingShapes />
      
// //       {/* Cyberpunk Grid Overlay */}
// //       <div 
// //         className="fixed inset-0 opacity-5 z-0"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
// //           `,
// //           backgroundSize: '50px 50px'
// //         }}
// //       />
      
// //       {/* Main Content */}
// //       <div className="relative z-10">
// //         {/* Hero Section */}
// //         <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
// //           {/* Status Bar */}
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="absolute top-24 left-6 right-6 flex justify-between items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-black/60 backdrop-blur-sm rounded-lg p-3"
// //           >
// //             <span>STATUS: ONLINE</span>
// //             <span>TIME: {currentTime.toLocaleTimeString()}</span>
// //             <span>USERS: 50K+ ACTIVE</span>
// //           </motion.div>

// //           {/* Rotating Background Elements */}
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <motion.div
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
// //               className="w-96 h-96 border border-cyan-400/20 rounded-full"
// //             />
// //             <motion.div
// //               animate={{ rotate: -360 }}
// //               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
// //               className="absolute w-80 h-80 border border-purple-500/20 rounded-full"
// //             />
// //             <motion.div
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //               className="absolute w-64 h-64 border border-pink-500/20 rounded-full"
// //             />
// //           </div>

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8, y: 50 }}
// //             animate={{ opacity: 1, scale: 1, y: 0 }}
// //             transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
// //             className="relative z-20 max-w-6xl"
// //           >
// //             {/* Main Title */}
// //             <motion.h1 
// //               className="text-4xl md:text-8xl font-bold mb-6 font-mono tracking-wider"
// //               style={{
// //                 background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80, #ff8000)',
// //                 backgroundSize: '400% 400%',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //                 backgroundClip: 'text',
// //                 textShadow: '0 0 50px rgba(0,255,255,0.5)',
// //               }}
// //               animate={{
// //                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// //               }}
// //               transition={{
// //                 duration: 5,
// //                 repeat: Infinity,
// //                 ease: "linear"
// //               }}
// //             >
// //               ADDVERB
// //             </motion.h1>
            
// //             {/* Glitch Effect Subtitle */}
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5 }}
// //               className="relative mb-8"
// //             >
// //               <motion.p
// //                 className="text-xl md:text-4xl text-white mb-2 font-mono"
// //                 animate={{
// //                   textShadow: [
// //                     '0 0 10px #00ffff',
// //                     '0 0 20px #ff00ff',
// //                     '0 0 10px #00ffff',
// //                   ],
// //                 }}
// //                 transition={{
// //                   duration: 2,
// //                   repeat: Infinity,
// //                   ease: "easeInOut"
// //                 }}
// //               >
// //                 ASIA'S LARGEST ROBOTICS FESTIVAL
// //               </motion.p>
              
// //               {/* Typing Animation */}
// //               <motion.p
// //                 className="text-lg md:text-xl text-cyan-400 font-mono"
// //                 initial={{ width: 0 }}
// //                 animate={{ width: "100%" }}
// //                 transition={{ duration: 3, delay: 1 }}
// //                 style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderRight: '2px solid #00ffff' }}
// //               >
// //                 &gt; Initializing future technologies...
// //               </motion.p>
// //             </motion.div>

// //             {/* Tech Tags */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.8, duration: 1 }}
// //               className="flex flex-wrap justify-center gap-4 mb-12"
// //             >
// //               {[
// //                 { text: "ROBOTICS", color: "#00ffff" },
// //                 { text: "AUTOMATION", color: "#ff00ff" },
// //                 { text: "AI/ML", color: "#00ff80" },
// //                 { text: "IoT", color: "#ff8000" }
// //               ].map((tag, index) => (
// //                 <motion.span
// //                   key={tag.text}
// //                   className="px-6 py-3 border rounded-full font-mono font-bold text-sm tracking-widest cursor-pointer"
// //                   style={{
// //                     borderColor: tag.color,
// //                     color: tag.color,
// //                     background: `${tag.color}10`,
// //                     boxShadow: `0 0 15px ${tag.color}30`,
// //                   }}
// //                   whileHover={{
// //                     scale: 1.1,
// //                     boxShadow: `0 0 25px ${tag.color}60`,
// //                   }}
// //                   animate={{
// //                     borderColor: [tag.color, `${tag.color}80`, tag.color],
// //                   }}
// //                   transition={{
// //                     duration: 2 + index * 0.5,
// //                     repeat: Infinity,
// //                     ease: "easeInOut"
// //                   }}
// //                 >
// //                   {tag.text}
// //                 </motion.span>
// //               ))}
// //             </motion.div>

// //             {/* CTA Button */}
// //             <motion.button
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 1.2, duration: 1 }}
// //               whileHover={{ 
// //                 scale: 1.05, 
// //                 rotateX: 5,
// //               }}
// //               whileTap={{ scale: 0.95 }}
// //               className="relative px-12 py-4 text-lg font-bold font-mono tracking-wider text-black rounded-2xl overflow-hidden group"
// //               style={{
// //                 background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
// //                 boxShadow: '0 0 30px rgba(0,255,255,0.5)',
// //               }}
// //             >
// //               <span className="relative z-10 flex items-center gap-3">
// //                 <Play className="w-5 h-5" />
// //                 ENTER THE FUTURE
// //                 <Zap className="w-5 h-5" />
// //               </span>
              
// //               {/* Button Animation Overlay */}
// //               <motion.div
// //                 className="absolute inset-0"
// //                 style={{
// //                   background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
// //                 }}
// //                 initial={{ x: '-100%' }}
// //                 whileHover={{ x: 0 }}
// //                 transition={{ duration: 0.3 }}
// //               />
// //             </motion.button>
// //           </motion.div>
// //         </section>

// //         {/* Services Section */}
// //         <section className="py-20 px-6 relative">
// //           {/* Section Header */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center mb-20"
// //           >
// //             <motion.h2 
// //               className="text-4xl md:text-7xl font-bold mb-6 font-mono tracking-wider"
// //               style={{
// //                 background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //                 textShadow: '0 0 30px rgba(0,255,255,0.3)',
// //               }}
// //             >
// //               QUANTUM WORKSHOPS
// //             </motion.h2>
// //             <motion.p 
// //               className="text-gray-300 text-lg max-w-3xl mx-auto font-mono leading-relaxed"
// //               animate={{
// //                 color: ['#888', '#00ffff', '#888'],
// //               }}
// //               transition={{
// //                 duration: 3,
// //                 repeat: Infinity,
// //                 ease: "easeInOut"
// //               }}
// //             >
// //               &gt; Experience cutting-edge technology workshops designed for the next generation of innovators
// //             </motion.p>
// //           </motion.div>

// //           {/* Services Grid */}
// //           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {services.map((service, index) => (
// //               <ServiceCard
// //                 key={service.title}
// //                 {...service}
// //                 delay={index * 0.3}
// //                 index={index}
// //               />
// //             ))}
// //           </div>
// //         </section>

// //         {/* Enhanced Stats Section */}
// //         <section className="py-20 px-6 relative">
// //           {/* Neon Background */}
// //           <div 
// //             className="absolute inset-0 opacity-20"
// //             style={{
// //               background: 'radial-gradient(ellipse at center, #00ffff20, transparent 70%)',
// //             }}
// //           />
          
// //           <div className="max-w-6xl mx-auto relative z-10">
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 1 }}
// //               className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
// //             >
// //               {[
// //                 { number: "50K+", label: "PARTICIPANTS", icon: Bot },
// //                 { number: "200+", label: "WORKSHOPS", icon: Cog },
// //                 { number: "100+", label: "COMPANIES", icon: Settings },
// //                 { number: "25+", label: "COUNTRIES", icon: Star }
// //               ].map((stat, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 50, scale: 0.5 }}
// //                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
// //                   whileHover={{ scale: 1.1, rotateY: 5 }}
// //                   className="group cursor-pointer relative"
// //                 >
// //                   <motion.div
// //                     className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-black/40"
// //                     whileHover={{
// //                       borderColor: '#00ffff',
// //                       boxShadow: '0 0 30px rgba(0,255,255,0.3)',
// //                     }}
// //                   />
                  
// //                   <div className="relative z-10 p-6">
// //                     <motion.div
// //                       animate={{ rotate: [0, 360] }}
// //                       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// //                       className="w-12 h-12 mx-auto mb-4 text-cyan-400"
// //                     >
// //                       <stat.icon className="w-full h-full" />
// //                     </motion.div>
                    
// //                     <motion.h3 
// //                       className="text-3xl md:text-5xl font-bold mb-2 font-mono"
// //                       style={{
// //                         background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
// //                         WebkitBackgroundClip: 'text',
// //                         WebkitTextFillColor: 'transparent',
// //                       }}
// //                       animate={{
// //                         scale: [1, 1.1, 1],
// //                       }}
// //                       transition={{
// //                         duration: 2,
// //                         repeat: Infinity,
// //                         delay: index * 0.5,
// //                       }}
// //                     >
// //                       {stat.number}
// //                     </motion.h3>
// //                     <p className="text-gray-400 font-semibold font-mono tracking-wide text-sm">
// //                       {stat.label}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Footer CTA */}
// //         <section className="py-20 px-6 text-center">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="max-w-4xl mx-auto"
// //           >
// //             <motion.h3 
// //               className="text-2xl md:text-4xl font-bold mb-6 font-mono"
// //               style={{
// //                 background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ff80)',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //                 backgroundSize: '200% 200%',
// //               }}
// //               animate={{
// //                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// //               }}
// //               transition={{
// //                 duration: 4,
// //                 repeat: Infinity,
// //                 ease: "linear"
// //               }}
// //             >
// //               READY TO BUILD THE FUTURE?
// //             </motion.h3>
// //             <motion.p 
// //               className="text-gray-300 mb-8 font-mono text-lg"
// //               animate={{
// //                 opacity: [0.7, 1, 0.7],
// //               }}
// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity,
// //               }}
// //             >
// //               &gt; Join thousands of innovators shaping tomorrow's technology
// //             </motion.p>
// //             <motion.button
// //               whileHover={{ scale: 1.1, rotateX: 10 }}
// //               whileTap={{ scale: 0.9 }}
// //               className="px-10 py-4 font-bold font-mono text-black rounded-xl relative overflow-hidden"
// //               style={{
// //                 background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
// //                 boxShadow: '0 0 40px rgba(0,255,255,0.4)',
// //               }}
// //             >
// //               <span className="flex items-center gap-3">
// //                 <Zap className="w-5 h-5" />
// //                 START YOUR JOURNEY
// //                 <ArrowRight className="w-5 h-5" />
// //               </span>
// //             </motion.button>
// //           </motion.div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }




// //CODE2
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
//   Leaf
// } from 'lucide-react';

// // Enhanced Particle System
// const ParticleSystem = () => {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const generateParticles = () => {
//       return Array.from({ length: 60 }, (_, i) => ({
//         id: i,
//         x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//         y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//         size: Math.random() * 3 + 1,
//         speedX: (Math.random() - 0.5) * 1,
//         speedY: (Math.random() - 0.5) * 1,
//         color: Math.random() > 0.7 ? '#00ffff' : '#ff00ff',
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

// // Hero Video Background Component
// const HeroVideoBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     {/* Simulated warehouse video background */}
//     <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
//     <motion.div
//       className="absolute inset-0"
//       style={{
//         backgroundImage: `
//           radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%),
//           radial-gradient(circle at 80% 50%, rgba(255,0,255,0.1) 0%, transparent 50%),
//           linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.05) 50%, transparent 100%)
//         `
//       }}
//       animate={{
//         backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: 'linear'
//       }}
//     />
//   </div>
// );

// // Company Logos Carousel
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
//     <div className="py-12 bg-black/20 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h3 
//           className="text-center text-white/60 text-sm font-mono mb-8 tracking-wider"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           TRUSTED BY INDUSTRY LEADERS WORLDWIDE
//         </motion.h3>
//         <motion.div 
//           className="flex justify-center items-center space-x-12 overflow-hidden"
//           animate={{ x: [0, -1200] }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <motion.div
//               key={index}
//               className="flex-shrink-0 w-32 h-16 flex items-center justify-center border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
//               whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
//             >
//               <span 
//                 className="font-bold text-lg"
//                 style={{ color: logo.color }}
//               >
//                 {logo.name}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Functionalities Carousel
// const FunctionalitiesCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const functionalities = [
//     {
//       title: 'Sortation',
//       description: 'Scale your business and meet the increased demand with our flexible sortation solutions that increase your efficiency and accuracy.',
//       image: '/api/placeholder/400/300',
//       color: '#FF4444'
//     },
//     {
//       title: 'Material Movement',
//       description: 'Discover our wide range of robots and automation systems that can help you to improve productivity and lower overall handling costs.',
//       image: '/api/placeholder/400/300',
//       color: '#44FF44'
//     },
//     {
//       title: 'Storage',
//       description: 'Optimise your storage space and ensure real time inventory visibility for your pallet and crate handling operations with our automated storage and retrieval system.',
//       image: '/api/placeholder/400/300',
//       color: '#4444FF'
//     },
//     {
//       title: 'Picking',
//       description: 'Improve the productivity and accuracy of your picking processes for faster order fulfilment with our Pick-to-Light and Pick-by-Voice.',
//       image: '/api/placeholder/400/300',
//       color: '#FF44FF'
//     },
//     {
//       title: 'Reverse Logistics',
//       description: 'Streamline your return processes with automated reverse logistics solutions that reduce costs and improve customer satisfaction.',
//       image: '/api/placeholder/400/300',
//       color: '#44FFFF'
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % functionalities.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + functionalities.length) % functionalities.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 px-6 relative">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2 
//           className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Functionalities
//           <div className="w-16 h-1 bg-red-500 mx-auto mt-4" />
//         </motion.h2>

//         <div className="relative">
//           <motion.div 
//             className="flex overflow-hidden rounded-2xl"
//             style={{ height: '400px' }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ x: 300, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -300, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full flex"
//               >
//                 {functionalities.slice(currentIndex, currentIndex + 3).map((item, index) => (
//                   <div 
//                     key={index}
//                     className="flex-1 mx-2 relative rounded-xl overflow-hidden group cursor-pointer"
//                     style={{
//                       backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${item.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                     }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//                     <div className="relative h-full p-6 flex flex-col justify-end">
//                       <div className="mb-4">
//                         <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
//                         <div className="w-8 h-1 bg-red-500 mb-4" />
//                       </div>
                      
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         whileHover={{ opacity: 1, height: 'auto' }}
//                         className="overflow-hidden"
//                       >
//                         <p className="text-white/90 text-sm leading-relaxed mb-4">
//                           {item.description}
//                         </p>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
//                         >
//                           Know More
//                         </motion.button>
//                       </motion.div>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors z-10"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors z-10"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Latest Content Section
// const LatestContent = () => {
//   const content = [
//     {
//       type: 'VIDEO',
//       title: "Addverb's Physical AI Teaser",
//       thumbnail: '/api/placeholder/400/300',
//       isVideo: true
//     },
//     {
//       type: 'CASE STUDY',
//       title: "Wooster's Automated Material Handling",
//       thumbnail: '/api/placeholder/400/300',
//       category: 'CASE STUDY'
//     },
//     {
//       type: 'PRODUCT',
//       title: "Addverb's 4 Way Pallet Shuttle",
//       thumbnail: '/api/placeholder/400/300',
//       category: 'PRODUCT'
//     },
//     {
//       type: 'CASE STUDY',
//       title: "SAS Imperial's Automated Distribution Centre",
//       thumbnail: '/api/placeholder/400/300',
//       category: 'CASE STUDY'
//     },
//     {
//       type: 'WHITEPAPER',
//       title: "3 Real World Fleet Management Success Stories",
//       thumbnail: '/api/placeholder/400/300',
//       category: 'WHITEPAPER'
//     }
//   ];

//   return (
//     <section className="py-20 px-6 bg-black/30">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2 
//           className="text-4xl md:text-6xl font-bold text-white mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Latest @ Addverb
//           <div className="w-16 h-1 bg-red-500 mt-4" />
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           <motion.div 
//             className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="aspect-video bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
//               <Play className="w-16 h-16 text-white" />
//             </div>
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <Play className="w-20 h-20 text-white" />
//             </div>
//           </motion.div>

//           {content.slice(1).map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="relative rounded-xl overflow-hidden group cursor-pointer"
//             >
//               <div className="aspect-square bg-gray-800">
//                 <img 
//                   src={item.thumbnail} 
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute top-4 left-4">
//                 <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
//                   {item.category}
//                 </span>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
//                 <h3 className="text-white font-bold text-sm leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
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
//     { name: 'Podcasts', icon: Activity, path: '/podcasts', color: '#FF4444' },
//     { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#44FF44' },
//     { name: 'Blog', icon: Eye, path: '/blog', color: '#4444FF' },
//     { name: 'Support', icon: Settings, path: '/support', color: '#FF44FF' },
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
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 2 + index * 0.1 }}
//               whileHover={{ scale: 1.1, y: -5 }}
//               whileTap={{ scale: 0.9 }}
//               className="relative group"
//               onClick={() => window.location.href = item.path}
//             >
//               <div 
//                 className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
//                 style={{ 
//                   background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
//                   boxShadow: `0 0 20px ${item.color}30`
//                 }}
//               >
//                 <Icon className="w-6 h-6 text-white" />
//               </div>
              
//               {/* Tooltip */}
//               <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                 {item.name}
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
//     <div className="relative overflow-hidden min-h-screen bg-black">
//       {/* Background Effects */}
//       <ParticleSystem />
//       <HeroVideoBackground />
      
//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
//           {/* Status Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute top-24 left-6 right-6 flex justify-between items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-black/40 backdrop-blur-sm rounded-lg p-3"
//           >
//             <span>STATUS: ONLINE</span>
//             <span>TIME: {currentTime.toLocaleTimeString()}</span>
//             <span>USERS: 50K+ ACTIVE</span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
//             className="relative z-20 max-w-6xl"
//           >
//             {/* Main Title */}
//             <motion.h1 
//               className="text-6xl md:text-8xl font-bold mb-8 text-white"
//               animate={{
//                 textShadow: [
//                   '0 0 20px rgba(255,255,255,0.5)',
//                   '0 0 40px rgba(0,255,255,0.7)',
//                   '0 0 20px rgba(255,255,255,0.5)',
//                 ],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               Warehouse Automation
//               <br />
//               <span className="text-4xl md:text-6xl text-gray-300">
//                 that delivers value!
//               </span>
//             </motion.h1>

//             {/* CTA Button */}
//             <motion.button
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-12 py-4 rounded-full text-lg font-bold shadow-2xl"
//             >
//               <Play className="inline w-5 h-5 mr-3" />
//               ENTER THE FUTURE
//               <Zap className="inline w-5 h-5 ml-3" />
//             </motion.button>
//           </motion.div>
//         </section>

//         {/* Company Logos */}
//         <CompanyLogos />

//         {/* About Section */}
//         <section className="py-20 px-6 bg-white text-black">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-5xl font-bold mb-6">
//                 About Us
//                 <div className="w-16 h-1 bg-red-500 mt-4" />
//               </h2>
//               <p className="text-xl mb-6 leading-relaxed">
//                 Addverb is a global leader in <strong>robotics</strong>, offering 
//                 innovative <strong>warehouse automation solutions</strong> with 
//                 intelligent robots, powered by modular software. 
//                 We <strong>transform supply chains</strong> and provide our 
//                 clients with a crucial competitive edge.
//               </p>
              
//               <div className="grid grid-cols-3 gap-8 mb-8">
//                 {[
//                   { number: '350+', label: 'Clients' },
//                   { number: '500+', label: 'Warehouses Automated' },
//                   { number: '2000+', label: 'Robots Deployed' }
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-4xl font-bold text-red-500 mb-2">
//                       <AnimatedCounter target={stat.number} />
//                     </div>
//                     <div className="text-gray-600 font-semibold">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
//               >
//                 Know More
//               </motion.button>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Addverb Team"
//                 className="rounded-2xl shadow-2xl w-full"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* Functionalities Carousel */}
//         <FunctionalitiesCarousel />

//         {/* Latest Content */}
//         <LatestContent />

//         {/* Sustainability Section */}
//         <section className="py-20 px-6 relative">
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(/api/placeholder/1200/600)'
//             }}
//           />
//           <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-5xl font-bold mb-6">
//                 Technological Ecology
//                 <div className="w-16 h-1 bg-red-500 mx-auto mt-4" />
//               </h2>
//               <p className="text-xl mb-8 leading-relaxed">
//                 At Addverb, environmental stewardship isn't just a choice; it's our legacy for the 
//                 planet and future generations. Amidst pressing challenges like climate change, 
//                 we're committed to curbing emissions through comprehensive monitoring and 
//                 reduction measures.
//               </p>
//               <p className="text-lg mb-8 text-gray-300">
//                 Our proactive approach includes creating green belts, leveraging solar energy, 
//                 and optimising energy consumption with efficient robotics and automation systems.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
//               >
//                 Read our ESG Report
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Form Section */}
//         <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-5xl font-bold text-gray-800 mb-6">
//                 Talk To Our
//                 <br />
//                 Automation Experts
//                 <div className="w-16 h-1 bg-red-500 mt-4" />
//               </h2>
              
//               <form className="space-y-6">
//                 <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
//                   <option>Enquiry Reason*</option>
//                   <option>Product Information</option>
//                   <option>Partnership</option>
//                   <option>Support</option>
//                 </select>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <input 
//                     type="text" 
//                     placeholder="Full Name*"
//                     className="w-full p-3 border border-gray-300 rounded-lg"
//                   />
//                   <input 
//                     type="email" 
//                     placeholder="Email Id*"
//                     className="w-full p-3 border border-gray-300 rounded-lg"
//                   />
//                 </div>
                
//                 <input 
//                   type="tel" 
//                   placeholder="Mobile with Country Code*"
//                   className="w-full p-3 border border-gray-300 rounded-lg"
//                 />
                
//                 <div className="flex items-start space-x-3">
//                   <input type="checkbox" className="mt-1" />
//                   <label className="text-sm text-gray-600">
//                     I agree to the Privacy Policy, Terms of Use, and to receive 
//                     promotional emails and other messages from Addverb.
//                   </label>
//                 </div>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
//                 >
//                   Submit →
//                 </motion.button>
//               </form>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Automation Warehouse"
//                 className="rounded-2xl w-full"
//               />
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Enhanced Bottom Navigation */}
//       <BottomNavigation />
//     </div>
//   );
// }


//CODE2
import React, { useState, useEffect, useRef } from 'react';
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
  Activity,
  ChevronLeft,
  ExternalLink,
  Eye,
  Award,
  TrendingUp,
  Users,
  Building,
  Globe,
  Leaf,
  Factory
} from 'lucide-react';

// Enhanced Particle System with Neon Effects
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 120 }, (_, i) => ({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: Math.random() > 0.7 ? '#00ffff' : Math.random() > 0.4 ? '#ff00ff' : '#00ff80',
        pulse: Math.random() * 3 + 1,
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
            boxShadow: `0 0 ${particle.size * 6}px ${particle.color}60`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
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

// Circuit Pattern Background
const CircuitPattern = () => {
  return (
    <div className="fixed inset-0 opacity-10 z-0">
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
            <path d="M50 20v60h80v-60M20 80h60v80h-60" fill="none" stroke="#00ffff" strokeWidth="1"/>
            <path d="M130 80h50v80h-50M80 130v50h50v-50" fill="none" stroke="#ff00ff" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};

// Animated Counter Component
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

// Cyberpunk Hero Background
const CyberpunkHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    
    {/* Animated Neon Grid */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    />
    
    {/* Floating Geometric Shapes */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255,0,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 60% 20%, rgba(0,255,128,0.1) 0%, transparent 40%)
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
  </div>
);

// Company Logos with Cyberpunk Style
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
    <div className="py-16 bg-black/60 backdrop-blur-sm border-y border-cyan-400/20">
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
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center border border-cyan-400/30 rounded-lg bg-black/40 backdrop-blur-sm relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span 
                  className="font-bold text-lg font-mono tracking-wider"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
                
                {/* Cyberpunk corners */}
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

// Cyberpunk Functionalities Carousel
const FunctionalitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const functionalities = [
    {
      title: 'Sortation',
      description: 'Scale your business and meet the increased demand with our flexible sortation solutions that increase your efficiency and accuracy.',
      image: '/api/placeholder/400/300',
      color: '#00ffff',
      icon: Factory
    },
    {
      title: 'Material Movement',
      description: 'Discover our wide range of robots and automation systems that can help you to improve productivity and lower overall handling costs.',
      image: '/api/placeholder/400/300',
      color: '#ff00ff',
      icon: Bot
    },
    {
      title: 'Storage',
      description: 'Optimise your storage space and ensure real time inventory visibility for your pallet and crate handling operations with our automated storage and retrieval system.',
      image: '/api/placeholder/400/300',
      color: '#00ff80',
      icon: Building
    },
    {
      title: 'Picking',
      description: 'Improve the productivity and accuracy of your picking processes for faster order fulfilment with our Pick-to-Light and Pick-by-Voice.',
      image: '/api/placeholder/400/300',
      color: '#ff8000',
      icon: Cpu
    },
    {
      title: 'Reverse Logistics',
      description: 'Streamline your return processes with automated reverse logistics solutions that reduce costs and improve customer satisfaction.',
      image: '/api/placeholder/400/300',
      color: '#ff0080',
      icon: Cog
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % functionalities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + functionalities.length) % functionalities.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative bg-black">
      {/* Background Circuit */}
      <CircuitPattern />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold text-center mb-16 font-mono tracking-wider"
          style={{
            background: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff80)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(0,255,255,0.5)',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &gt; FUNCTIONALITIES.sys
        </motion.h2>

        <div className="relative">
          <motion.div 
            className="flex overflow-hidden rounded-2xl border border-cyan-400/30"
            style={{ height: '500px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full flex"
              >
                {functionalities.slice(currentIndex, currentIndex + 3).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex-1 mx-3 relative rounded-xl overflow-hidden group cursor-pointer border border-cyan-400/20"
                      whileHover={{ scale: 1.02, y: -10 }}
                      style={{
                        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Cyberpunk Border Animation */}
                      <motion.div
                        className="absolute inset-0 border-2 rounded-xl"
                        style={{ borderColor: item.color }}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${item.color}30`,
                            `0 0 40px ${item.color}60`,
                            `0 0 20px ${item.color}30`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="relative h-full p-6 flex flex-col justify-between">
                        {/* Icon and Title */}
                        <div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                              boxShadow: `0 0 20px ${item.color}40`,
                            }}
                          >
                            <Icon className="w-6 h-6 text-black" />
                          </motion.div>
                          
                          <h3 
                            className="text-2xl font-bold mb-3 font-mono tracking-wider"
                            style={{ color: item.color }}
                          >
                            {item.title}
                          </h3>
                          <div 
                            className="w-12 h-1 mb-4"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                        
                        {/* Description and Button */}
                        <div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 'auto' }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/90 text-sm leading-relaxed mb-6 font-mono">
                              {item.description}
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-2 rounded-lg text-sm font-bold font-mono transition-all flex items-center gap-2"
                              style={{
                                background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                                color: 'black',
                                boxShadow: `0 0 15px ${item.color}40`,
                              }}
                            >
                              EXPLORE
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border border-cyan-400/50 bg-black/60 backdrop-blur-sm transition-all z-10 group"
            style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full border border-cyan-400/50 bg-black/60 backdrop-blur-sm transition-all z-10 group"
            style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
          >
            <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Cyberpunk Latest Content Section
const LatestContent = () => {
  const content = [
    {
      type: 'VIDEO',
      title: "Addverb's Physical AI Teaser",
      thumbnail: '/api/placeholder/400/300',
      isVideo: true,
      color: '#00ffff'
    },
    {
      type: 'CASE STUDY',
      title: "Wooster's Automated Material Handling",
      thumbnail: '/api/placeholder/400/300',
      category: 'CASE STUDY',
      color: '#ff00ff'
    },
    {
      type: 'PRODUCT',
      title: "Addverb's 4 Way Pallet Shuttle",
      thumbnail: '/api/placeholder/400/300',
      category: 'PRODUCT',
      color: '#00ff80'
    },
    {
      type: 'CASE STUDY',
      title: "SAS Imperial's Automated Distribution Centre",
      thumbnail: '/api/placeholder/400/300',
      category: 'CASE STUDY',
      color: '#ff8000'
    },
    {
      type: 'WHITEPAPER',
      title: "3 Real World Fleet Management Success Stories",
      thumbnail: '/api/placeholder/400/300',
      category: 'WHITEPAPER',
      color: '#ff0080'
    }
  ];

  return (
    <section className="py-24 px-6 bg-black/60 border-y border-cyan-400/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold mb-16 font-mono tracking-wider"
          style={{
            background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(0,255,255,0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &gt; LATEST@ADDVERB
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <motion.div 
            className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer border border-cyan-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div 
              className="aspect-video bg-gradient-to-br from-cyan-600 to-purple-800 flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), linear-gradient(45deg, #00ffff, #ff00ff)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-6 rounded-full border-4 border-white/50"
                style={{ boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
              >
                <Play className="w-16 h-16 text-white" />
              </motion.div>
              
              {/* Cyberpunk corners */}
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
              className="relative rounded-xl overflow-hidden group cursor-pointer border border-cyan-400/20"
            >
              <div className="aspect-square bg-gray-800 relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover"
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
                  className="px-3 py-1 rounded text-xs font-bold font-mono border"
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
              
              {/* Hover overlay with cyberpunk effect */}
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

// Enhanced Bottom Navigation with Cyberpunk Style
const BottomNavigation = () => {
  const navItems = [
    { name: 'Podcasts', icon: Activity, path: '/podcasts', color: '#00ffff' },
    { name: 'Enquire', icon: ExternalLink, path: '/enquire', color: '#ff00ff' },
    { name: 'Blog', icon: Eye, path: '/blog', color: '#00ff80' },
    { name: 'Support', icon: Settings, path: '/support', color: '#ff8000' },
  ];

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
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
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 backdrop-blur-sm relative"
                style={{ 
                  borderColor: item.color,
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                  boxShadow: `0 0 25px ${item.color}50`
                }}
              >
                <Icon className="w-7 h-7 text-white" />
                
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent"
                  style={{ borderTopColor: item.color, borderRightColor: item.color }}
                />
              </div>
              
              {/* Tooltip */}
              <div 
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border"
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

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Background Effects */}
      <ParticleSystem />
      <CyberpunkHeroBackground />
      
      {/* Cyberpunk Grid Overlay */}
      <div 
        className="fixed inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
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
            className="absolute top-24 left-6 right-6 flex justify-between items-center text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-black/80 backdrop-blur-sm rounded-lg p-3"
          >
            <span>&gt; STATUS: ONLINE</span>
            <span>&gt; TIME: {currentTime.toLocaleTimeString()}</span>
            <span>&gt; AUTOMATION_LEVEL: MAXIMUM</span>
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
            {/* Main Title with Cyberpunk Effect */}
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 font-mono tracking-wider"
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
                textShadow: [
                  '0 0 20px rgba(0,255,255,0.5)',
                  '0 0 40px rgba(255,0,255,0.7)',
                  '0 0 20px rgba(0,255,255,0.5)',
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              WAREHOUSE AUTOMATION
            </motion.h1>
            
            {/* Glitch Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mb-12"
            >
              <motion.p
                className="text-2xl md:text-4xl text-white mb-4 font-mono"
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
                that delivers value!
              </motion.p>
              
              {/* Typing Animation */}
              <motion.p
                className="text-lg md:text-xl text-cyan-400 font-mono"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, delay: 1 }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderRight: '2px solid #00ffff' }}
              >
                &gt; Initializing_future_warehouse_technologies...
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5,
                boxShadow: '0 0 50px rgba(0,255,255,0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-4 text-lg font-bold font-mono tracking-wider text-black rounded-xl overflow-hidden group border border-cyan-400"
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

        {/* Company Logos */}
        <CompanyLogos />

        {/* About Section with Cyberpunk Style */}
        <section className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black border-y border-cyan-400/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-5xl font-bold mb-6 font-mono tracking-wider">
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
              <p className="text-xl mb-8 leading-relaxed text-white/90 font-mono">
                Addverb is a global leader in <span className="text-cyan-400 font-bold">robotics</span>, offering 
                innovative <span className="text-cyan-400 font-bold">warehouse automation solutions</span> with 
                intelligent robots, powered by modular software. 
                We <span className="text-cyan-400 font-bold">transform supply chains</span> and provide our 
                clients with a crucial competitive edge.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
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
                      className="absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100"
                      style={{ borderColor: stat.color, boxShadow: `0 0 20px ${stat.color}30` }}
                    />
                    <div className="relative p-4">
                      <div 
                        className="text-4xl font-bold mb-2 font-mono"
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
                className="px-8 py-3 rounded-lg font-semibold font-mono transition-colors border border-cyan-400 bg-black/60 text-cyan-400 hover:bg-cyan-400 hover:text-black"
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
                  src="/api/placeholder/600/400" 
                  alt="Addverb Team"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Cyberpunk corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Functionalities Carousel */}
        <FunctionalitiesCarousel />

        {/* Latest Content */}
        <LatestContent />

        {/* Sustainability Section with Cyberpunk Style */}
        <section className="py-24 px-6 relative bg-black">
          <CircuitPattern />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/api/placeholder/1200/600)'
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 font-mono tracking-wider">
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
              <p className="text-xl mb-8 leading-relaxed font-mono">
                At Addverb, environmental stewardship isn't just a choice; it's our <span className="text-green-400 font-bold">legacy</span> for the 
                planet and future generations. Amidst pressing challenges like climate change, 
                we're committed to <span className="text-green-400 font-bold">curbing emissions</span> through comprehensive monitoring and 
                reduction measures.
              </p>
              <p className="text-lg mb-10 text-gray-300 font-mono">
                Our proactive approach includes creating green belts, leveraging <span className="text-green-400 font-bold">solar energy</span>, 
                and optimising energy consumption with efficient robotics and automation systems.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-lg font-semibold font-mono border border-green-400 bg-black/60 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
                style={{ boxShadow: '0 0 20px rgba(0,255,128,0.3)' }}
              >
                READ ESG REPORT
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section with Cyberpunk Style */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-5xl font-bold mb-8 font-mono tracking-wider">
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
              
              <form className="space-y-6">
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-4 bg-black/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                >
                  <option>&gt; Enquiry_Reason*</option>
                  <option>&gt; Product_Information</option>
                  <option>&gt; Partnership</option>
                  <option>&gt; Support</option>
                </motion.select>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="&gt; Full_Name*"
                    className="w-full p-4 bg-black/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    placeholder="&gt; Email_Id*"
                    className="w-full p-4 bg-black/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  />
                </div>
                
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="tel" 
                  placeholder="&gt; Mobile_with_Country_Code*"
                  className="w-full p-4 bg-black/60 border border-cyan-400/50 rounded-lg text-white font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
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
                  className="px-8 py-3 rounded-lg font-semibold font-mono border border-purple-400 bg-black/60 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors flex items-center gap-3"
                  style={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                >
                  SUBMIT
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-purple-400/30">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Automation Warehouse"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Cyberpunk corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Enhanced Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}