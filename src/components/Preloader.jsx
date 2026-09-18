import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fast, fluid counter (~700ms total)
    const startTime = performance.now()
    const duration = 700

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime
      // Smooth fluid non-linear acceleration curve
      const t = Math.min(elapsed / duration, 1)
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      const currentProgress = Math.min(Math.round(eased * 100), 100)
      setProgress(currentProgress)

      if (t < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        // Immediate smooth transition to slide down without lag
        if (onComplete) onComplete()
      }
    }

    const frameId = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(frameId)
  }, [onComplete])

  const size = 280
  const strokeWidth = 3
  const radius = 120

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '100%',
        transition: {
          duration: 0.48,
          ease: [0.65, 0, 0.35, 1], // crisp, fluid wipe ease without lingering
        },
      }}
      className="fixed inset-0 z-[100] w-full h-full bg-black flex flex-col items-center justify-center select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center p-6">
        {/* Large Fluid Spinner Ring */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
          {/* Fluid rotating stroke spinner */}
          <motion.svg
            className="w-full h-full"
            viewBox={`0 0 ${size} ${size}`}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'linear',
            }}
          >
            {/* Background subtle track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              className="text-neutral-900"
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
            />
            {/* Fluid arc spinner */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              className="text-white"
              strokeWidth={strokeWidth}
              strokeDasharray="220 500"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </motion.svg>

          {/* Big Logo Centered */}
          <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
            <motion.img
              src="/logo.png"
              alt="Black Doll Dahliya"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-28 sm:w-36 md:w-44 h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            />
          </div>
        </div>

        {/* Fast Fluid Counter */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-center">
          <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            <span>{progress}</span>
            <span className="text-xl sm:text-2xl text-neutral-400 ml-1">%</span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase">
            BLACK DOLL DAHLIYA
          </span>
        </div>
      </div>
    </motion.div>
  )
}
