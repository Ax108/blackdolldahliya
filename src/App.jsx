import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion'
import 'lenis/dist/lenis.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import HomePage from './pages/HomePage'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isPageReady, setIsPageReady] = useState(false)

  useEffect(() => {
    if (!isPageReady) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isPageReady])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        respectReducedMotion: false,
      }}
    >
      {/* Preloader Overlay - onExitComplete guarantees it has 100% left the screen before revealing */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsPageReady(true)
        }}
      >
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-black text-white selection:bg-neutral-800 selection:text-white">
          <Header isPageReady={isPageReady} />
          <Routes>
            <Route path="/" element={<HomePage isPageReady={isPageReady} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  )
}
