import React from 'react'
import { Calendar, ChevronRight } from 'lucide-react'
import { Features } from '../Features'

export const Hero = ({ onScheduleClick, onServicesClick }) => {
  return (
    <header className="relative h-screen flex items-center justify-center" role="banner">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')`,
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Modern construction site with advanced layout equipment"
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Efficient, Engaging
            <span className="block text-indigo-400 mt-2">Expert-Led Training</span>
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-300">
              for your layout success
            </span>
          </h1>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onScheduleClick}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Training
            </button>
            <button 
              onClick={onServicesClick}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              View Services
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Features />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </header>
  )
} 