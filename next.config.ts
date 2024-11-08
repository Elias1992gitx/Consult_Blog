/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.auckland.ac.nz',
      },
      {
        protocol: 'https',
        hostname: 'www.keele.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.aber.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.bournemouth.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.coventry.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.ox.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.harvard.edu',
      },
      {
        protocol: 'https',
        hostname: 'www.mit.edu',
      },
      {
        protocol: 'https',
        hostname: 'www.cam.ac.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.stanford.edu',
      },
      {
        protocol: 'https',
        hostname: 'www.utoronto.ca',
      },
      {
        protocol: 'https',
        hostname: 'www.yale.edu',
      },
      {
        protocol: 'https',
        hostname: 'www.princeton.edu',
      },
      {
        protocol: 'https',
        hostname: 'ethz.ch',
      },
      {
        protocol: 'https',
        hostname: 'www.unimelb.edu.au',
      },
      {
        protocol: 'https',
        hostname: 'www.nus.edu.sg',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.uniroma1.it',
      },
      {
        protocol: 'https',
        hostname: 'www.unibo.it',
      },
      {
        protocol: 'https',
        hostname: 'www.itu.edu.tr',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },

      {
        protocol: 'https',
        hostname: 'www.boun.edu.tr',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Add this new hostname
      },
    ],
  },
}

module.exports = nextConfig
