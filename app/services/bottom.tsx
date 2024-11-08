'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Bottom() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 overflow-hidden shadow-xl relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-white/10"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-white/5"></div>
          <div className="absolute top-40 left-20 w-16 h-16 rounded-full bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Begin Your International Education Journey Today
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-6">
                Let us guide you towards your academic dreams with personalized
                consultation and comprehensive support services.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <button
                className="px-6 py-3 bg-white text-emerald-600 rounded-full 
                         font-medium shadow-lg hover:shadow-xl 
                         transition-all duration-300 group flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="International Students"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent" />

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-8 left-8 right-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 grid grid-cols-3 gap-4"
            >
              {[
                { number: '10k+', label: 'Students' },
                { number: '50+', label: 'Countries' },
                { number: '100%', label: 'Success' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white font-bold">{stat.number}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
