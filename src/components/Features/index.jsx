import React from 'react'
import { Clock, Target, Shield, Wrench, TrendingUp, DollarSign } from 'lucide-react'

export const Features = () => {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Flexible Schedule'
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: 'Hands-on Training'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'Expert Support'
    }
  ]

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-indigo-400 justify-center">
          {feature.icon}
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  )
}
