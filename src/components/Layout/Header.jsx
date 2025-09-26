import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  // Clean menu data structure
  const menuData = [
    {
      title: "Industry",
      items: ["Automotive and Tyre", "Consumer Goods", "Grocery", "Solar and Battery", 
              "Chemicals and Petrochemicals", "E-Commerce", "Pharmaceuticals", 
              "Third Party Logistics", "Cold Storage", "Fashion", "Semiconductors"]
    },
    {
      title: "Solutions", 
      items: ["Functionality", "Products", "Mobile Robots", "Sorting Robots", 
              "ASRS", "Picking Systems", "Software"]
    },
    {
      title: "Service",
      items: ["24/7 Support", "Maintenance", "Consulting", "Installation"]
    },
    {
      title: "News Room",
      items: ["Case Studies", "Blogs", "Whitepapers", "Events", "News", "Podcasts", "Sustainability"]
    }
  ]

  const bottomMenuItems = ["Podcasts", "Enquire", "Blog", "Support"]

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ADDVERB</h1>
                <p className="text-xs text-gray-400">Robotics</p>
              </div>
            </div>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMenuOpen(false)
                setActiveMenu(null)
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="bg-red-600 text-white p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false)
                      setActiveMenu(null)
                    }}
                    className="p-2 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    <span className="text-lg">×</span>
                  </button>
                </div>
                <p className="text-red-100 text-sm">ADDVERB Technologies</p>
              </div>
              
              {/* Menu Items */}
              <div className="p-4 space-y-2 h-[calc(100vh-200px)] overflow-y-auto">
                {menuData.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                      className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{section.title}</span>
                      <motion.span
                        animate={{ rotate: activeMenu === index ? 180 : 0 }}
                        className="text-gray-500"
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {activeMenu === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 space-y-1"
                        >
                          {section.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              className="w-full text-left p-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                            >
                              {item}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Bottom Menu */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {bottomMenuItems.map((item, index) => (
                    <button
                      key={index}
                      className="p-2 text-xs text-gray-600 hover:bg-red-600 hover:text-white rounded transition-colors text-center"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header