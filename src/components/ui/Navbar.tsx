import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, UserCheck } from 'lucide-react'
import RecruiterModal from './RecruiterModal'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Notes', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [recruiterOpen, setRecruiterOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((l) => l.href.slice(1))
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec)
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(sec)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080810]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
              >
                <span className="text-black font-black text-sm font-display">S</span>
              </div>
              <span className="font-display font-bold text-white text-sm tracking-wide hidden sm:block group-hover:text-cyan-300 transition-colors">
                Sarthak Nandre
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive ? 'text-cyan-300' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Recruiter Glance Button */}
              <button
                onClick={() => setRecruiterOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all cursor-pointer"
              >
                <UserCheck size={13} />
                <span>Recruiter View</span>
              </button>

              {/* Resume download */}
              <a
                href="/resume.pdf"
                download="Sarthak_Pravin_Nandre_Resume.pdf"
                className="hidden xs:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,212,255,0.15)]"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              {/* Mobile Hamburger toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[#080812]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    setRecruiterOpen(true)
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono border border-purple-500/40 text-purple-300 bg-purple-500/10"
                >
                  <UserCheck size={14} />
                  <span>Open Recruiter Summary</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Sarthak_Pravin_Nandre_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-500 text-black shadow-glow-blue"
                >
                  <Download size={14} />
                  <span>Download Full Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recruiter Modal */}
      <AnimatePresence>
        {recruiterOpen && <RecruiterModal onClose={() => setRecruiterOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
