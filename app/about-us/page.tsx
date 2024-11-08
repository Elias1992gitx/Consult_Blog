'use client'

import AboutDibora from './about-dibora'
import AboutEnd from './about-end'
import OrganizationCards from './about-mission'
import Mission from './mission'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen flex flex-col mt-24">
      <AboutDibora />
      <Mission />
      <OrganizationCards/>
      <AboutEnd/>
    </main>
  )
}
