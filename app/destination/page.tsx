'use client'

import { motion } from 'framer-motion'
import { FilterProvider } from './FilterContext'
import DestinationGrid from './countries'
import DestinationHero from './hero'
import VibrantContact from './vibrant'
// import WorldState from './worldstate'

export default function DestinationPage() {
  return (
    <FilterProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <DestinationHero />
        <DestinationGrid />
        {/* <WorldState /> */}
        <VibrantContact />
      </motion.div>
    </FilterProvider>
  )
}
