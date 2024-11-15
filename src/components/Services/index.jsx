import React from 'react'
import { Clock, Wrench, Timer, Target, Shield, DollarSign, TrendingUp } from 'lucide-react'

export const Services = () => {
  const services = [
    {
      title: "Turf Installation",
      description: "Because life's too short for fake grass. Premium turf varieties installed by experts.",
      icon: "🌱"
    },
    {
      title: "Lawn Rescue",
      description: "ICU for your ICC (Intensively Challenged Carpet). We bring lawns back to life!",
      icon: "🚑"
    },
    {
      title: "Maintenance Plans",
      description: "We're like a spa membership for your lawn. Regular care for year-round beauty.",
      icon: "✂️"
    }
  ]
  
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services; 