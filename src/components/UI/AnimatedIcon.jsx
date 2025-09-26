import React from 'react'
import { motion } from 'framer-motion'

const AnimatedIcon = ({ isOpen }) => {
  return (
    <div className="w-6 h-6 relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="block absolute h-0.5 w-6 bg-white"
        style={{ top: '4px' }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="block absolute h-0.5 w-6 bg-white"
        style={{ top: '10px' }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="block absolute h-0.5 w-6 bg-white"
        style={{ top: '16px' }}
      />
    </div>
  )
}

export default AnimatedIcon