import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  'Counseling',
  'Application',
  'Mentorship',
  'Visa Support',
  'Test Prep',
  
]

const userAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
]

export default function AboutEnd() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                About tour to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Global Education
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover world-class education opportunities on an unforgettable journey
              </p>

              {/* User Stats */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {userAvatars.map((avatar, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={avatar}
                        alt={`User ${i + 1}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  10k+ students have started their journey
                </span>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <p className="text-gray-900 font-medium">
                  Our education journey includes
                </p>
                <div className="flex flex-wrap gap-3">
                  {features.map((feature) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.random() * 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940"
              alt="Students studying abroad"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white/100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Tour Evaluation */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1.5">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-medium">4.8</span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}