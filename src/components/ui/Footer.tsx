import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative py-12 border-t border-white/[0.06] bg-[#07070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-glow-blue"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
            >
              <span className="text-black font-black text-sm font-display">S</span>
            </div>
            <div>
              <p className="text-sm font-display font-bold text-white tracking-wide">Sarthak Pravin Nandre</p>
              <p className="text-xs text-white/40 font-mono">Quality Lead · AI &amp; Software Engineering</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/40 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/30 font-mono">
              © {new Date().getFullYear()} Sarthak Pravin Nandre
            </span>
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-cyan-300 hover:border-cyan-500/40 transition-all border border-white/10 bg-white/[0.02]"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
