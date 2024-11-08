'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Mission = () => {
  return (
    <main>
      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-12 gap-8"
          >
            {/* Left Column - Mission Text */}
            <div className="col-span-12 lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 relative p-8 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30"
              >
                <span className="text-blue-600 uppercase tracking-wider text-md font-medium inline-flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center"
                  >
                    🎓
                  </motion.div>
                  Our Mission
                </span>

                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Transforming Dreams into{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Global Education
                  </span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  We guide ambitious students through their international
                  education journey, providing expert consultation and support
                  every step of the way.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-12 gap-4 h-full">
                {/* Paris Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="col-span-6 relative rounded-3xl overflow-hidden h-[300px] group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2000"
                    alt="Study in Paris"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span>🗼</span> Paris
                    </h3>
                    <p className="text-white/90 text-sm">
                      City of Light & Learning
                    </p>
                  </div>
                </motion.div>

                {/* Rome Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="col-span-6 relative rounded-3xl overflow-hidden h-[300px] group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000"
                    alt="Study in Rome"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span>🏛️</span> Rome
                    </h3>
                    <p className="text-white/90 text-sm">
                      Eternal City of Education
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-45"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mission
