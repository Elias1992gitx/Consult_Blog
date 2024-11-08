'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { 
  BookOpen, 
  Video, 
  GraduationCap, 
  Stamp, 
  Plane, 
  BookCheck 
} from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Application Process',
    shortDescription:
      'Expert guidance through university applications with personalized support.',
    fullDescription:
      'Our comprehensive application process service includes document preparation, personal statement review, application strategy, and direct communication with universities. We ensure your application stands out and meets all requirements.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940',
    icon: BookOpen,
    iconColor: 'text-blue-600',
  },
  {
    id: '02',
    title: 'Online Counselling',
    shortDescription:
      'Virtual guidance sessions with experienced education counselors.',
    fullDescription:
      'Get personalized counseling from experts through our virtual platform. Discuss your academic goals, career aspirations, and receive tailored advice on course selection, university choices, and admission strategies.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940',
    icon: Video,
    iconColor: 'text-purple-600',
  },
  {
    id: '03',
    title: 'University Recommendation',
    shortDescription:
      'Personalized university suggestions based on your profile and preferences.',
    fullDescription:
      'Our experts analyze your academic background, interests, and career goals to recommend the best-fit universities. We consider factors like rankings, course structure, research opportunities, and career prospects.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940',
    icon: GraduationCap,
    iconColor: 'text-indigo-600',
  },
  {
    id: '04',
    title: 'Visa Guidance',
    shortDescription:
      'Complete support for student visa applications and documentation.',
    fullDescription:
      'Comprehensive visa application assistance including document preparation, form filling, interview preparation, and guidance throughout the visa process. We ensure all requirements are met for a successful visa application.',
    image: '/images/visa.jpg',
    icon: Stamp,
    iconColor: 'text-green-600',
  },
  {
    id: '05',
    title: 'Travel Assistance',
    shortDescription:
      'Help with travel arrangements and accommodation booking.',
    fullDescription:
      'End-to-end travel support including flight bookings, accommodation arrangements, airport pickup, and essential shopping guidance. We ensure your journey is comfortable and well-planned.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2940',
    icon: Plane,
    iconColor: 'text-sky-600',
  },
  {
    id: '06',
    title: 'Test Preparation Support',
    shortDescription:
      'Comprehensive test preparation for IELTS, TOEFL, and other exams.',
    fullDescription:
      'Expert guidance for international English proficiency tests. Get personalized coaching, study materials, practice tests, and strategies to achieve your target score.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2940',
    icon: BookCheck,
    iconColor: 'text-rose-600',
  },
]

const ServiceCard = ({ service }: { service: any }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-white">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="relative p-6 -mt-20 bg-gradient-to-b from-blue-50 via-blue-50/90 to-blue-50/50 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 shadow-sm">
              <Icon className={`w-5 h-5 ${service.iconColor}`} />
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-white/80 rounded-full">
              {service.id}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : '80px' }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed bg-white/80 rounded-lg p-3 backdrop-blur-sm">
              {isExpanded ? service.fullDescription : service.shortDescription}
            </p>
          </motion.div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors bg-white/80 px-4 py-2 rounded-full"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function MainServices() {
  return (
    <section id="services-section" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive support for your international education journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
