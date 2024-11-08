'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <motion.div
        key={i}
        className={`absolute -right-1/4 aspect-square w-full rounded-full 
          ${i % 2 === 0 ? 'bg-white/15' : 'bg-white/10'}`}
        style={{
          right: `${(i * -5)}%`,
          top: `${(i * 2)}%`
        }}
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{
          scale: [0.8, 1.6],
          opacity: [0.4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          delay: i * 0.8,
          ease: "easeInOut",
          times: [0, 1]
        }}
      />
    ))}
    {/* Additional overlay waves for depth */}
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={`overlay-${i}`}
        className="absolute -right-1/4 aspect-square w-[120%] rounded-full bg-white/5"
        style={{
          right: `${(i * -8)}%`,
          bottom: `${(i * 5)}%`
        }}
        initial={{ scale: 0.6, opacity: 0.3 }}
        animate={{
          scale: [0.6, 1.4],
          opacity: [0.3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          delay: i * 1.2,
          ease: "easeOut",
          times: [0, 1]
        }}
      />
    ))}
  </div>
)

export default function VibrantContact() {
  return (
    <section className="relative min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-green-600 to-green-400 overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 my-12 sm:my-20">
      <WaveBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Get In Touch.
          </motion.h2>

          <motion.p
            className="text-lg text-white/90 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your laboratory instruments should serve you, not the other way around. 
            We're happy to help you.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/consultation"
              className="group relative overflow-hidden rounded-full bg-black px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <motion.span
                className="relative z-10 text-white font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.span>
              <motion.div
                className="absolute right-4 w-4 h-4 bg-white rounded-full"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <Link
              href="/samples"
              className="group relative overflow-hidden rounded-full bg-black px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <motion.span
                className="relative z-10 text-white font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Explore More
              </motion.span>
              <motion.div
                className="absolute right-4 w-4 h-4 bg-white rounded-full"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
