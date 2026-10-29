import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LinkedinIcon } from './components/ui/Icons'
import ErrorBoundary from './components/ui/ErrorBoundary'

import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import EducationSection from './components/sections/EducationSection'
import BlogSection from './components/sections/BlogSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      <div className="relative bg-background min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Subtle Noise Texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Transient splash overlay that automatically fades away */}
        <AnimatePresence>
          {showSplash && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080810] pointer-events-none"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  boxShadow: '0 0 35px rgba(0,212,255,0.4)',
                }}
              >
                <span className="text-black font-black text-2xl font-display">S</span>
              </div>
              <p className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase animate-pulse">
                Sarthak Pravin Nandre
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />

        <main>
          <HeroSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <AboutSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <ExperienceSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <ProjectsSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <SkillsSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <AchievementsSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <EducationSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <BlogSection />

          <div className="section-divider mx-auto max-w-7xl px-8" />
          <ContactSection />
        </main>

        <Footer />

        {/* Floating Let's Connect Pill */}
        <motion.a
          href="https://www.linkedin.com/in/sarthak-nandre/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed right-6 bottom-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.25))',
            border: '1px solid rgba(0,212,255,0.4)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,212,255,0.25)',
          }}
          title="Connect on LinkedIn"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <LinkedinIcon size={14} className="text-cyan-400" />
          <span>Let's Connect</span>
        </motion.a>
      </div>
    </ErrorBoundary>
  )
}
