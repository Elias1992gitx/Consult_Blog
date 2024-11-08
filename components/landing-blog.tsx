'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Why Study in the USA? A Complete Guide',
    description:
      'Discover world-class education opportunities in the USA, from top universities to diverse campus experiences.',
    image:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=3000&auto=format&fit=crop',
    category: 'USA',
  },
  {
    id: 2,
    title: 'UK Education System: What International Students Need to Know',
    description:
      'Understanding the British education system and why it remains a top choice for international students.',
    image:
      'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=3000&auto=format&fit=crop',
    category: 'UK',
  },
  {
    id: 3,
    title: 'Scholarship Opportunities for International Students',
    description:
      'Comprehensive guide to finding and securing scholarships for your study abroad journey.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop',
    category: 'Scholarships',
  },
  {
    id: 4,
    title: 'IELTS vs TOEFL: Which English Test Should You Take?',
    description:
      'A detailed comparison of the two major English proficiency tests for international students.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop',
    category: 'Test Prep',
  },
]

const categories = ['All', 'USA', 'UK', 'Scholarships', 'Test Prep']

export default function LandingBlog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Study Abroad Insights
          </h2>
          <p className="text-lg text-gray-600">
            Expert guidance and valuable information for your international education journey
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base font-medium ${
                activeCategory === category
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row gap-6 group"
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="flex items-center text-[#FF5722] font-medium group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}