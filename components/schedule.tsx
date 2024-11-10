'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ShinyButton from './magicui/shiny-button'

export default function ScheduleCallCard() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [calHeight, setCalHeight] = useState('250px')

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight
      const screenWidth = window.innerWidth
      
      // More granular responsive calculations
      let maxWidth, maxHeight
      
      if (screenWidth < 640) { // mobile
        maxWidth = screenWidth * 0.95
        maxHeight = screenHeight * 0.9
      } else if (screenWidth < 1024) { // tablet
        maxWidth = screenWidth * 0.85
        maxHeight = screenHeight * 0.85
      } else { // desktop
        maxWidth = Math.min(screenWidth * 0.7, 800)
        maxHeight = Math.min(screenHeight * 0.8, 900)
      }
      
      setCalHeight(isExpanded ? `${maxHeight * 0.9}px` : '250px')
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isExpanded])

  return (
    <motion.div
      className={`fixed z-40 ${
        isExpanded
          ? 'inset-0 flex items-center justify-center pt-20 sm:pt-24 md:pt-28 p-2 sm:p-4 md:p-6 bg-black/20 backdrop-blur-sm'
          : 'bottom-16 sm:bottom-6 left-1/2 sm:left-6 -translate-x-1/2 sm:translate-x-0'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`bg-white/90 backdrop-blur-sm rounded-full sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
          isExpanded
            ? 'w-[95vw] sm:w-[85vw] md:w-[70vw] max-w-[800px] h-[80vh] sm:h-[75vh] md:h-[70vh] max-h-[800px] rounded-2xl'
            : 'w-[180px] sm:w-[220px]'
        }`}
        initial={isExpanded ? { scale: 0.9, opacity: 0 } : { scale: 1 }}
        animate={isExpanded ? { scale: 1, opacity: 1 } : { scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className={`${isExpanded ? 'p-3 sm:p-4 md:p-6' : 'p-1 sm:p-2'} h-full flex flex-col relative`}>
          {/* Close button */}
          <button
            onClick={() => {
              setShowCalendar(false)
              setIsExpanded(false)
            }}
            className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header text */}
          <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-2 text-gray-800 text-center">
            ✨ Schedule a call ✨
          </h3>

          {showCalendar ? (
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://cal.com/elias-hailu-xggmdm/30min?embed=true&layout=month_view&theme=light"
                className="w-full h-full rounded-md sm:rounded-lg"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          ) : (
            <ShinyButton
              text="Schedule"
              className="w-full text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 
                       bg-gray-200 
                       text-white font-medium rounded-full
                       hover:shadow-lg hover:shadow-blue-300/20
                       active:scale-95 transform transition-all duration-200"
              onClick={() => {
                setShowCalendar(true)
                setIsExpanded(true)
              }}
            />
          )}

          {showCalendar && (
            <button
              className="mt-3 w-full py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => {
                setShowCalendar(false)
                setIsExpanded(false)
              }}
              aria-label="Cancel scheduling"
            >
              Cancel
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
