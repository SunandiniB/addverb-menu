import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">ADDVERB TECHNOLOGIES</h1>
          <p className="text-lg text-gray-600 mb-4">
            GLOBAL ROBOTICS COMPANY | 24/7 AFTER SALES SUPPORT
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="text-green-600 font-semibold mb-2">
            ✓ Mobile Menu Active
          </div>
          <p className="text-gray-500 text-sm">
            Click the hamburger menu in the top-right corner to explore the navigation
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home