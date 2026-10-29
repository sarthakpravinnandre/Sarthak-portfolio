import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { personalInfo } from '../../data/portfolio'
import HeroCanvas from '../3d/HeroCanvas'
import ErrorBoundary from '../ui/ErrorBoundary'

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)

    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setWebGLSupported(false)
    } catch {
      setWebGLSupported(false)
    }

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Atmospheric lighting glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.03) 60%, transparent 80%)',
          filter: 'blur(50px)',
        }}
      />

      {/* 3D Scene Interactive Centerpiece */}
      <div className="absolute inset-0 pointer-events-auto">
        {webGLSupported ? (
          <ErrorBoundary
            fallback={
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-80 h-80 rounded-full border border-cyan-500/20 animate-pulse" />
              </div>
            }
          >
            <Suspense fallback={null}>
              <HeroCanvas isMobile={isMobile} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-96 h-96 rounded-full border border-cyan-500/20 animate-pulse" />
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md"
            style={{ background: 'rgba(0, 212, 255, 0.05)' }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Quality Lead @ Ethara AI</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-tight mb-4"
          >
            <span className="text-white block">Sarthak</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #00d4ff 0%, #38bdf8 35%, #a855f7 70%, #00d4ff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pravin Nandre
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white/90 mb-4 leading-tight tracking-tight"
          >
            "Building Intelligent Systems.{' '}
            <span className="text-cyan-400">Turning Data into Insights."</span>
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs sm:text-sm font-mono text-white/60 mb-8 tracking-wider uppercase border-l-2 border-cyan-400/80 pl-3"
          >
            Computer Engineer | AI &amp; ML | Data Analytics | Software Development
          </motion.p>

          {/* Two primary action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary font-display group cursor-pointer shadow-glow-blue"
            >
              <span>Explore My Work</span>
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download="Sarthak_Pravin_Nandre_Resume.pdf"
              className="btn-secondary font-display group cursor-pointer"
            >
              <Download size={15} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Secondary social links: LinkedIn, GitHub, Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-6 pt-2 border-t border-white/10"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60 hover:text-cyan-400 transition-colors"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
