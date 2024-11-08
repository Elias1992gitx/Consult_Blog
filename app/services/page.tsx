'use client'

import MainServices from './mainservices'
import HeroSection from './heroser'
import Flow from './flow'
import Bottom from './bottom'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <MainServices />
      <Flow />
      <Bottom/>
    </main>
  )
}
