'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark border-b border-darkGrayLight sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">🎲 Shuffle</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-primary transition">Casino</a>
            <a href="#" className="text-gray-300 hover:text-primary transition">Sports</a>
            <a href="#" className="text-gray-300 hover:text-primary transition">Promotions</a>
            <a href="#" className="text-gray-300 hover:text-primary transition">Support</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-400 transition">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Casino</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Sports</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Promotions</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Support</a>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark transition">
                Sign In
              </button>
              <button className="px-6 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-blue-400 transition">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
