import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header({ isPageReady = false }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-neutral-900 text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Left: Prominent Official Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-4 text-white group flex-shrink-0"
          aria-label="Black Doll Dahliya Home"
        >
          <img
            src="/logo.png"
            alt="Black Doll Dahliya"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
          />
          <div className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-sm sm:text-lg md:text-xl font-black tracking-tight leading-tight uppercase text-white group-hover:text-neutral-200 transition-colors">
              Black Doll Dahliya
            </span>
            <span className="text-[9px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase hidden xs:block sm:block">
              Signature Collection • 2026
            </span>
          </div>
        </Link>

        {/* Center: Clean Nav Links for Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
          <Link to="/" className="text-white hover:text-white transition-colors relative font-semibold">
            Shop
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
          </Link>
          <a href="#collection" className="hover:text-white transition-colors">
            Collection
          </a>
          <a href="#whats-new" className="hover:text-white transition-colors">
            What's New
          </a>
          <a href="#clearance" className="text-neutral-400 hover:text-rose-400 transition-colors">
            Clearance
          </a>
        </nav>

        {/* Right: Bag & Status Dots */}
        <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
          <a
            href="#bag"
            className="text-xs sm:text-sm font-medium tracking-tight text-white hover:text-neutral-300 transition-colors flex items-center gap-1.5 sm:gap-2"
          >
            <span>Bag</span>
            <span className="bg-neutral-800 text-neutral-200 font-mono text-[11px] sm:text-xs px-2 py-0.5 rounded-full border border-neutral-700">
              0
            </span>
          </a>

          <div className="flex items-center gap-1.5" aria-hidden="true" title="Status: Live">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-600 inline-block animate-pulse"></span>
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white border border-neutral-800 inline-block"></span>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
