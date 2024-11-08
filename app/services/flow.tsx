'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Book Consultation',
    description:
      'Schedule your consultation session with our expert advisors to discuss your study abroad plans.',
  },
  {
    number: '02',
    title: 'Choose Your Package',
    description:
      'Select from our comprehensive service packages tailored to meet your specific needs and requirements.',
  },
  {
    number: '03',
    title: 'Start Your Journey',
    description:
      'Begin your study abroad journey with our dedicated support team guiding you every step of the way.',
  },
]

const WavyArrow = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] z-0 
                 hidden sm:block 
                 sm:left-[calc(50%+1rem)] sm:w-[calc(100%-2rem)]
                 md:left-[calc(50%+2rem)] md:w-[calc(100%-4rem)]
                 lg:left-[calc(50%+3rem)] lg:w-[calc(100%-6rem)]"
    >
      <svg width="100%" height="50" viewBox="0 0 300 50" fill="none">
        <motion.path
          d={index === 0 
            ? "M8 25C50 25 75 10 150 10C225 10 250 25 292 25"
            : "M8 25C50 25 75 40 150 40C225 40 250 25 292 25"
          }
          stroke="#30C9B0"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-flow"
        />
        <motion.path
          d="M282 25L292 25L287 20"
          stroke="#30C9B0"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  )
}

export default function Flow() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
      >
        How it works?
      </motion.h2>

      <div className="relative flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto gap-8 sm:gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex-1 w-full sm:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center max-w-[250px] mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                         rounded-full bg-gradient-to-br from-[#30C9B0] to-[#2BB09A] 
                         text-white flex items-center justify-center 
                         text-lg sm:text-xl font-semibold mb-4 sm:mb-6 shadow-lg
                         hover:shadow-xl transition-shadow duration-300"
              >
                {step.number}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
            </motion.div>
            {index < steps.length - 1 && <WavyArrow index={index} />}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -24;
          }
        }
        .animate-flow {
          animation: flow 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
