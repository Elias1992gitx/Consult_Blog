'use client'

import BlogList from '@/components/blog-list'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative mb-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden h-[50vh]">
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
                alt="University Campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] flex items-center">
            <div className="text-center w-full">
              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="p-8 bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      15k+
                    </h3>
                    <p className="text-gray-700 font-medium">Students Placed</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="p-8 bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      50+
                    </h3>
                    <p className="text-gray-700 font-medium">Universities</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="p-8 bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      25+
                    </h3>
                    <p className="text-gray-700 font-medium">Countries</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section>
          <div className="text-center mb-16">
            <motion.h1
              className="text-3xl md:text-5xl mb-6 text-gray-900 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Latest Insights
            </motion.h1>
            <motion.p
              className="text-xl text-gray-800 max-w-2xl mx-auto mb-12 drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Explore success stories, university insights, and expert guidance
              for your international education journey.
            </motion.p>
          </div>
          <BlogList />
        </section>
      </motion.div>
    </main>
  )
}
