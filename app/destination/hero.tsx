'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useFilters } from './FilterContext'
import ReactCountryFlag from 'react-country-flag'

const countryData = {
  'Study in UK': { code: 'GB', name: 'UK' },
  'Study in USA': { code: 'US', name: 'USA' },
  'Study in Canada': { code: 'CA', name: 'Canada' },
  'Study in Croatia': { code: 'HR', name: 'Croatia' },
  'Study in South Korea': { code: 'KR', name: 'South Korea' },
  'Study in South Africa': { code: 'ZA', name: 'South Africa' },
  'Study in Qatar': { code: 'QA', name: 'Qatar' },
  'Study in Spain': { code: 'ES', name: 'Spain' },
  'Study in Argentina': { code: 'AR', name: 'Argentina' },
  'Study in Germany': { code: 'DE', name: 'Germany' },
  'Study in Netherlands': { code: 'NL', name: 'Netherlands' },
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', // Modern university campus
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f', // International students studying
  'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd', // Global education concept
]

const AnimatedSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  disabled = false 
}: {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
  disabled?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.995 }}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full p-2 sm:p-3 rounded-lg bg-gray-50 flex justify-between items-center text-xs sm:text-sm
          ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value || placeholder}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 sm:mt-2 bg-white rounded-lg shadow-lg 
              border border-gray-100 overflow-hidden"
          >
            {options.map((option) => (
              <motion.button
                key={option}
                whileHover={{ backgroundColor: '#f3f4f6' }}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-left text-xs sm:text-sm
                  ${value === option ? 'bg-gray-50 text-gray-900' : 'text-gray-600'}`}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

type CountryInfo = {
  code: string
  name: string
  count?: number // Number of universities available
}

const CountryList = ({ countries }: { countries: [string, CountryInfo][] }) => {
  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 -mx-2 px-2">
      {countries.map(([key, country]) => (
        <div
          key={country.code}
          className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full px-2 sm:px-3 py-1"
        >
          <ReactCountryFlag
            countryCode={country.code}
            svg
            style={{
              width: '1.2em',
              height: '1.2em',
            }}
            className="rounded-full shadow-sm"
            title={country.name}
          />
          <span className="hidden sm:inline">{country.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function DestinationHero() {
  const { filters, setContinent, setCountry, clearFilters } = useFilters()
  const [selectedContinent, setSelectedContinent] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleContinentChange = (value: string) => {
    setSelectedContinent(value)
    setContinent(value)
    setSelectedCountry('') // Reset local state
  }

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    setCountry(value)
  }

  const getCountriesForContinent = (continent: string) => {
    switch (continent) {
      case 'Asia':
        return Object.entries(countryData).filter(([key]) => 
          ['Study in Qatar', 'Study in South Korea'].includes(key)
        )
      case 'North America':
        return Object.entries(countryData).filter(([key]) => 
          ['Study in USA', 'Study in Canada'].includes(key)
        )
      case 'Europe':
        return Object.entries(countryData).filter(([key]) => 
          ['Study in UK', 'Study in Germany', 'Study in Spain', 'Study in Netherlands', 'Study in Croatia'].includes(key)
        )
      case 'Africa':
        return Object.entries(countryData).filter(([key]) => 
          ['Study in South Africa'].includes(key)
        )
      case 'South America':
        return Object.entries(countryData).filter(([key]) => 
          ['Study in Argentina'].includes(key)
        )
      case 'All':
        return Object.entries(countryData)
      default:
        return [] // Return empty array instead of false
    }
  }

  return (
    <main className="min-h-[80vh] relative mt-28 sm:mt-16 md:mt-28 lg:mt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImages[0]}
          alt="Modern university campus"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 pt-12 sm:pt-16 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl px-2 sm:px-4 lg:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4 leading-tight">
            Discover Your Next
            <br className="hidden sm:block" />
            Study Adventure
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl">
            Explore curated study abroad opportunities that fulfill your
            academic dreams, offering unforgettable moments of learning,
            cultural immersion, and personal growth at prestigious universities
            worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-8 md:mt-10 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl 
            p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg mx-2 sm:mx-4 md:mx-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6">
            Explore Best Universities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-xs sm:text-sm text-gray-600">
                Select Continent
              </label>
              <AnimatedSelect
                value={selectedContinent}
                onChange={(value) => handleContinentChange(value)}
                options={['All', 'Europe', 'North America', 'Asia', 'Africa', 'South America']}
                placeholder="Choose a Continent"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label className="block text-xs sm:text-sm text-gray-600">
                Select Country
              </label>
              <AnimatedSelect
                value={selectedCountry}
                onChange={(value) => handleCountryChange(value)}
                options={selectedContinent 
                  ? getCountriesForContinent(selectedContinent).map(([key, { name }]) => name)
                  : []}
                placeholder="Choose a Country"
                disabled={!selectedContinent}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <CountryList countries={Object.entries(countryData)} />
            <div className="flex justify-between items-center">
              <button
                onClick={clearFilters}
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-700"
              >
                Clear Selection
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 
                  rounded-lg text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              >
                View Universities
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
