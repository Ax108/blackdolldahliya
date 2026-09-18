import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import productsData from '../../products.json'

export default function HomePage({ isPageReady = true }) {
  const products = Array.isArray(productsData) ? productsData : productsData.products || []

  // Live Digital Time for maximalist telemetry
  const [timeStr, setTimeStr] = useState('')
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Scroll Progress Bar for Maximalist Header Indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const formatPrice = (price) => {
    if (typeof price !== 'number' && !price) return ''
    return `₹${price.toLocaleString('en-IN')}.00`
  }

  // Letters of DAHLIYA with random up/down entry offsets and smooth cinematic pacing
  const titleLetters = [
    { char: 'D', initialY: -75, delay: 0 },
    { char: 'A', initialY: 48, delay: 0.06 },
    { char: 'H', initialY: -92, delay: 0.16 },
    { char: 'L', initialY: 65, delay: 0.1 },
    { char: 'I', initialY: -44, delay: 0.2 },
    { char: 'Y', initialY: 82, delay: 0.26 },
    { char: 'A', initialY: -56, delay: 0.12 },
  ]

  // Marquee statements
  const marqueeItems = [
    'BLACK DOLL DAHLIYA',
    'SIGNATURE COLLECTION',
    'HIGH CONTRAST STREETWEAR',
    'LIMITED EDITION',
    'DARK AESTHETICS',
    'WORLDWIDE DISPATCH',
    'EST. 2022',
  ]

  // Row partitions for asymmetric layout
  const row1 = products.slice(0, 4)
  const row2Left = products.slice(4, 6)
  const row2Right = products[6]
  const row3 = products.slice(7, 10)
  const row4Left = products[10]
  const row4Right = products.slice(11, 13)
  const remaining = products.slice(13)

  const renderCard = (product, aspectClass = 'aspect-square', delayIndex = 0, isInitialView = false) => {
    if (!product) return null
    const hasSale = Boolean(product.original_price && product.original_price > product.price)

    return (
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={
          isInitialView
            ? isPageReady
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.98 }
            : undefined
        }
        whileInView={
          !isInitialView && isPageReady
            ? { opacity: 1, y: 0, scale: 1 }
            : undefined
        }
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.65,
          delay: isPageReady ? Math.min(delayIndex * 0.08, 0.35) : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-col group w-full relative"
      >
        {/* Product Image Container */}
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className={`w-full ${aspectClass} bg-[#e5e5e7] overflow-hidden block relative`}
        >
          {/* Sale Badge */}
          {hasSale && (
            <span className="absolute top-2.5 left-2.5 bg-white text-black text-[10px] font-mono font-bold px-2 py-0.5 rounded-full z-20 shadow-md">
              SALE
            </span>
          )}

          {/* Floating Hover Action Pill (Maximalist interaction) */}
          <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:flex items-center gap-1.5 bg-black/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-full border border-neutral-700 backdrop-blur-sm">
            <span>VIEW</span>
            <ArrowUpRight size={12} />
          </div>

          {/* Primary Front Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              product.hover_image
                ? 'group-hover:opacity-0 group-hover:scale-105'
                : 'group-hover:scale-105'
            }`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/product.jpg'
            }}
          />

          {/* Secondary Hover Image (Back View) */}
          {product.hover_image && (
            <img
              src={product.hover_image}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
        </a>

        {/* Product Details */}
        <div className="pt-2 sm:pt-2.5 pb-0.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-semibold text-white">
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="truncate hover:underline tracking-tight group-hover:text-neutral-200 transition-colors flex items-center gap-1"
          >
            <span className="truncate">{product.name}</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-70 transition-opacity flex-shrink-0 hidden sm:inline" />
          </a>
          <div className="flex items-center gap-1 sm:gap-1.5 font-mono flex-shrink-0 text-[11px] sm:text-xs md:text-sm">
            {hasSale && (
              <span className="line-through text-neutral-500 font-normal text-[10px] sm:text-[11px]">
                {formatPrice(product.original_price)}
              </span>
            )}
            <span className="text-neutral-200 font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Category Tag */}
        <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
          ▪ {product.category || 'APPAREL'}
        </span>
      </motion.article>
    )
  }

  return (
    <main className="w-full bg-black text-white selection:bg-neutral-800 overflow-x-hidden relative">
      {/* Top Subtle Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Massive Hero Headline with Kinetic Letter Reactions */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 pt-6 sm:pt-8 pb-2 sm:pb-4 overflow-hidden">
        <div className="flex items-baseline justify-between w-full select-none">
          {/* Letters easing in from random sides with interactive spring shifts */}
          <div className="flex items-baseline tracking-[-0.04em] sm:tracking-[-0.05em] leading-[0.82] m-0 p-0">
            {titleLetters.map((item, idx) => (
              <motion.span
                key={`${item.char}-${idx}`}
                initial={{ y: item.initialY, opacity: 0 }}
                animate={isPageReady ? { y: 0, opacity: 1 } : { y: item.initialY, opacity: 0 }}
                transition={{
                  duration: 0.85,
                  delay: isPageReady ? item.delay : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: idx % 2 === 0 ? -12 : 12,
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 350, damping: 12 },
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-block text-[13.5vw] font-['Outfit',sans-serif] font-black text-[#f1efe8] uppercase cursor-pointer transition-colors hover:text-white"
              >
                {item.char}
              </motion.span>
            ))}
          </div>

          {/* Trademark Registered Circle with spring interactive rotation */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={isPageReady ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: isPageReady ? 0.22 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.15, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="text-[2.8vw] sm:text-[3vw] font-['Outfit',sans-serif] font-bold text-[#f1efe8] leading-none mb-1 sm:mb-2 border sm:border-2 border-[#f1efe8] rounded-full w-[5vw] h-[5vw] min-w-[24px] min-h-[24px] sm:min-w-[38px] sm:min-h-[38px] flex items-center justify-center flex-shrink-0 ml-2 cursor-pointer"
          >
            ®
          </motion.div>
        </div>
      </section>

      {/* 4-Column Editorial Spec Bar with Live Digital Time Telemetry */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.65, delay: isPageReady ? 0.25 : 0, ease: 'easeOut' }}
        className="w-full border-t border-b border-neutral-800 my-4 sm:my-6"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs text-neutral-400">
          {/* Col 1 */}
          <div>
            <span className="font-semibold text-white tracking-wider uppercase block text-xs">
              BLACK DOLL DAHLIYA
            </span>
            <span className="text-neutral-500 mt-0.5 sm:mt-1 block font-mono text-[10px] sm:text-[11px]">
              SIGNATURE APPAREL • EST. 2022
            </span>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-1">
            <span className="font-semibold text-neutral-200 block mb-1 uppercase tracking-wider text-[10px] sm:text-[11px]">
              WHY
            </span>
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-neutral-400">
              Created by Black Doll Dahliya team, this store and signature collection celebrates our collective creativity, dark aesthetics, and passion for alternative apparel. Carefully designed.
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-1 sm:gap-1.5 text-[10px] sm:text-[11px]">
            <a href="#shipping" className="text-neutral-300 hover:text-white transition-colors tracking-wide font-medium">
              SHIPPING &amp; RETURNS
            </a>
            <span className="text-neutral-500 font-mono">
              CURRENCY: INR (₹)
            </span>
          </div>

          {/* Col 4: Digital Time & Live Status */}
          <div className="sm:text-right flex flex-col sm:items-end justify-between gap-1">
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{timeStr || 'LIVE'}</span>
            </div>
            <span className="font-mono text-neutral-500 text-[10px]">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </motion.section>

      {/* Infinite Kinetic Marquee Strip (Maximalist Fashion Element) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={isPageReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: isPageReady ? 0.3 : 0 }}
        className="w-full overflow-hidden border-b border-neutral-900 bg-neutral-950 py-2 sm:py-2.5"
      >
        <motion.div
          className="flex whitespace-nowrap gap-8 text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase select-none"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{text}</span>
              <span className="text-neutral-600">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* Product Showcase Container */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-8 md:px-12 py-6 sm:py-12 flex flex-col gap-8 sm:gap-16">
        {/* ROW 1: 4 Columns on Desktop, 2 Columns in Phone Mode */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-7">
          {row1.map((product, idx) => (
            <React.Fragment key={product.url || product.name}>
              {renderCard(product, 'aspect-square', idx, true)}
            </React.Fragment>
          ))}
        </section>

        {/* ROW 2: Asymmetric Split Grid (2 Columns in Phone Mode, Hero Featured Product on Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
          {/* Left Column (2 Products Side by Side in Phone Mode) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-6 md:gap-7">
            {row2Left.map((product, idx) => (
              <React.Fragment key={product.url || product.name}>
                {renderCard(product, 'aspect-square', idx, true)}
              </React.Fragment>
            ))}
          </div>

          {/* Right Column (Featured Hero Showcase Card) */}
          {row2Right && (
            <div className="lg:col-span-7">
              {renderCard(row2Right, 'aspect-[4/3] sm:aspect-[16/11]', 2, true)}
            </div>
          )}
        </section>

        {/* ROW 3: 3-Product Asymmetric Cluster (2 Columns in Phone Mode) */}
        <section className="grid grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-6 md:gap-8 items-end">
          {row3[0] && (
            <div className="col-span-1 lg:col-span-3">
              {renderCard(row3[0], 'aspect-square', 0)}
            </div>
          )}
          {row3[1] && (
            <div className="col-span-1 lg:col-span-5">
              {renderCard(row3[1], 'aspect-[3/4]', 1)}
            </div>
          )}
          {row3[2] && (
            <div className="col-span-2 sm:col-span-1 lg:col-span-4">
              {renderCard(row3[2], 'aspect-square', 2)}
            </div>
          )}
        </section>

        {/* ROW 4: Lower Asymmetric Split (Tall Portrait + 2 Products in Phone Mode) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
          {row4Left && (
            <div className="lg:col-span-5">
              {renderCard(row4Left, 'aspect-[3/4]', 0)}
            </div>
          )}

          <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-6 md:gap-7">
            {row4Right.map((product, idx) => (
              <React.Fragment key={product.url || product.name}>
                {renderCard(product, 'aspect-square', idx + 1)}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ROW 5: Remaining Products Archive Grid (2 Columns in Phone Mode) */}
        {remaining.length > 0 && (
          <section className="pt-6 sm:pt-12 border-t border-neutral-900">
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                SIGNATURE ARCHIVE ({remaining.length} ITEMS)
              </span>
              <span className="text-xs font-mono text-neutral-500">
                100% AUTHENTIC MERCH
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-7">
              {remaining.map((product, idx) => (
                <React.Fragment key={product.url || product.name}>
                  {renderCard(product, 'aspect-square', idx % 4)}
                </React.Fragment>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
