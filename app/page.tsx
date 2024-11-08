'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import components with no SSR
const HeroSection = dynamic(() => import('@/components/hero-section'), {
  ssr: false
})

const CTA = dynamic(() => import('@/components/cta'), {
  ssr: false
})

const MarqueeDemo = dynamic(() => import('@/components/marquee').then(mod => mod.MarqueeDemo), {
  ssr: false
})

const HeroSectionAlt = dynamic(() => import('@/components/hero-section-alt'), {
  ssr: false
})

const LandingBlog = dynamic(() => import('@/components/landing-blog'), {
  ssr: false
})

const PromoSection = dynamic(() => import('@/components/promo-section'), {
  ssr: false
})


export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
        <CTA />
        <MarqueeDemo />
        <HeroSectionAlt />
        
        <LandingBlog />
         
        <PromoSection />
       
        
      </Suspense>
    </main>
  )
}

