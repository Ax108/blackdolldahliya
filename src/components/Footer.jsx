import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="w-full relative bg-black text-white overflow-hidden mt-16">
      {/* Widescreen Gothic Engraving Background Texture */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black pointer-events-none" />

      {/* Main Footer Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 w-full"
      >
        {/* Top Massive Statement Banner with borders */}
        <section className="w-full border-t border-b border-neutral-700/80">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* Left Headline */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black tracking-[-0.04em] text-[#f1efe8] leading-[0.92] font-['Outfit',sans-serif]">
                Made to be worn.
              </h2>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black tracking-[-0.04em] text-neutral-600 leading-[0.92] mt-1 sm:mt-2 font-['Outfit',sans-serif]">
                Or judged. Or both.
              </h2>
            </motion.div>

            {/* Right Giant (C)26 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="flex items-center text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-black tracking-tighter text-[#f1efe8] leading-none select-none font-['Outfit',sans-serif] flex-shrink-0 cursor-default"
            >
              <span className="inline-flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] mr-1 font-bold">
                ©
              </span>
              <span>26</span>
            </motion.div>
          </div>
        </section>

        {/* Middle Bio Section */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base font-normal text-neutral-300 max-w-2xl leading-relaxed tracking-tight"
          >
            Created by Black Doll Dahliya team, this store and signature collection celebrates our collective creativity, dark aesthetics, and passion for alternative apparel. Carefully designed.
          </motion.p>
        </div>

        {/* Bottom Multi-Column Information Strip with Top Border */}
        <section className="w-full border-t border-neutral-700/80">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 text-xs text-neutral-400">
            {/* Col 1: Brand & Copyright */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-base">++</span>
                <span className="uppercase tracking-wider font-['Outfit',sans-serif]">blackdolldahlia</span>
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 font-mono">
                All rights reserved ©2022
              </span>
              <a
                href="https://astrax.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-col items-start gap-1.5 mt-4 text-neutral-400 hover:text-white transition-colors group w-fit"
                title="Powered by AstraX"
              >
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  powered by astrax
                </span>
                <img
                  src="https://astrax.dev/assets/AstraX-logo-wxvfdP12.png"
                  alt="AstraX"
                  className="h-4 sm:h-4.5 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/astrax-logo.png'
                  }}
                />
              </a>
            </motion.div>

            {/* Col 2: MY ACCOUNT */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
                MY ACCOUNT
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-neutral-300">
                <li>
                  <a
                    href="https://blackdolldahlia.com/order-tracking/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/my-account/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/my-account/orders/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Order History
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Col 3: INFORMATION */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
                INFORMATION
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-neutral-300">
                <li>
                  <a
                    href="https://blackdolldahlia.com/about-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/terms-of-use/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/privacy-policy-2/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/refund_returns/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Col 4: HELP & ORDERS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
                ORDERS &amp; HELP
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-neutral-300">
                <li>
                  <a
                    href="https://blackdolldahlia.com/contact-us/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://blackdolldahlia.com/custom-order/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Book Your Order
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Col 5: SOCIALS & DIRECT */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
                CONNECT
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-neutral-300">
                <li>
                  <a
                    href="https://instagram.com/blackdolldahlia"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@blackdolldahlia.com"
                    className="hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </footer>
  )
}
