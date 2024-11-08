'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const leftImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2940',
]

const rightImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2940',
]

export default function AboutDibora() {
  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-blue-600 text-lg font-medium"
              >
                Comprehensive Education Platform
              </motion.span>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Deborah's{'  '}
                </span>
                <span className="text-2xl sm:text-3xl">Study Abroad</span>
                <br />
                <span className="text-3xl sm:text-5xl">
                  Your Passport to Academic Success
                </span>
              </h1>
              <p className="text-md text-gray-600 max-w-xl leading-relaxed">
                Deborah's Study Abroad has a long-standing reputation for
                excellence, having guided thousands of students to prestigious
                universities around the world. Our comprehensive services
                include personalized counseling, test preparation, visa
                assistance, and post-arrival support, making your educational
                journey smooth and successful.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/try-out"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-black text-white font-medium transition-all duration-200 hover:bg-gray-800"
                >
                  Try Out
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>

                <Link
                  href="/learn-more"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-all duration-200"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="flex gap-4">
              {[
                { icon: '🎓', label: 'Education' },
                { icon: '🌍', label: 'Global' },
                { icon: '📚', label: 'Learning' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dual Direction Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] overflow-hidden rounded-2xl"
          >
            {/* Left moving column */}
            <div className="absolute left-0 w-1/2 h-full pr-2">
              <div className="relative h-full overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -600],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear',
                  }}
                  className="flex flex-col gap-4"
                >
                  {[...leftImages, ...leftImages, ...leftImages].map(
                    (src, index) => (
                      <div
                        key={`left-${index}`}
                        className="relative h-[280px] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Study abroad ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </div>

            {/* Right moving column */}
            <div className="absolute right-0 w-1/2 h-full pl-2">
              <div className="relative h-full overflow-hidden">
                <motion.div
                  animate={{
                    y: [-600, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: 'linear',
                  }}
                  className="flex flex-col gap-4"
                >
                  {[...rightImages, ...rightImages, ...rightImages].map(
                    (src, index) => (
                      <div
                        key={`right-${index}`}
                        className="relative h-[280px] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Study abroad ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </div>

            {/* Overlay gradients */}
            <div className="absolute inset-0 pointer-events-none" />
          </motion.div>
        </div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-16 justify-center"
        >
          {['Academic Excellence', 'Global Recognition', 'Student Success'].map(
            (tag) => (
              <span
                key={tag}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
