'use client'

import { motion } from 'framer-motion'

interface Value {
  name: string
  description: string
  icon: string
  color: string
  metric: string
}

const values: Value[] = [
  {
    name: 'Excellence',
    description:
      'Committed to delivering the highest quality education consulting services.',
    icon: '🎯',
    color: '#FF4B85',
    metric: '98% Success Rate',
  },
  {
    name: 'Integrity',
    description:
      'Transparent and ethical guidance throughout your educational journey.',
    icon: '🤝',
    color: '#2196F3',
    metric: '10+ Years Trust',
  },
  {
    name: 'Innovation',
    description:
      'Cutting-edge solutions and personalized approach to education consulting.',
    icon: '💡',
    color: '#03BFB5',
    metric: '500+ Programs',
  },
  {
    name: 'Support',
    description: 'Dedicated assistance from application to arrival and beyond.',
    icon: '🌟',
    color: '#6772E5',
    metric: '24/7 Guidance',
  },
]

export default function ValueCards() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Right side Content - Moved to top on mobile */}
          <div className="space-y-6 order-1 lg:order-2 mb-12 lg:mb-0">
            <span className="text-blue-600 uppercase tracking-wider text-md font-medium inline-flex items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-purple-600"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>
              Our Core Values
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Empowering Global{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Education Dreams
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 leading-relaxed text-sm md:text-base"
            >
              At Deborah's Study Abroad, our values guide everything we do.
              We're committed to providing exceptional service, maintaining the
              highest ethical standards, and ensuring your success in global
              education.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 leading-relaxed text-sm md:text-base"
            >
              We focus on creating pathways for students to achieve their
              international academic aspirations. With our experienced team and
              proven track record, we're here to transform your educational
              dreams into reality.
            </motion.p>
          </div>

          {/* Left side - Value Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-4 md:p-6 flex flex-col group"
                  style={{ backgroundColor: value.color }}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{value.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {value.name}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm mb-4">
                    {value.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/20 text-white text-xs md:text-sm">
                      {value.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -left-4 md:-left-8 -bottom-4 md:-bottom-8 w-24 md:w-32 h-24 md:h-32 rounded-full bg-cyan-200/30 blur-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -right-2 md:-right-4 -top-2 md:-top-4 w-20 md:w-24 h-20 md:h-24 rounded-full bg-purple-200/30 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
