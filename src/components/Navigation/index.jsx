import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  return (
    <header className="bg-green-800 text-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">TurfTastic Pro</div>
        <ul className="flex space-x-6">
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Our Turf</a></li>
          <li><a href="#calculator">Get Quote</a></li>
          <li><a href="#contact">Book Service</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;
