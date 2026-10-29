import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'
import AboutOrb from '../3d/AboutOrb'
import { useInView } from '../../hooks/useInView'
import ErrorBoundary from '../ui/ErrorBoundary'

const stats = [
  { label: 'Academic CGPA', value: '8.9', unit: '/10', icon: GraduationCap },
  { label: 'Hackathons', value: '7+', unit: 'Finalist', icon: Award },
  { label: 'Industry Roles', value: '4', unit: 'Positions', icon: Briefcase },
  { label: 'Model Quality', value: '98%+', unit: 'Metrics', icon: CheckCircle },
]

export default function AboutSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-3 block">Engineering Profile</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Architecting <span className="gradient-text-blue">Trustworthy AI</span> &amp; Precision Data Systems
              </h2>
            </motion.div>

            {/* Mobile / Tablet Profile Photo preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-4 mb-8 lg:hidden p-4 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-cyan-500/30 flex-shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Sarthak Pravin Nandre"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base">{personalInfo.name}</p>
                <p className="text-xs text-cyan-400 font-mono">Quality Lead @ Ethara AI</p>
                <p className="text-xs text-white/50">PVG's COET &amp; SSDIOM, Nashik (CGPA 8.9)</p>
              </div>
            </motion.div>

            {/* Narrative text */}
            <div className="space-y-4 mb-8 text-white/70 text-sm sm:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I am a Computer Engineering graduate from <strong className="text-white">Pune Vidyarthi Griha's College of Engineering and SSDIOM, Nashik</strong>, graduating with a reported CGPA of <strong className="text-cyan-400">8.9</strong>. I currently serve as <strong className="text-white">Quality Lead at Ethara AI</strong>, driving machine learning model validation, dataset consistency analysis, and automated error-detection architectures.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                My technical discipline bridges machine learning, data engineering, and scalable software design. In day-to-day operations, I deploy Python, Pandas, and NumPy workflows to validate training corpora, evaluate model behavior for consistency, and eliminate recurring data anomalies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Beyond production quality checks, my work spans deep generative architectural modeling (with a formal research paper filed on generative design with GANs), real-time YOLO crop disease identification, and automated BI dashboards reducing manual validation cycles by 50%.
              </motion.p>
            </div>

            {/* Career mission quote block */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="p-4 rounded-xl border-l-2 border-cyan-400 bg-cyan-950/20 mb-8"
            >
              <p className="text-xs sm:text-sm font-mono text-cyan-200/90 italic">
                "{personalInfo.goal}"
              </p>
            </motion.div>

            {/* Key stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5"
            >
              {stats.map((s, idx) => {
                const Icon = s.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 transition-all text-center group"
                  >
                    <Icon size={18} className="mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div className="font-display font-bold text-2xl text-white">
                      {s.value}
                    </div>
                    <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right Column: High-Res Profile Card + 3D Interactive Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex flex-col items-center gap-6"
          >
            {/* Holographic Styled Profile Portrait */}
            <div className="relative group">
              <div
                className="w-72 h-[380px] rounded-3xl overflow-hidden border border-cyan-500/30 relative"
                style={{
                  boxShadow: '0 0 50px rgba(0, 212, 255, 0.15), 0 0 100px rgba(124, 58, 237, 0.1)',
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Sarthak Pravin Nandre"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cyber gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 50%, rgba(8,8,16,0.85) 90%, #080810 100%)',
                  }}
                />

                {/* Micro info on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-lg text-white">Sarthak P. Nandre</p>
                  <p className="text-xs font-mono text-cyan-400">Quality Lead · AI Systems</p>
                  <p className="text-[11px] text-white/60">B.E. Computer Engineering (8.9 CGPA)</p>
                </div>
              </div>

              {/* Decorative back framing */}
              <div
                className="absolute -inset-3 rounded-3xl -z-10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
                  filter: 'blur(16px)',
                }}
              />
            </div>

            {/* Interactive 3D Orbiting Gyroscope Widget */}
            <div className="w-52 h-44 relative">
              <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-xs text-cyan-400/40">3D Gyroscope</div>}>
                <Canvas dpr={[1, 1.5]} gl={{ alpha: true }}>
                  <Suspense fallback={null}>
                    <AboutOrb />
                  </Suspense>
                </Canvas>
              </ErrorBoundary>
              <span className="absolute bottom-1 inset-x-0 text-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Interactive AI Gyroscope
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
