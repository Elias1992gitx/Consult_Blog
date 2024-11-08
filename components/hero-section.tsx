'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ChatBot from './chat-bot'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="min-h-screen" />
  }

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 min-h-[calc(100dvh-4rem)] items-center py-6 sm:py-8 md:py-12">
            {/* Left Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight sm:pl-2 md:pl-2 mt-4 xs:mt-6 sm:mt-8 md:mt-0">
                Your Journey to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block xs:inline">
                  Global Education
                </span>{' '}
                Starts Here
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-800/80 max-w-2xl pl-2 sm:pl-2 md:pl-4">
                Expert guidance for international education, test preparation,
                and visa assistance. Transform your academic dreams into
                reality.
              </p>
              <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 pl-2 sm:pl-4">
                <Link
                  href="/consultation"
                  className="group relative flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[140px] sm:min-w-[180px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 text-[13px] xs:text-sm sm:text-base">
                    Get Consultation
                    <svg
                      className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-white/70 backdrop-blur-lg text-blue-900 rounded-xl sm:rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[120px] sm:min-w-[160px] text-center"
                >
                  <span className="text-[13px] xs:text-sm sm:text-base">
                    Our Services
                  </span>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
                {[
                  { number: '15k+', label: 'Students Placed' },
                  { number: '50+', label: 'Universities' },
                  { number: '25+', label: 'Countries' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 sm:p-3 md:p-4 text-center"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-700">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-6 sm:mt-8 md:mt-0"
            >
              {/* Image Container */}
              <div
                className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] 
                            -mt-0 sm:-mt-6 md:-mt-12 lg:-mt-16 
                            rounded-2xl sm:rounded-3xl 
                            overflow-hidden shadow-xl sm:shadow-2xl"
              >
                <Image
                  src="/images/img.jpg"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, 
                         (max-width: 768px) 80vw,
                         (max-width: 1024px) 50vw,
                         40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute 
                          -bottom-6 xs:-bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 
                          -left-2 xs:-left-3 sm:-left-6 md:-left-8 lg:-left-10 
                          bg-white rounded-lg sm:rounded-xl md:rounded-2xl 
                          p-2 xs:p-2.5 sm:p-3 md:p-4 
                          shadow-md sm:shadow-lg md:shadow-xl 
                          w-[calc(100%-4rem)] xs:w-[280px] sm:w-[300px] md:w-[340px] 
                          backdrop-blur-none sm:backdrop-blur-lg mb-1"
              >
                <h2
                  className="text-sm xs:text-base sm:text-lg md:text-xl font-bold 
                             mb-1 xs:mb-1.5 sm:mb-2 
                             text-blue-950"
                >
                  Expert Guidance Available
                </h2>
                <p
                  className="text-[10px] xs:text-xs sm:text-sm 
                            text-blue-700 
                            mb-1.5 xs:mb-2 sm:mb-2.5"
                >
                  Get personalized support throughout your journey
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 xs:gap-1.5 sm:gap-2 flex-wrap">
                    <span
                      className="px-1.5 xs:px-2 sm:px-3 
                                  py-0.5 
                                  bg-blue-50 rounded-full 
                                  text-blue-700 
                                  text-[9px] xs:text-[10px] sm:text-xs md:text-sm 
                                  whitespace-nowrap"
                    >
                      Study Abroad
                    </span>
                    <span
                      className="px-1.5 xs:px-2 sm:px-3 
                                  py-0.5 
                                  bg-purple-50 rounded-full 
                                  text-purple-700 
                                  text-[9px] xs:text-[10px] sm:text-xs md:text-sm 
                                  whitespace-nowrap"
                    >
                      Test Prep
                    </span>
                  </div>
                  <span
                    className="text-xs xs:text-sm sm:text-base md:text-lg 
                                font-medium text-blue-950"
                  >
                    01
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  )
}
