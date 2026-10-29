import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import { education } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function EducationSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-3 block">Academic Foundation</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
            Formal <span className="gradient-text-blue">Education</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Rigorous engineering coursework with continuous top-tier academic standing and research contributions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl rounded-3xl p-8 sm:p-10 overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-[#0c0d1a] to-[#0e1222]"
          style={{
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.08)',
          }}
        >
          {/* Top accent light */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #00d4ff)' }}
          />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
              }}
            >
              <GraduationCap size={32} className="text-cyan-400" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  {education.degree}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 w-fit">
                  <Award size={13} /> CGPA: {education.cgpa} / 10
                </span>
              </div>

              <p className="text-base text-white/80 font-medium mb-4">
                {education.institution}
              </p>

              <div className="flex flex-wrap gap-5 text-xs font-mono text-white/50 mb-6 pb-6 border-b border-white/5">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-cyan-400" />
                  {education.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-cyan-400" />
                  {education.period}
                </span>
                <span className="text-white/40">
                  Affiliated: {education.university}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
