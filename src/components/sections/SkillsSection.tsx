import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { skillCategories } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute top-1/2 right-0 w-[550px] h-[450px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Technical Capabilities</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
            Skills &amp; <span className="gradient-text-blue">Core Competencies</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Categorized technical stack across AI/ML engineering, high-throughput data processing, web frameworks, and production tools.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const isHovered = activeCategory === cat.id
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300 group border"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${cat.color}10, rgba(14,14,28,0.95))`
                    : 'rgba(255,255,255,0.02)',
                  borderColor: isHovered ? `${cat.color}40` : 'rgba(255,255,255,0.07)',
                  boxShadow: isHovered ? `0 10px 40px ${cat.color}15` : undefined,
                }}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-mono font-bold flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-snug">
                      {cat.label}
                    </h3>
                    <p className="text-[11px] text-white/40 font-mono">
                      {cat.skills.length} Specialized Tools
                    </p>
                  </div>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5"
                      style={{
                        background: isHovered ? `${cat.color}12` : 'rgba(255,255,255,0.03)',
                        borderColor: isHovered ? `${cat.color}30` : 'rgba(255,255,255,0.06)',
                        color: isHovered ? cat.color : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      <Check size={11} className={isHovered ? 'opacity-100' : 'opacity-40'} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer verification note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-white/50"
        >
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles size={14} />
            <span>Categorized by applied operational proficiency — zero synthetic ratings.</span>
          </div>
          <span>Updated for 2026</span>
        </motion.div>
      </div>
    </section>
  )
}
