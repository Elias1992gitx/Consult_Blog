'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Icon Components
const GraduationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14L21 9L12 4L3 9L12 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14L18.16 10.578C18.758 12.282 19 14.092 19 15.916C19 17.408 18.458 18.846 17.5 20L12 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LocationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 19 16 19 10C19 6.134 15.866 3 12 3C8.13401 3 5 6.134 5 10C5 16 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AirplaneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11l19-9-9 19-2-8-8-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Floating Icon Component
interface FloatingIconProps {
  icon: React.ReactNode
  position: string
  delay: number
  color: string
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  position,
  delay,
  color,
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.6,
      delay,
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 2,
    }}
    className={`absolute ${position} ${color} p-3 rounded-2xl shadow-xl z-20`}
  >
    <div className="text-white w-6 h-6">{icon}</div>
  </motion.div>
)

// Stats Card Component
interface StatsCardProps {
  text: string
  position: string
  delay: number
}

const StatsCard: React.FC<StatsCardProps> = ({ text, position, delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute ${position} bg-white px-4 py-2 rounded-xl shadow-lg z-20 text-sm font-medium text-blue-600`}
  >
    {text}
  </motion.div>
)

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-[#f9f7f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-gray-800 text-base font-small">
              Deborah's'sConsultant: Best Overseas Education Consultant
            </span>
            <h1 className="text-[16px] md:text-[24px] font-bold text-gray-900 leading-tight">
              Our Study Abroad Consultancy Is Your Ultimate Gateway to
              <span className="text-gray-900"> Top Universities</span>
            </h1>
            <p className="text-[16px] text-gray-600 max-w-xl leading-relaxed">
              Share your profile, and allow our study abroad consultants in the
              world to propose the best-matched colleges and courses for you.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              {/* <Link
                 href="/check-eligibility"
                 className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#00A6E6] hover:bg-[#0095CF] text-white font-medium transition-all duration-200 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50"
               >
                 Check Eligibility!
               </Link> */}
              <Link
                href="/book-counselling"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#00A6E6] hover:bg-[#0095CF] text-white font-medium transition-all duration-200 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50"
              >
                Book counselling session!
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-10/12">
              {/* Yellow Background Circle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="absolute inset-0 opacity-20 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 to-[#FFA500]/20 rounded-full blur-3xl"></div>
              </div>

              {/* Floating Icons */}
              <FloatingIcon
                icon={<GraduationIcon />}
                position="-top-8 -right-8"
                delay={0.4}
                color="bg-[#FF6B6B]"
              />
              <FloatingIcon
                icon={<LocationIcon />}
                position="-bottom-8 -left-8"
                delay={0.6}
                color="bg-[#4ECDC4]"
              />
              <FloatingIcon
                icon={<AirplaneIcon />}
                position="top-1/2 -right-12"
                delay={0.8}
                color="bg-[#45B7D1]"
              />

              {/* Stats Cards */}
              <StatsCard
                text="100% process approval rate"
                position="top-4 left-4"
                delay={1.0}
              />
              <StatsCard
                text="Comprehensive personalized services"
                position="bottom-20 right-4"
                delay={1.2}
              />

              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src="/images/studyab.png"
                  alt="Student"
                  width={700}
                  height={700}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
