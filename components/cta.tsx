'use client'

import { motion } from 'framer-motion'
import { DestinationCard, DestinationsCarousel } from './destinations-carousel'

const destinations = [
  {
    src: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=3389&auto=format&fit=crop',
    title: 'Study in USA',
    category: 'Popular Destination',
    stats: {
      universities: '200+',
      courses: '2000+',
      students: '15K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience world-class education in the United States with diverse
          opportunities and cutting-edge research facilities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Top-ranked universities</li>
          <li>Flexible education system</li>
          <li>Optional Practical Training (OPT)</li>
          <li>Diverse campus culture</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in UK',
    category: 'Premier Destination',
    stats: {
      universities: '150+',
      courses: '2500+',
      students: '20K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience world-class education in the United Kingdom with its rich
          academic heritage and innovative research opportunities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>World-renowned universities</li>
          <li>Shorter degree programs</li>
          <li>Post-study work opportunities</li>
          <li>Multicultural environment</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=3400&auto=format&fit=crop',
    title: 'Study in China',
    category: 'Featured Destination',
    stats: {
      universities: '150+',
      courses: '1500+',
      students: '10K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Discover the blend of ancient culture and modern education in China&apos;s
          top universities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable education</li>
          <li>Scholarship opportunities</li>
          <li>Rich cultural experience</li>
          <li>Growing economic opportunities</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=3270&auto=format&fit=crop',
    title: 'Study in Italy',
    category: 'Historic Excellence',
    stats: {
      universities: '100+',
      courses: '1000+',
      students: '8K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Study in the birthplace of Renaissance with a perfect blend of art,
          culture, and academic excellence.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Historic universities</li>
          <li>Art and design excellence</li>
          <li>Rich cultural heritage</li>
          <li>Quality of life</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=3271&auto=format&fit=crop',
    title: 'Study in Turkey',
    category: 'Emerging Hub',
    stats: {
      universities: '120+',
      courses: '1200+',
      students: '12K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience Turkey&apos;s modern educational infrastructure.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable living costs</li>
          <li>Modern facilities</li>
          <li>Cultural diversity</li>
          <li>Strategic location</li>
        </ul>
      </div>
    ),
  },

  {
    src: 'https://images.unsplash.com/photo-1596097155664-4f5c49ba1b69?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Croatia',
    category: 'Emerging Excellence',
    stats: {
      universities: '40+',
      courses: '500+',
      students: '5K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Discover Croatia&apos;s growing educational landscape with its blend of
          traditional values and modern European standards.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable education</li>
          <li>EU recognized degrees</li>
          <li>Rich cultural heritage</li>
          <li>Mediterranean lifestyle</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in South Korea',
    category: 'Technology Hub',
    stats: {
      universities: '100+',
      courses: '1200+',
      students: '12K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience cutting-edge technology and vibrant culture in South
          Korea&apos;s dynamic educational environment.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Advanced tech infrastructure</li>
          <li>Government scholarships</li>
          <li>K-culture experience</li>
          <li>Career opportunities</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in South Africa',
    category: 'Cultural Diversity',
    stats: {
      universities: '80+',
      courses: '1000+',
      students: '8K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Study in a country known for its diversity, natural beauty, and
          quality education system.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable living costs</li>
          <li>English-taught programs</li>
          <li>Cultural diversity</li>
          <li>Natural wonders</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1551041777-ed277b8dd348?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Qatar',
    category: 'Middle East Excellence',
    stats: {
      universities: '30+',
      courses: '400+',
      students: '6K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience world-class facilities and international standards in
          Qatar&apos;s growing educational hub.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>State-of-the-art facilities</li>
          <li>International faculty</li>
          <li>Tax-free income</li>
          <li>Safe environment</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Spain',
    category: 'Cultural Heritage',
    stats: {
      universities: '90+',
      courses: '1100+',
      students: '10K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Combine quality education with rich cultural experiences in Spain&apos;s
          historic universities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Historic institutions</li>
          <li>Affordable education</li>
          <li>Rich culture and history</li>
          <li>Mediterranean lifestyle</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Argentina',
    category: 'Latin American Hub',
    stats: {
      universities: '70+',
      courses: '800+',
      students: '7K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience South American culture while studying in Argentina&apos;s
          prestigious educational institutions.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Quality education</li>
          <li>Affordable living</li>
          <li>Rich cultural experience</li>
          <li>Vibrant student life</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Germany',
    category: 'Engineering Excellence',
    stats: {
      universities: '180+',
      courses: '2200+',
      students: '25K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Study in Germany&apos;s world-renowned technical universities with
          excellent research opportunities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Free/Low-cost education</li>
          <li>Strong industry links</li>
          <li>Post-study work permit</li>
          <li>High quality of life</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=3000&auto=format&fit=crop',
    title: 'Study in Netherlands',
    category: 'Innovation Hub',
    stats: {
      universities: '60+',
      courses: '900+',
      students: '9K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience innovative education methods and bicycle-friendly cities in
          the Netherlands.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>English-taught programs</li>
          <li>Innovation-focused education</li>
          <li>Bicycle-friendly cities</li>
          <li>International environment</li>
        </ul>
      </div>
    ),
  },
]


export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your Study Destination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore top educational destinations worldwide and find the perfect
            place to pursue your academic dreams
          </motion.p>
        </div>

        <DestinationsCarousel
          items={destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              destination={destination}
              index={index}
              layout={true}
            />
          ))}
        />
      </div>
    </section>
  )
}
