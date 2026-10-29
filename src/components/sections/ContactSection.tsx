import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { personalInfo } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validate(data: FormData): Errors {
  const errs: Errors = {}
  if (!data.name.trim()) errs.name = 'Name is required'
  if (!data.email.trim()) errs.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Enter a valid email'
  if (!data.subject.trim()) errs.subject = 'Subject is required'
  if (!data.message.trim()) errs.message = 'Message is required'
  else if (data.message.length < 15) errs.message = 'Message is too short (min 15 characters)'
  return errs
}

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState<FormState>('idle')
  const [data, setData] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setFormState('submitting')
    // Simulated submission with accurate feedback
    await new Promise(r => setTimeout(r, 1200))
    setFormState('success')
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 text-sm text-white rounded-xl bg-white/[0.03] border transition-all duration-200 outline-none focus:ring-1 font-sans placeholder-white/20 ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
        : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20 hover:border-white/20'
    }`

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.03) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 inline-flex">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Have an interesting{' '}
            <span className="gradient-text-blue">problem to solve?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm interested in opportunities across AI engineering, software development, machine learning, and data engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left contact card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <h3 className="font-display font-semibold text-lg text-white mb-2">Direct Contact</h3>
              <p className="text-xs text-white/50 mb-6 leading-relaxed">
                Feel free to email directly or connect on professional networks.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase text-white/40">Email</p>
                    <p className="text-sm font-medium text-white/80 truncate group-hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase text-white/40">LinkedIn</p>
                    <p className="text-sm font-medium text-white/80 truncate group-hover:text-cyan-300 transition-colors">
                      in/sarthak-nandre
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <GithubIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase text-white/40">GitHub</p>
                    <p className="text-sm font-medium text-white/80 truncate group-hover:text-cyan-300 transition-colors">
                      github.com/sarthak-nandre
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-cyan-500/20 bg-cyan-950/20">
              <p className="text-xs text-cyan-200 leading-relaxed font-mono">
                <span className="text-cyan-400 font-bold">● Location:</span> Nashik, Maharashtra, India<br />
                <span className="text-cyan-400 font-bold">● Availability:</span> Open for Full-Time Roles
              </p>
            </div>
          </motion.div>

          {/* Right contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-7 border border-white/10">
              {formState === 'success' ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Message Received</h3>
                  <p className="text-white/60 text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you for reaching out, {data.name}! You can also email directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 underline underline-offset-4">
                      {personalInfo.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormState('idle')
                      setData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="btn-secondary text-xs"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/50 mb-1.5 uppercase">Name</label>
                      <input
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/50 mb-1.5 uppercase">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5 uppercase">Subject</label>
                    <input
                      name="subject"
                      value={data.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration"
                      className={inputClass('subject')}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5 uppercase">Message</label>
                    <textarea
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                      placeholder="Describe your project, team, or opportunity..."
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full justify-center text-sm cursor-pointer"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-black" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
