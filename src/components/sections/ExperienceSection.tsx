import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, Briefcase, CheckCircle2 } from 'lucide-react'
import { experiences } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>('ethara-ai')
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-3 block">Career Progression</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
            Work <span className="gradient-text-blue">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Leading AI quality assurance, automated error-analysis pipelines, computer vision research, and enterprise data analytics.
          </p>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Vertical Glowing Progress Line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 timeline-line hidden sm:block opacity-60" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isExpanded = expandedId === exp.id
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline Node Ping */}
                  <div
                    className="absolute left-[19px] top-7 w-3.5 h-3.5 rounded-full border-2 border-[#080810] z-10 hidden sm:block transition-all duration-300"
                    style={{
                      backgroundColor: exp.color,
                      boxShadow: isExpanded ? `0 0 16px ${exp.color}` : `0 0 6px ${exp.color}80`,
                    }}
                  />

                  {/* Experience Card */}
                  <div
                    className="glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border"
                    style={{
                      borderColor: isExpanded ? `${exp.color}45` : 'rgba(255,255,255,0.07)',
                      boxShadow: isExpanded ? `0 10px 40px ${exp.color}15` : undefined,
                      background: isExpanded
                        ? `linear-gradient(135deg, ${exp.color}08, rgba(14,14,28,0.95))`
                        : 'rgba(255,255,255,0.02)',
                    }}
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  >
                    {/* Header */}
                    <div className="p-6 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full uppercase"
                            style={{
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}35`,
                              color: exp.color,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-4 flex-wrap text-sm">
                          <span className="flex items-center gap-1.5 font-semibold" style={{ color: exp.color }}>
                            <Briefcase size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                            <Calendar size={13} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="text-white/40 mt-1 flex-shrink-0 p-1.5 rounded-lg bg-white/5">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {/* Expandable Body */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-white/70 text-sm mb-4 leading-relaxed font-sans">
                          {exp.description}
                        </p>

                        {/* Bulleted contributions */}
                        <ul className="space-y-2.5 mb-5">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/60">
                              <CheckCircle2
                                size={14}
                                className="mt-0.5 flex-shrink-0"
                                style={{ color: exp.color }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills applied */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-mono px-2.5 py-1 rounded-md"
                              style={{
                                background: `${exp.color}10`,
                                border: `1px solid ${exp.color}25`,
                                color: exp.color,
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
