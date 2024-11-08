'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTelegram,
  FaTiktok,
  FaPhone,
  FaEnvelope 
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white min-h-[400px] flex flex-col">
      <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-grow">
        {/* Top Section with Logo and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <Link href="/" className="block mb-4">
              <Image
                src="/images/logo.png"
                alt="Deborah's Study Abroad"
                width={280}
                height={180}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="col-span-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-4">
              Deborah's Study Abroad
            </h2>
            <p className="text-gray-400 mb-4">
              Deborah's Study Abroad has a long-standing reputation for
              excellence, having guided thousands of students to prestigious
              universities around the world.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 flex flex-col items-center lg:items-start lg:ml-24">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-2">
                <FaPhone className="w-4 h-4" />
                <a
                  href="tel:+17179801615"
                  className="hover:text-white transition-colors"
                >
                  +1 717 980 1615
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                <a
                  href="mailto:dawit.dessie@fora.travel"
                  className="hover:text-white transition-colors"
                >
                  dawit.dessie@fora.travel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright and Social Links */}
      <div className="border-t border-gray-800 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-neutral-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} All rights reserved, Deborah Study
              Abroad
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 sm:mr-32">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaTelegram, href: '#' },
                { icon: FaTiktok, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
