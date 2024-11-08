'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const promos = [
  {
    id: 'usa',
    title: 'Study in USA',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop',
    description:
      'Limited time offer: Get up to 30% off on USA university application packages and test preparation.',
    style: 'bg-white',
    labelPosition: 'bottom-4 left-4',
    height: 'aspect-[4/3]',
    link: '/study/usa',
  },
  {
    id: 'explore',
    title: 'Global Education',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop',
    description:
      'Explore prestigious universities worldwide. Special discount on consultation and application services.',
    style: 'bg-gray-50',
    labelPosition: 'top-6 left-6',
    hasToggle: true,
    height: 'aspect-[4/5]',
    link: '/global-education',
  },
  {
    id: 'ielts',
    title: 'IELTS Preparation',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop',
    description:
      'Book your IELTS preparation course now and get free mock tests worth $200.',
    style: 'bg-blue-50',
    labelPosition: 'bottom-6 left-6',
    height: 'aspect-[4/4.5]',
    link: '/test-prep/ielts',
  },
  {
    id: 'scholarship',
    title: 'Scholarship Guide',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop',
    description:
      'Get expert guidance on scholarship applications. Limited slots available!',
    style: 'bg-gray-100',
    labelPosition: 'hidden',
    height: 'aspect-[4/3]',
    link: '/scholarships',
  },
]

export default function PromoSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="space-y-2">
            <span className="text-xl font-medium text-blue-600">
              Limited Time Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
              Study Abroad
              <br />
              Special Packages
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 mb-4">
              Don&apos;t miss out on our exclusive education packages! Get
              special discounts on university applications, test preparation,
              and consultation services.
            </p>
            <Link
              href="/consultation"
              className="inline-block px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-full hover:bg-blue-700/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Special Consultation
            </Link>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, idx) => (
            <Link
              href={promo.link}
              key={promo.id}
              className="relative block"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  'relative rounded-3xl overflow-hidden',
                  promo.style,
                  promo.height
                )}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 z-10 bg-neutral-200/10 dark:bg-slate-800/[0.8] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Card Content */}
                <div className="relative h-full">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20">
                    {/* Label */}
                    {promo.labelPosition !== 'hidden' && (
                      <div className={`absolute ${promo.labelPosition}`}>
                        <span className="px-4 py-2 rounded-full text-sm font-medium text-white bg-black/30 backdrop-blur-sm">
                          {promo.id === 'usa' ? 'Featured' : ''}
                        </span>
                      </div>
                    )}

                    {/* Title and Description with different layouts per card */}
                    {promo.id === 'explore' ? (
                      <div className="absolute inset-0 p-4 sm:p-6">
                        <div className="flex flex-col h-full">
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                              {promo.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              {promo.description}
                            </p>
                          </div>
                          <div className="mt-auto self-end">
                            <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 p-4 sm:p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                            {promo.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {promo.description}
                          </p>
                        </div>
                        <div className="self-end mt-4">
                          <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
