import React from 'react'
import { X, Calendar } from 'lucide-react'

export const ScheduleModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full m-4">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-green-800">Schedule Free Consultation</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your dream lawn! Fill out the form below and we'll contact you to schedule your free consultation.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
            <input 
              type="text" 
              id="company"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="participants">Number of Participants</label>
            <select 
              id="participants"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="preferredDate">Preferred Date</label>
            <input 
              type="date" 
              id="preferredDate"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Additional Information</label>
            <textarea 
              id="message"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Schedule Consultation
          </button>
        </form>
      </div>
    </div>
  )
} 