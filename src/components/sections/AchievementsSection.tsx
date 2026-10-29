import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, X, ZoomIn, Award, MapPin, Calendar, CheckCircle2, FileText, ExternalLink } from 'lucide-react'
import { achievements } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

interface PhotoItem {
  src: string
  title: string
  event: string
  caption: string
  tag: string
}

export default function AchievementsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<'all' | 'sih' | 'pvg'>('all')

  const sihPhotos: PhotoItem[] = [
    {
      src: '/images/sih-award.jpg',
      title: 'Grand Finale Stage Ceremony',
      event: 'Smart India Hackathon 2025 (Software Edition)',
      caption: 'Smart India Hackathon 2025 Grand Finale felicitation ceremony on stage with dignitaries, certificates, and the team at Chennai nodal center.',
      tag: 'SIH 2025 Grand Finale',
    },
    {
      src: '/images/hackathon-work.jpg',
      title: 'SIH Hack Arena & Coding Session',
      event: 'Smart India Hackathon 2025 (Software Edition)',
      caption: 'Continuous 36-hour intense development, model tuning, and engineering workflow at St. Joseph’s College of Engineering hack arena.',
      tag: 'SIH 2025 Hack Arena',
    },
    {
      src: '/images/sih-venue.jpg',
      title: 'Nodal Center Arena, Chennai',
      event: 'Smart India Hackathon 2025 (Software Edition)',
      caption: 'Official Smart India Hackathon nodal center venue at Jeppiaar / St. Joseph’s Engineering College, Semmancheri, Chennai.',
      tag: 'SIH 2025 Nodal Center',
    },
  ]

  const pvgPhotos: PhotoItem[] = [
    {
      src: '/images/pvg-hackhub-stage.jpg',
      title: 'Prize Distribution Ceremony',
      event: "PVG's HackHub 2025 (National 24hrs Hackathon)",
      caption: 'Receiving the winning cheque on stage with dignitaries and faculty at PVG’s HackHub National Level 24-Hour Hackathon.',
      tag: 'PVG HackHub Prize',
    },
    {
      src: '/images/pvg-hackhub-team.jpg',
      title: 'Team Innovators Celebration',
      event: "PVG's HackHub 2025 (National 24hrs Hackathon)",
      caption: 'Team Innovators celebrating with the winning prize cheque, event mascot, and trophies at PVG COET & SSDIOM, Nashik.',
      tag: 'Team Innovators Winner',
    },
  ]

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute bottom-10 left-0 w-[550px] h-[450px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label mb-3 block">Milestones &amp; Honors</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
              Hackathon Records &amp; <span className="gradient-text-blue">Achievements</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
              Documented on-ground achievements across national hackathons, global challenges, and university innovation events.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 p-1.5 rounded-xl border border-white/10 bg-white/[0.02]">
            <button
              onClick={() => setSelectedEvent('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedEvent === 'all'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              All Events ({sihPhotos.length + pvgPhotos.length})
            </button>
            <button
              onClick={() => setSelectedEvent('sih')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedEvent === 'sih'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Smart India Hackathon
            </button>
            <button
              onClick={() => setSelectedEvent('pvg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedEvent === 'pvg'
                  ? 'bg-emerald-400 text-black font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              PVG's HackHub
            </button>
          </div>
        </motion.div>

        {/* SECTION 1: SMART INDIA HACKATHON 2025 */}
        {(selectedEvent === 'all' || selectedEvent === 'sih') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 p-6 sm:p-8 rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-950/15 via-[#0c0d1c] to-[#080812]"
            style={{ boxShadow: '0 0 50px rgba(0, 212, 255, 0.06)' }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                  <Trophy size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold uppercase">
                      National Level
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                      Ministry of Education Innovation Cell
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Smart India Hackathon (SIH) 2025 — Software Edition
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-1 flex items-center gap-2">
                    <Award size={13} /> Grand Finale National Finalist · Nodal Center: St. Joseph’s / Jeppiaar, Chennai
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-end gap-1 text-xs font-mono text-white/50">
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-cyan-400" /> 2025</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-cyan-400" /> Chennai, India</span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              Represented Pune Vidyarthi Griha's College of Engineering and SSDIOM, Nashik at the national level in Smart India Hackathon 2025 Software Edition. Selected among top engineering teams across India to solve complex challenges during continuous 36-hour collaborative prototyping evaluated by national juries.
            </p>

            {/* SIH Photo Gallery */}
            <div className="grid sm:grid-cols-3 gap-4">
              {sihPhotos.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActivePhoto(img)}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] border border-cyan-500/20 bg-black/40 cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:shadow-glow-blue"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {img.title}
                      </span>
                      <ZoomIn size={13} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-white/60 line-clamp-1 font-mono">
                      {img.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SECTION 2: PVG'S HACKHUB 2025 */}
        {(selectedEvent === 'all' || selectedEvent === 'pvg') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/15 via-[#0c0d1c] to-[#080812]"
            style={{ boxShadow: '0 0 50px rgba(16, 185, 129, 0.06)' }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold uppercase">
                      Prize Winner · Team Innovators
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                      National Level 24hrs Hackathon
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    PVG's HackHub 2025 — National Level 24hrs Hackathon
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300 font-mono mt-1 flex items-center gap-2">
                    <CheckCircle2 size={13} /> Won Cash Prize (₹11,000) with Team Innovators · Dept. of Information Technology
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-end gap-1 text-xs font-mono text-white/50">
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-emerald-400" /> 2025</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-emerald-400" /> Nashik, India</span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              Competed at PVG’s HackHub National Level 24-Hour Hackathon organized by the Department of Information Technology at Pune Vidyarthi Griha's College of Engineering and SSDIOM, Nashik. Built and pitched an innovative software product under 24-hour sprint conditions, earning an official cash prize award of ₹11,000 with Team Innovators.
            </p>

            {/* PVG HackHub Photo Gallery */}
            <div className="grid sm:grid-cols-2 gap-4">
              {pvgPhotos.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActivePhoto(img)}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] border border-emerald-500/25 bg-black/40 cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                        {img.title}
                      </span>
                      <ZoomIn size={13} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-white/60 line-clamp-1 font-mono">
                      {img.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SECTION 3: OTHER NOTABLE ACHIEVEMENTS & PAPERS */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-4 flex items-center gap-2">
            <span>Additional Honors, Research &amp; Track Record</span>
          </h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.slice(2).map((ach, i) => {
              const isResearch = ach.id === 'research'
              return (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className={`relative rounded-2xl p-6 border transition-all duration-300 group flex flex-col justify-between ${
                    isResearch
                      ? 'sm:col-span-2 lg:col-span-1 border-purple-500/40 bg-gradient-to-br from-purple-950/20 via-[#0d0e1c] to-[#080812] shadow-[0_0_30px_rgba(168,85,247,0.1)]'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  {isResearch && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: 'linear-gradient(90deg, #a855f7, #00d4ff)' }}
                    />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: `${ach.color}15`,
                          color: ach.color,
                          border: `1px solid ${ach.color}30`,
                        }}
                      >
                        {ach.year}
                      </span>
                      <span className="text-[10px] font-mono text-white/40 px-2 py-0.5 rounded-full bg-white/5">
                        {ach.tag}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{ach.icon}</span>
                      <div>
                        <h4 className="font-display font-bold text-base text-white leading-tight">
                          {ach.title}
                        </h4>
                        <p className="text-xs font-mono mt-1 font-semibold" style={{ color: ach.color }}>
                          {ach.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-white/60 leading-relaxed font-sans mb-4">
                      {ach.description}
                    </p>
                  </div>

                  {/* Document Action Buttons for Research Paper Card */}
                  {isResearch && (ach as any).paperUrl && (
                    <div className="pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row gap-2.5">
                      <a
                        href={(ach as any).paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <FileText size={13} strokeWidth={2.5} />
                        <span>View Research Paper</span>
                        <ExternalLink size={11} className="opacity-70" />
                      </a>

                      <a
                        href={(ach as any).certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold border border-purple-400/50 text-purple-200 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Award size={13} className="text-purple-300" />
                        <span>View Certificate</span>
                        <ExternalLink size={11} className="opacity-70" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0b0c16]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              <div className="p-5 border-t border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {activePhoto.event}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-white/60 font-mono leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
