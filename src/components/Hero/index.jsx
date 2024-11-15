import React from 'react'
import { Calendar, ChevronRight } from 'lucide-react'

export const Hero = ({ onScheduleClick, onServicesClick }) => {
  return (
    <header className="relative h-screen flex items-center justify-center" role="banner">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80')`,
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Beautiful green lawn with perfect stripes"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Yard
            <span className="block text-green-400 mt-2">Into Paradise</span>
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-300">
              Professional Turf Installation & Maintenance
            </span>
          </h1>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onScheduleClick}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Free Consultation
            </button>
            <button 
              onClick={onServicesClick}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-900 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              View Services
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-12">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Premium Turf</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Expert Installation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Maintenance Plans</span>
          </div>
        </div>
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

export default Hero; 