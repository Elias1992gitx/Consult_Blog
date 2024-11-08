'use client'

import { useOutsideClick } from '@/hooks/use-outside-click'
import { cn } from '@/lib/utils'
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Destination = {
  src: string
  title: string
  category: string
  content: React.ReactNode
  stats: {
    universities: string
    courses: string
    students: string
  }
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const DestinationsCarousel = ({
  items,
  initialScroll = 0,
}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full max-w-[1400px] mx-auto">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-8 scroll-smooth [scrollbar-width:none] px-4"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-6 w-full">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true,
                  },
                }}
                key={'destination-card-' + index}
                className="flex-shrink-0 w-[calc(33.333%-1rem)] min-w-[300px]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute right-4 -bottom-4 flex justify-end gap-2">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center disabled:opacity-50 shadow-lg"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center disabled:opacity-50 shadow-lg"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const DestinationCard = ({
  destination,
  index,
  layout = false,
}: {
  destination: Destination
  index: number
  layout?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselContext)

  const handleClose = useCallback(() => {
    setOpen(false)
    onCardClose(index)
  }, [onCardClose, index])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, handleClose])

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => {
    //setOpen(true)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `destination-${destination.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={
                  layout ? `category-${destination.category}` : undefined
                }
                className="text-base font-medium text-black dark:text-white"
              >
                {destination.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${destination.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {destination.title}
              </motion.p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">
                    {destination.stats.universities}
                  </p>
                  <p className="text-sm text-gray-600">Universities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">
                    {destination.stats.courses}
                  </p>
                  <p className="text-sm text-gray-600">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">
                    {destination.stats.students}
                  </p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
              <div className="py-10">{destination.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `destination-${destination.title}` : undefined}
        onClick={handleOpen}
        className="rounded-2xl bg-gray-100 dark:bg-neutral-900 h-[28rem] w-full overflow-hidden flex flex-col items-start justify-start relative z-10 group"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30 z-20 
          group-hover:via-black/40 group-hover:to-black/50 transition-all duration-500"
        />
        <div className="relative z-30 p-6 h-full flex flex-col justify-between">
          <div>
            <motion.p
              layoutId={layout ? `category-${destination.category}` : undefined}
              className="text-white/90 text-sm font-medium mb-2"
            >
              {destination.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${destination.title}` : undefined}
              className="text-white text-2xl font-semibold max-w-xs [text-wrap:balance]"
            >
              {destination.title}
            </motion.p>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-center">
              <p className="text-white/90 text-lg font-semibold">
                {destination.stats.universities}
              </p>
              <p className="text-white/70 text-xs">Universities</p>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-lg font-semibold">
                {destination.stats.courses}
              </p>
              <p className="text-white/70 text-xs">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-lg font-semibold">
                {destination.stats.students}
              </p>
              <p className="text-white/70 text-xs">Students</p>
            </div>
          </div>
        </div>
        <BlurImage
          src={destination.src}
          alt={destination.title}
          fill
          className="object-cover absolute z-10 inset-0 group-hover:scale-105 transition-transform duration-500"
        />
      </motion.button>
    </>
  )
}

export const destinations: Destination[] = [
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
          Experience the crossroads of Europe and Asia with Turkey&apos;s modern
          educational infrastructure.
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
]

const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn(
        'transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  )
}
