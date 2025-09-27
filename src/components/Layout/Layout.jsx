// import React, { useState } from "react";
// import Header from "./Header";
// import MobileMenu from "./MobileMenu";

// export default function Layout({ children }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const openMenu = () => setIsMenuOpen(true);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Background Grid Pattern */}
//       <div 
//         className="fixed inset-0 opacity-5 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }}
//       />

//       {/* Header */}
//       <Header onMenuClick={openMenu} />
      
//       {/* Main Content */}
//       <main className="relative z-10 pt-20">
//         {children}
//       </main>
      
//       {/* Mobile Menu */}
//       <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
//     </div>
//   );
// }
import React, { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={openMenu} />
      <main className="relative">
        {children}
      </main>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}