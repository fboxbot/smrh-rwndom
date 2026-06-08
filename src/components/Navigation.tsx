'use client'

import { useState } from 'react'
import { Menu, X, Zap, Lock, TrendingUp } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🎲</div>
            <h1 className="text-2xl font-bold text-white">shuffle</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#casino" className="text-gray-300 hover:text-primary transition">Casino</a>
            <a href="#sports" className="text-gray-300 hover:text-primary transition">Sports</a>
            <a href="#originals" className="text-gray-300 hover:text-primary transition">Originals</a>
            <a href="#promotions" className="text-gray-300 hover:text-primary transition">Promotions</a>
          </div>

          <div className="hidden md:flex space-x-3">
            <button className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary/10 transition font-semibold">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition">
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
          <div className="md:hidden pb-4 space-y-2 border-t border-primary/20 pt-4">
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Casino</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Sports</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Originals</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition py-2">Promotions</a>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary/10 transition font-semibold">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition">
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
