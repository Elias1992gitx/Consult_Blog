'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const educationCards = [
  {
    title: 'Study in Europe:',
    subtitle: 'Academic Excellence',
    image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2000',
    description: 'Experience world-class education in prestigious European universities.',
  },
  {
    title: 'Study in America:',
    subtitle: 'Innovation & Research',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000',
    description: 'Access cutting-edge research facilities and diverse academic programs.',
  },
  {
    title: 'Study in Asia:',
    subtitle: 'Cultural Immersion',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000',
    description: 'Combine academic excellence with rich cultural experiences.',
  },
  {
    title: 'Study in Oceania:',
    subtitle: 'Global Recognition',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000',
    description: 'World-renowned universities with innovative teaching methods.',
  },
]

export default function EducationCards() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[300px] overflow-hidden rounded-[32px] cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-lg text-white/90">{card.subtitle}</p>
                <p className="text-sm text-white/80 max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
