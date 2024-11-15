import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export const Navigation = ({ onScheduleClick, onServicesClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Layout Solutions
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onServicesClick}
              className={`font-medium hover:text-indigo-400 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={onScheduleClick}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Schedule Training
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <button 
              onClick={(e) => {
                onServicesClick(e)
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-indigo-600"
            >
              Services
            </button>
            <button
              onClick={(e) => {
                onScheduleClick(e)
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-indigo-600"
            >
              Schedule Training
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
