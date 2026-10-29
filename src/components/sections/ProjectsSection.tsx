import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ArrowRight, Eye, Code, Layers, Sparkles } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { projects } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import ArchitecturalViewer from '../3d/ArchitecturalViewer'
import DataPipelineDemo from '../ui/DataPipelineDemo'
import CropVisionDemo from '../ui/CropVisionDemo'

// 3D tilt card with prominent Live Demo CTA
function ProjectCard({ project, onOpen }: { project: typeof projects[0]; onOpen: () => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10
    setTilt({ x, y })
  }

  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden group flex flex-col justify-between h-full border transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        transform: hovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        boxShadow: hovered
          ? `0 20px 50px ${project.color}25, 0 0 0 1px ${project.color}45`
          : '0 4px 24px rgba(0,0,0,0.5)',
        background: `linear-gradient(135deg, ${project.color}0c 0%, rgba(13,13,26,0.95) 45%, ${project.accentColor}08 100%)`,
        borderColor: hovered ? `${project.color}50` : 'rgba(255,255,255,0.08)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setTilt({ x: 0, y: 0 })
      }}
    >
      {/* Top accent light glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      <div className="relative p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10">
              {project.icon}
            </span>
            <span
              className="text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}35`,
                color: project.color,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-white leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-sans">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md text-white/60 border border-white/5 bg-white/[0.03]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Footer: DIRECT LIVE DEMO BUTTON on Card */}
          <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:scale-105 active:scale-95"
                  title={`Open Live ${project.shortTitle}`}
                >
                  <ExternalLink size={13} strokeWidth={2.5} />
                  <span>Live Demo ↗</span>
                </a>
              ) : (
                <button
                  onClick={onOpen}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold border border-purple-500/40 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-all cursor-pointer"
                >
                  <Sparkles size={13} />
                  <span>3D CAD Model</span>
                </button>
              )}

              <button
                onClick={onOpen}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-mono text-white/60 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <span>Case Study</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-white/40 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
              title="GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Case study detail modal
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(5, 5, 12, 0.94)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #0c0d1c, #0e1124)',
          border: `1px solid ${project.color}35`,
          boxShadow: `0 0 80px ${project.color}25`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent bar */}
        <div
          className="h-[3px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, ${project.accentColor}, transparent)`,
          }}
        />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-3 rounded-2xl bg-white/5 border border-white/10">
                {project.icon}
              </span>
              <div>
                <p className="text-xs font-mono tracking-wider uppercase mb-1" style={{ color: project.color }}>
                  {project.category}
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                  {project.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Interactive Live Demonstrator embedded inside the case study */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-2">
                <Layers size={14} className="text-cyan-400" /> Interactive Simulation &amp; Preview
              </span>
              <span className="text-[11px] font-mono text-cyan-400">Production Mode</span>
            </div>

            {project.id === 'data-analyzer' && <DataPipelineDemo />}
            {project.id === 'arch-design' && <ArchitecturalViewer />}
            {project.id === 'crop-disease' && <CropVisionDemo />}
          </div>

          {/* Detailed Problem / Approach / Results Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-rose-400">
                Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-cyan-400">
                Engineering Approach
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{project.approach}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-emerald-400">
                Verified Outcome
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider mb-3 text-white/50">
              Tech Stack &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg border"
                  style={{
                    background: `${project.color}10`,
                    borderColor: `${project.color}30`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs font-mono cursor-pointer"
              >
                <ExternalLink size={14} />
                <span>Launch Live System</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs font-mono cursor-pointer"
            >
              <GithubIcon size={14} />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [quickViewer, setQuickViewer] = useState<'architecture' | 'data' | null>(null)
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, rgba(124,58,237,0.02) 60%, transparent 80%)',
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
            <span className="section-label mb-3 block">Engineering Showcase</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
              Featured <span className="gradient-text-blue">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
              Real-world systems across AI evaluation, generative architectural modeling, computer vision, and scalable data pipelines with direct live demo access.
            </p>
          </div>

          {/* Quick interactive feature switcher */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setQuickViewer(quickViewer === 'architecture' ? null : 'architecture')}
              className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                quickViewer === 'architecture'
                  ? 'bg-purple-600/20 border-purple-400 text-purple-200'
                  : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
              }`}
            >
              <Eye size={13} className="text-purple-400" />
              <span>3D Building Viewer</span>
            </button>
            <button
              onClick={() => setQuickViewer(quickViewer === 'data' ? null : 'data')}
              className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                quickViewer === 'data'
                  ? 'bg-cyan-600/20 border-cyan-400 text-cyan-200'
                  : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
              }`}
            >
              <Code size={13} className="text-cyan-400" />
              <span>Data Pipeline Engine</span>
            </button>
          </div>
        </motion.div>

        {/* Quick inline 3D / Data viewer tray if toggled */}
        <AnimatePresence>
          {quickViewer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="p-6 rounded-3xl border border-cyan-500/30 bg-black/60 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                    {quickViewer === 'architecture'
                      ? 'Interactive 3D Generative Architectural Model'
                      : 'Interactive Automated Data Cleaner & Pipeline Demo'}
                  </span>
                  <button
                    onClick={() => setQuickViewer(null)}
                    className="text-xs font-mono text-white/50 hover:text-white cursor-pointer"
                  >
                    Close viewer [X]
                  </button>
                </div>
                {quickViewer === 'architecture' ? <ArchitecturalViewer /> : <DataPipelineDemo />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="h-full"
            >
              <ProjectCard project={proj} onOpen={() => setSelectedProject(proj)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
