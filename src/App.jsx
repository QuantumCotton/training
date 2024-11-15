import React, { useState } from 'react'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Navigation } from './components/Navigation'
import { ScheduleModal } from './components/ScheduleModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScheduleTraining = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleViewServices = (e) => {
    e.preventDefault()
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation 
        onScheduleClick={handleScheduleTraining}
        onServicesClick={handleViewServices}
      />
      <Hero 
        onScheduleClick={handleScheduleTraining}
        onServicesClick={handleViewServices}
      />
      <Services onScheduleClick={handleScheduleTraining} />
      <ScheduleModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default App 