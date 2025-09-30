
import React, { useState, useEffect } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header onMenuClick={openMenu} />
      <main className="relative">
        {children}
      </main>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}