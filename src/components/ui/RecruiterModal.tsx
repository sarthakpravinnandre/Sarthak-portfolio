import { motion } from 'framer-motion'
import { X, Download, Mail, ExternalLink, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react'
import { personalInfo, experiences } from '../../data/portfolio'

export default function RecruiterModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.93, y: 15, opacity: 0 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/40 bg-[#0d0e1b] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-white/50 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-cyan-400/40 flex-shrink-0">
            <img
              src="/images/profile.jpg"
              alt="Sarthak Nandre"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                Executive Recruiter Brief
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-cyan-400 font-mono">
              Quality Lead · AI Engineer · Aspiring Software &amp; Data Engineer
            </p>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-center">
            <GraduationCap size={16} className="mx-auto text-cyan-400 mb-1" />
            <div className="font-bold text-white text-lg">8.9 / 10</div>
            <div className="text-[10px] font-mono text-white/40 uppercase">BE Comp Engg</div>
          </div>
          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-center">
            <Briefcase size={16} className="mx-auto text-purple-400 mb-1" />
            <div className="font-bold text-white text-lg">Quality Lead</div>
            <div className="text-[10px] font-mono text-white/40 uppercase">Ethara AI</div>
          </div>
          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-center">
            <Award size={16} className="mx-auto text-cyan-400 mb-1" />
            <div className="font-bold text-white text-lg">SIH 2025</div>
            <div className="text-[10px] font-mono text-white/40 uppercase">Grand Finalist</div>
          </div>
        </div>

        {/* Summary points */}
        <div className="space-y-3 mb-6 text-xs text-white/70 font-sans">
          <div className="flex items-start gap-2">
            <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Target Roles:</strong> AI Engineer, Machine Learning Engineer, Software Development Engineer, Data Engineer.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Primary Stack:</strong> Python, C++, TensorFlow, scikit-learn, FastAPI, React.js, Pandas, NumPy, Power BI, SQL, Git, Linux.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Track Record:</strong> 4 industry positions, 7+ hackathon finals (Smart India Hackathon 2025, NASA Space Apps 2024), research paper filed.
            </span>
          </div>
        </div>

        {/* Timeline Quick view */}
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] mb-6">
          <h4 className="text-xs font-mono font-bold uppercase text-white/50 mb-2">Experience Summary</h4>
          <div className="space-y-2 text-xs">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex justify-between items-center text-white/70">
                <span className="font-semibold text-white">{exp.role} <span className="font-normal text-white/40">@ {exp.company}</span></span>
                <span className="font-mono text-[11px] text-white/40">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action triggers */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
          <a
            href="/resume.pdf"
            download="Sarthak_Pravin_Nandre_Resume.pdf"
            className="btn-primary flex-1 justify-center text-xs font-mono"
          >
            <Download size={14} />
            <span>Download Full Resume (PDF)</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-secondary flex-1 justify-center text-xs font-mono"
          >
            <Mail size={14} className="text-cyan-400" />
            <span>Email Directly</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs font-mono"
          >
            <ExternalLink size={14} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
