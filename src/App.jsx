import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import MobileMenu from './components/Layout/MobileMenu';
import Home from './pages/Home';
import IndustryPage from './pages/Industry/IndustryPage';
import SolutionsPage from './pages/Solutions/SolutionsPage';
import ProductsPage from './pages/Products/ProductsPage';
import ServicePage from './pages/ServicePage';
import NewsPage from './pages/News/NewsPage';
import CompanyPage from './pages/Company/CompanyPage';
import './styles/globals.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Loading screen component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-red-500 mb-8 font-mono tracking-wider"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ADDVERB
        </motion.div>
        
        {/* Animated loading bars */}
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-8 bg-red-500"
              animate={{
                scaleY: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        <motion.p
          className="text-slate-400 mt-4 text-sm uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Initializing Warehouse Automation
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Header 
              onMobileMenuToggle={handleMobileMenuToggle}
              isMobileMenuOpen={isMobileMenuOpen}
            />
            
            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onClose={handleMobileMenuClose}
            />
            
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Industry Routes */}
                <Route path="/industry/:slug" element={<IndustryPage />} />
                
                {/* Solutions Routes */}
                <Route path="/solutions/:slug" element={<SolutionsPage />} />
                
                {/* Products Routes */}
                <Route path="/products/:slug" element={<ProductsPage />} />
                
                {/* Service Route */}
                <Route path="/service" element={<ServicePage />} />
                
                {/* News Routes */}
                <Route path="/news/:slug" element={<NewsPage />} />
                
                {/* Company Routes */}
                <Route path="/company/:slug" element={<CompanyPage />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;