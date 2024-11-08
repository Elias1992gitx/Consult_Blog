'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ChevronDown, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

const countryData = {
  'Study in UK': { code: 'GB', name: 'United Kingdom' },
  'Study in USA': { code: 'US', name: 'United States' },
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

type CountryKey = keyof typeof countryData

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const navVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(5px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  }

  const NavLink = ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-[#30745c] group py-2"
      prefetch={true}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#30745c] opacity-0"
        whileHover={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )

  // ... previous imports and code ...

  type MenuItems = CountryKey | 'IELTS' | 'PTE' | 'TOEFL'

  const DropdownNavItem = ({
    trigger,
    items,
  }: {
    trigger: string
    items: MenuItems[]
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-[#30745c] transition-colors duration-200">
        {trigger}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[600px] p-4 animate-in fade-in-80 zoom-in-95 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg shadow-gray-200/20"
        sideOffset={8}
      >
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, index) => {
            const countryInfo = countryData[item as CountryKey]

            if (!countryInfo) {
              return (
                <Link
                  href={`/${trigger.toLowerCase()}/${item.toLowerCase()}`}
                  key={index}
                >
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#30745c]/5 transition-all duration-200 group">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-[#30745c] transition-colors duration-200">
                      {item}
                    </span>
                  </DropdownMenuItem>
                </Link>
              )
            }

            return (
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  countryInfo.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#30745c]/5 transition-all duration-200 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-white transition-colors duration-200">
                    <ReactCountryFlag
                      countryCode={countryInfo.code}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                        borderRadius: '0.2em',
                      }}
                      title={countryInfo.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-[#30745c] transition-colors duration-200">
                      {item}
                    </span>
                    <span className="text-xs text-gray-500">
                      {countryInfo.name}
                    </span>
                  </div>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                  >
                    <ChevronDown className="h-4 w-4 rotate-[-90deg] text-[#30745c]" />
                  </motion.div>
                </DropdownMenuItem>
              </a>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const NavItems = () => (
    <>
      <NavLink href="/about-us">About Us</NavLink>
      <NavLink href="/services">Services</NavLink>
       <NavLink href="/destination">Destination</NavLink>
      {/* <DropdownNavItem
        trigger="Destination"
        items={[
          'Study in UK',
          'Study in USA',
          'Study in Canada',
          'Study in Croatia',
          'Study in South Korea',
          'Study in South Africa',
          'Study in Qatar',
          'Study in Spain',
          'Study in Argentina',
          'Study in Germany',
          'Study in Netherlands',
        ]}
      /> */}
      {/* <DropdownNavItem trigger="Training" items={['IELTS', 'PTE', 'TOEFL']} /> */}
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact-us">Contact us</NavLink>
    </>
  )

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pr-6 py-4 transition-all duration-300"
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            className="relative h-20 w-60 overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/logo.png"
              alt="Horizon Education Consultancy"
              fill
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </motion.div>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <NavItems />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Search"
          className="text-gray-600 hover:text-[#30745c] transition-colors duration-200"
        >
          <Search className="h-5 w-5" />
        </motion.button>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Button
            className={cn(
              'relative overflow-hidden bg-[#30745c] text-white font-medium px-8 py-2.5 rounded-full',
              'shadow-[0_0_20px_rgba(48,116,92,0.5)]',
              'border border-[#30745c]/50',
              'before:absolute before:inset-0 before:rounded-full',
              'before:bg-[#30745c]',
              'after:absolute after:inset-0 after:rounded-full',
              'after:bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]',
              'after:mix-blend-soft-light',
              'after:animate-shine after:bg-[length:250%_100%]',
              'hover:shadow-[0_0_25px_rgba(48,116,92,0.7)]',
              'transition-all duration-300',
              'group'
            )}
          >
            <span className="relative z-10">CONTACT NOW</span>
          </Button>
          <motion.div
            className="absolute inset-0 -z-10 rounded-full opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1.3],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full bg-[#30745c]"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1.4],
                  x: Math.random() * 20 - 10,
                  y: Math.random() * 20 - 10,
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#30745c]/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white/80 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-6 mt-8">
              <NavItems />
              <div className="flex items-center justify-between pt-4 border-t">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Search"
                  className="text-gray-600 hover:text-[#30745c]"
                >
                  <Search className="h-5 w-5" />
                </motion.button>
                <Button
                  className={cn(
                    'bg-gradient-to-r from-[#30745c] to-[#19533e]',
                    'hover:from-[#19533e] hover:to-[#30745c]',
                    'text-white font-medium',
                    'shadow-lg hover:shadow-[#30745c]/25',
                    'transition-all duration-300'
                  )}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
