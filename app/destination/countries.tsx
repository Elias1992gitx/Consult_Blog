'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useFilters } from './FilterContext'
import { StudyCard } from './types'

const allStudyCards: StudyCard[] = [
  // Canadian Universities
  {
    title: 'University of Toronto',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'UofT',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      "Canada's leading research university, renowned for innovation in medicine, technology, and humanities. Features world-class facilities and diverse research opportunities.",
  },
  {
    title: 'McGill University',
    dates: 'Flexible Entry | Year-Round Programs',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'McGill',
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Historic institution in Montreal known for excellence in medicine, law, and engineering. Offers a unique blend of English and French cultural experiences.',
  },
  {
    title: 'University of British Columbia',
    dates: 'Multiple Intakes | Customizable Duration',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'UBC',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d',
    category: 'Environmental Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      "Leading research institution on Canada's west coast, excelling in sustainability, life sciences, and technology. Beautiful campus with ocean and mountain views.",
  },
  {
    title: 'University of Waterloo',
    dates: 'Co-op Terms Available | Seasonal Flexibility',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'Waterloo',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a',
    category: 'Computer Science & Mathematics',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Leader in computer science, engineering, and cooperative education. Strong connections with tech industry and innovation ecosystem.',
  },
  {
    title: 'McMaster University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'McMaster',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Renowned for innovative medical education and research. Strong programs in engineering, business, and social sciences.',
  },
  {
    title: 'University of Montreal',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'UdeM',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Leading French-language university in North America. Excellence in life sciences, arts, and social sciences with rich cultural environment.',
  },
  {
    title: "Queen's University",
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: "Queen's",
    image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Historic institution known for exceptional student experience. Strong programs in business, engineering, and health sciences.',
  },
  {
    title: 'Western University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'Western',
    image: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Comprehensive research university with strong medical and business schools. Beautiful campus with excellent student facilities.',
  },
  {
    title: 'University of Calgary',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Canada',
    country: 'Canada',
    continent: 'North America',
    universityName: 'UCalgary',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6',
    category: 'Environmental Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Leading research institution in Western Canada. Known for energy research, engineering, and environmental studies.',
  },
  // US Universities
  {
    title: 'Massachusetts Institute of Technology (MIT)',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'MIT',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'A world-leading institution renowned for excellence in science, engineering, and technology. Notable departments include Computer Science, Engineering, Physics, and Economics. Features cutting-edge research facilities and innovation hubs.',
  },
  {
    title: 'Harvard University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'Harvard University',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      "America's oldest institution of higher learning, excelling in Law, Business, Medicine, and Arts & Sciences. Home to world-renowned research centers and extensive academic resources.",
  },
  {
    title: 'Stanford University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Environmental Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'A leading research university in Silicon Valley, known for excellence in Computer Science, Engineering, Business, and Medicine. Strong industry connections and entrepreneurial ecosystem.',
  },
  {
    title: 'California Institute of Technology (Caltech)',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'Caltech',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      "A world-renowned science and engineering institute, featuring exceptional programs in Physics, Chemistry, Engineering, and Planetary Sciences. Home to NASA's Jet Propulsion Laboratory.",
  },
  {
    title: 'Yale University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'Yale',
    image: 'https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'An Ivy League institution known for excellence in Law, Drama, and Medicine. Features historic architecture and world-class research facilities across multiple disciplines.',
  },
  {
    title: 'Princeton University',
    dates: 'Fall & Spring Semesters | Research Programs',
    location: 'USA',
    country: 'United States',
    continent: 'North America',
    universityName: 'Princeton',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Liberal Arts & Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Ivy League institution renowned for research excellence and liberal arts education.',
  },
  {
    title: 'University of Chicago',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'UChicago',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Renowned for pioneering research in Economics, Physics, and Social Sciences. Features distinctive Gothic architecture and a tradition of rigorous academic inquiry.',
  },
  {
    title: 'Columbia University',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United States',
    country: 'United States',
    continent: 'North America',
    universityName: 'Columbia',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America',
    description:
      'Located in New York City, Columbia excels in Journalism, Business, and Arts. Benefits from deep connections to global industries and cultural institutions.',
  },
  // UK Universities
  {
    title: 'University of Oxford',
    dates: 'Michaelmas, Hilary & Trinity Terms Available',
    location: 'United Kingdom',
    country: 'United Kingdom',
    continent: 'Europe',
    universityName: 'Oxford',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'The oldest university in the English-speaking world...',
  },
  {
    title: 'University of Cambridge',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'United Kingdom',
    country: 'United Kingdom',
    continent: 'Europe',
    universityName: 'Cambridge',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'A world-renowned university known for excellence...',
  },
  {
    title: 'Imperial College London',
    dates: 'Term-Based Structure | Research Placements',
    location: 'United Kingdom',
    country: 'United Kingdom',
    continent: 'Europe',
    universityName: 'Imperial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Environmental Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'A world-leading science-focused institution...',
  },
  // Continue with more UK universities...

  // German Universities
  {
    title: 'Technical University of Munich',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Germany',
    country: 'Germany',
    continent: 'Europe',
    universityName: 'TUM',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27',
    category: 'Medical Research & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Leading technical university in Germany...',
  },
  // Continue with more German universities...

  // South Korean Universities
  {
    title: 'Seoul National University',
    dates: 'Spring & Fall Sessions | Research Intensive',
    location: 'South Korea',
    country: 'South Korea',
    continent: 'Asia',
    universityName: 'SNU',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description: 'The most prestigious university in South Korea...',
  },
  // Continue with more universities...

  // Add after the existing universities
  {
    title: 'ETH Zurich',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Switzerland',
    country: 'Switzerland',
    continent: 'Europe',
    universityName: 'ETH',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d',
    category: 'Engineering & Technology',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description:
      "Switzerland's leading institution for technology and natural sciences, known for breakthrough research in quantum engineering and sustainable technology.",
  },
  {
    title: 'Delft University of Technology',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Netherlands',
    country: 'Netherlands',
    continent: 'Europe',
    universityName: 'TU Delft',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27',
    category: 'Civil Engineering & Architecture',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description:
      'Leading in water management, sustainable energy, and architectural innovation. Strong focus on practical engineering solutions.',
  },
  {
    title: 'KU Leuven',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Belgium',
    country: 'Belgium',
    continent: 'Europe',
    universityName: 'KU Leuven',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd',
    category: 'Biomedical Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description:
      'Excellence in biotechnology and life sciences research. Historic institution with modern research facilities.',
  },
  {
    title: 'Sciences Po Paris',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'France',
    country: 'France',
    continent: 'Europe',
    universityName: 'Sciences Po',
    image: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852',
    category: 'Political Sciences & International Relations',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description:
      'Premier institution for political science and international affairs. Strong focus on global governance and public policy.',
  },
  {
    title: 'Technical University of Denmark',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Denmark',
    country: 'Denmark',
    continent: 'Europe',
    universityName: 'DTU',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27',
    category: 'Sustainable Engineering & Green Tech',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description:
      'Leading in sustainable technologies and renewable energy research. Strong industry partnerships and innovation focus.',
  },
  // Qatar Universities
  {
    title: 'Qatar University',
    dates: 'Rolling Admissions | Semester-Based Programs',
    location: 'Qatar',
    country: 'Qatar',
    continent: 'Asia',
    universityName: 'QU',
    image: 'https://images.unsplash.com/photo-1557425955-df376b5903c8',
    category: 'Engineering & Petroleum Studies',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description:
      'Leading institution in Qatar focusing on engineering, petroleum studies, and Islamic studies. State-of-the-art facilities and research centers.',
  },
  {
    title: 'Hamad Bin Khalifa University',
    dates: 'Year-Round Enrollment | Research Opportunities',
    location: 'Qatar',
    country: 'Qatar',
    continent: 'Asia',
    universityName: 'HBKU',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
    category: 'Innovation & Technology',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description:
      'Research-focused university specializing in sustainable development, artificial intelligence, and Islamic finance.',
  },
  {
    title: 'Carnegie Mellon University Qatar',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Qatar',
    country: 'Qatar',
    continent: 'Asia',
    universityName: 'CMU-Q',
    image: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7',
    category: 'Computer Science & Business',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description:
      'Leading programs in computer science, business administration, and information systems with strong industry connections.',
  },
  // Continue with more Qatar universities...

  // Additional South Korean Universities
  {
    title: 'Korea Advanced Institute of Science and Technology',
    dates: 'Spring & Fall Sessions | Research Intensive',
    location: 'South Korea',
    country: 'South Korea',
    continent: 'Asia',
    universityName: 'KAIST',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27',
    category: 'Technology & Innovation',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description:
      'Premier science and technology university known for robotics, AI, and engineering innovation.',
  },
  {
    title: 'Yonsei University',
    dates: 'Semester Exchange | Cultural Immersion Programs',
    location: 'South Korea',
    country: 'South Korea',
    continent: 'Asia',
    universityName: 'Yonsei',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d',
    category: 'Business & International Studies',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Asia',
    description:
      'Leading private university excelling in business, international studies, and Korean language education.',
  },
  // South African Universities
  {
    title: 'University of Cape Town',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'South Africa',
    country: 'South Africa',
    continent: 'Africa',
    universityName: 'UCT',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'February 2025',
    region: 'Africa',
    description:
      'Leading African university known for research excellence and innovation. Beautiful campus with Table Mountain views.',
  },
  {
    title: 'University of the Witwatersrand',
    dates: 'Semester-based | Research Programs',
    location: 'South Africa',
    country: 'South Africa',
    continent: 'Africa',
    universityName: 'Wits',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Engineering & Mining',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'February 2025',
    region: 'Africa',
    description:
      'Premier institution for mining engineering and research in Africa. Strong industry connections and innovative programs.',
  },
  // Argentinian Universities
  {
    title: 'University of Buenos Aires',
    dates: 'Fall & Spring Semesters | Research Programs',
    location: 'Argentina',
    country: 'Argentina',
    continent: 'South America',
    universityName: 'UBA',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae',
    category: 'Arts & Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'March 2025',
    region: 'South America',
    description:
      'Largest university in Argentina with rich academic tradition. Excellence in research and cultural studies.',
  },
  {
    title: 'National University of Córdoba',
    dates: 'Semester Exchange | Cultural Programs',
    location: 'Argentina',
    country: 'Argentina',
    continent: 'South America',
    universityName: 'UNC',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6',
    category: 'Medicine & Technology',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'March 2025',
    region: 'South America',
    description:
      'Historic institution known for medical sciences and technological innovation. Beautiful colonial architecture.',
  },
  // Croatian Universities
  {
    title: 'University of Zagreb',
    dates: 'Fall & Spring Semesters | Full Academic Year Available',
    location: 'Croatia',
    country: 'Croatia',
    continent: 'Europe',
    universityName: 'UNIZG',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27',
    category: 'Medicine & Life Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'October 2024',
    region: 'Europe',
    description: 'Oldest and largest Croatian university, known for medical sciences and research excellence.',
  },
  {
    title: 'University of Split',
    dates: 'Semester-based Programs | Summer Schools',
    location: 'Croatia',
    country: 'Croatia',
    continent: 'Europe',
    universityName: 'UNIST',
    image: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852',
    category: 'Maritime Studies & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'October 2024',
    region: 'Europe',
    description: 'Leading institution in maritime studies and Mediterranean research.',
  },
  {
    title: 'University of Rijeka',
    dates: 'Fall & Spring Semesters | Research Programs',
    location: 'Croatia',
    country: 'Croatia',
    continent: 'Europe',
    universityName: 'UNIRI',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Technology & Innovation',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'October 2024',
    region: 'Europe',
    description: 'Modern research university with strong focus on technology and innovation.',
  },
  {
    title: 'University of Osijek',
    dates: 'Flexible Entry | Year-round Programs',
    location: 'Croatia',
    country: 'Croatia',
    continent: 'Europe',
    universityName: 'UNIOS',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6',
    category: 'Agricultural Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'October 2024',
    region: 'Europe',
    description: 'Excellence in agricultural sciences and regional development studies.',
  },
  {
    title: 'University of Zadar',
    dates: 'Semester Exchange | Summer Programs',
    location: 'Croatia',
    country: 'Croatia',
    continent: 'Europe',
    universityName: 'UNIZD',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae',
    category: 'Humanities & Social Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'October 2024',
    region: 'Europe',
    description: 'Historic university specializing in humanities and Mediterranean studies.',
  },
  // Spanish Universities
  {
    title: 'University of Barcelona',
    dates: 'Fall & Spring Semesters | Research Programs',
    location: 'Spain',
    country: 'Spain',
    continent: 'Europe',
    universityName: 'UB',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    category: 'Medicine & Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Leading research institution in Spain with excellence in medicine and sciences.',
  },
  {
    title: 'Complutense University of Madrid',
    dates: 'Semester Programs | Summer Courses',
    location: 'Spain',
    country: 'Spain',
    continent: 'Europe',
    universityName: 'UCM',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d',
    category: 'Arts & Humanities',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Historic Spanish university known for arts, humanities, and cultural studies.',
  },
  {
    title: 'University of Valencia',
    dates: 'Fall & Spring Semesters | Research Options',
    location: 'Spain',
    country: 'Spain',
    continent: 'Europe',
    universityName: 'UV',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
    category: 'Life Sciences & Business',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Comprehensive university with strong programs in life sciences and business.',
  },
  {
    title: 'Autonomous University of Barcelona',
    dates: 'Flexible Entry | Year-round Programs',
    location: 'Spain',
    country: 'Spain',
    continent: 'Europe',
    universityName: 'UAB',
    image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',
    category: 'Engineering & Technology',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Leading institution in engineering and technological innovation.',
  },
  {
    title: 'University of Granada',
    dates: 'Semester Exchange | Language Programs',
    location: 'Spain',
    country: 'Spain',
    continent: 'Europe',
    universityName: 'UGR',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae',
    category: 'Language & Cultural Studies',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe',
    description: 'Renowned for language programs and cultural immersion experiences.',
  }
]

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
  'Study in Switzerland': { code: 'CH', name: 'Switzerland' },
  'Study in Belgium': { code: 'BE', name: 'Belgium' },
  'Study in France': { code: 'FR', name: 'France' },
  'Study in Denmark': { code: 'DK', name: 'Denmark' }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const countryMapping = {
  'USA': 'United States',
  'UK': 'United Kingdom',
  'Canada': 'Canada',
  'Switzerland': 'Switzerland',
  'Belgium': 'Belgium',
  'France': 'France',
  'Denmark': 'Denmark',
  'Qatar': 'Qatar',
  'South Korea': 'South Korea',
  'South Africa': 'South Africa',
  'Argentina': 'Argentina'
}

export default function DestinationGrid() {
  const { filters } = useFilters()
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 6

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const filteredCards = allStudyCards.filter(card => {
    const matchesContinent = !filters.continent || filters.continent === 'All' || 
      card.continent === filters.continent
    
    const matchesCountry = !filters.country || filters.country === 'All' || 
      card.country === countryMapping[filters.country as keyof typeof countryMapping] || 
      card.country === filters.country
    
    return matchesContinent && matchesCountry
  })

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard)
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage)

  return (
    <section className="py-16 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={filters.toString()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-normal mb-4">
                Global Academic Excellence
              </h2>
              <p className="text-gray-600 ">
                Join a global community of scholars and
                innovators shaping tomorrow's breakthroughs.From cutting-edge research labs to historic
                lecture halls, discover programs that blend academic rigor with
                cultural exploration. 
              </p>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By:</span>
              <select className="p-2 rounded-lg bg-transparent border border-gray-200">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration</option>
              </select>
            </div> */}
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {currentCards.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-sm">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-normal mb-2">{card.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{card.dates}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{card.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-12">
            <button
              onClick={handlePrevPage}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                  page === currentPage
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center ${
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>→
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
