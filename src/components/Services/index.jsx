import React from 'react'
import { Clock, Wrench, Timer, Target, Shield, DollarSign, TrendingUp } from 'lucide-react'

export const Services = ({ onScheduleClick }) => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Time Savings',
      description: 'Cut layout time by up to 50% with robotic total station technology',
      bullets: [
        'Faster Point Layout',
        'Automated Workflows',
        'Reduced Field Time'
      ]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Millimeter Accuracy',
      description: 'Achieve superior precision with advanced layout equipment',
      bullets: [
        'Sub-millimeter Precision',
        'Quality Verification',
        'As-built Documentation'
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Increased Productivity',
      description: 'Handle more projects with efficient layout processes',
      bullets: [
        'One-person Operation',
        'Digital Plans Integration',
        'Quick Setup'
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Cost Reduction',
      description: 'Minimize rework and optimize crew efficiency',
      bullets: [
        'Reduced Labor Costs',
        'Error Prevention',
        'Material Savings'
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Risk Management',
      description: 'Prevent costly mistakes with digital verification',
      bullets: [
        'Quality Assurance',
        'Digital Documentation',
        'Error Detection'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Expert Support',
      description: 'Get training and support from construction layout specialists',
      bullets: [
        'On-site Training',
        'Technical Support',
        'Project Consulting'
      ]
    }
  ]

  const technologies = [
    {
      image: '/images/robotic-total-station.jpg',
      title: 'Robotic Total Station',
      description: 'One-person operation for efficient point layout'
    },
    {
      image: '/images/3d-laser-scanner.jpg',
      title: '3D Laser Scanner',
      description: 'Rapid as-built documentation and verification'
    },
    {
      image: '/images/field-software.jpg',
      title: 'Field Software',
      description: 'Digital plan integration and real-time layout'
    }
  ]

  const services = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Layout Services',
      price: '$1499',
      period: '/ day',
      description: 'Cut layout time by up to 50% with robotic total station technology',
      features: [
        'Point Layout & Staking',
        'As-built Verification',
        'Digital Plan Integration',
        'Quality Reports'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Equipment Training',
      price: '$899',
      period: '/ person',
      description: 'Master the latest layout technology with hands-on training',
      features: [
        'Robotic Total Station Operation',
        'Field Software Training',
        'Layout Best Practices',
        'Hands-on Exercises'
      ]
    },
    {
      icon: <Timer className="w-12 h-12" />,
      title: '3D Scanning',
      price: '$2499',
      period: '/ project',
      description: 'Complete site documentation with millimeter accuracy',
      features: [
        'Complete Site Documentation',
        'Point Cloud Processing',
        'As-built Modeling',
        'Deviation Analysis'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Layout Services?</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Transform your construction workflow with professional layout services that deliver real results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-20 bg-white py-16">
          <h2 className="text-4xl font-bold text-center mb-4">Layout Technology</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            State-of-the-art equipment for precise construction layout
          </p>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-gray-200">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-indigo-600">{service.price}</span>
                <span className="text-gray-500 ml-1">{service.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
              >
                Schedule Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 