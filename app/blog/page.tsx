'use client'

import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[450px] md:h-[400px] overflow-hidden"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background:
                  'url(https://images.leverageedu.com/homepage/footer-background.png)',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '300%',
                animation: 'slideshow 10s linear infinite',
              }}
            />
            <style jsx>{`
              @keyframes slideshow {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.33%);
                }
              }
            `}</style>
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 5%, transparent 95%, rgba(255,255,255,0.1) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Your trusted partner in international education and study abroad
              consultancy
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
