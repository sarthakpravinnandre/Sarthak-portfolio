import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, X, Clock } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const articles = [
  {
    id: 'ai-validation',
    title: 'Automating Machine Learning Quality Checks: Detecting Latent Drift in Model Outputs',
    category: 'AI Quality Assurance',
    date: 'March 2026',
    readTime: '4 min read',
    excerpt:
      'How to build deterministic Python workflows that continuously validate dataset integrity, track hallucination patterns, and verify output distributions in production ML systems.',
    content: `
### Background
At Ethara AI, evaluating model performance goes beyond conventional offline loss functions. When datasets scale to tens of thousands of dynamic records, undetected schema shifts, token-level hallucinations, and feature-distribution drift can compromise downstream reliability.

### The Automated QA Architecture
To mitigate this, we engineered automated Python checks leveraging Pandas and NumPy vectorization:
1. **Schema & Nullity Invariant Gates**: Verifying strict null thresholds before inference runs.
2. **Confidence-Entropy Dispersion**: Flagging predictions where output probability distribution exhibits erratic entropy spikes.
3. **Anomaly Clustering**: Aggregating recurring false positives into vector clusters to pinpoint root cause in raw training slices.

### Results
Standardizing automated validation workflows reduced post-deployment error detection times by over 40%, ensuring models deployed to production maintain verified consistency.
    `,
  },
  {
    id: 'generative-arch',
    title: 'From 2D Floor Plans to 3D Generative CAD: Synthesizing Architecture with GANs',
    category: 'Deep Learning & Architecture',
    date: 'January 2026',
    readTime: '6 min read',
    excerpt:
      'Synthesizing architectural floor plans using Generative Adversarial Networks and bridging the output into parametric 3D CAD geometries.',
    content: `
### The Spatial Synthesis Challenge
Traditional CAD workflows require painstaking manual drawing for early-stage conceptual exploration. Our research investigated whether generative models could learn architectural topology: circulation zones, load-bearing grid constraints, and daylight orientation.

### Deep Learning Pipeline
- **Generator**: A modified U-Net conditioning on boundary polygons and total square-meter requirements.
- **Discriminator**: Multi-scale patch GAN evaluating room connectivity, egress compliance, and structural spacing.
- **Parametric Extrusion**: Vector contours are parsed and converted into 3D meshes using programmatic extrusion algorithms.

### Academic Filing
This work led to a formal research paper filing on AI-assisted architectural synthesis, exploring how generative AI can serve as a collaborative design partner for engineers.
    `,
  },
  {
    id: 'data-engineering',
    title: 'High-Throughput Data Preprocessing: Lessons from Edge Loggers and Power BI',
    category: 'Data Engineering',
    date: 'November 2025',
    readTime: '5 min read',
    excerpt:
      'Techniques for streamlining ETL pipelines, handling outlier capped windows with DAX/Python, and automating report generation.',
    content: `
### Data Quality in Practice
During my internships at Celebal Technologies and Devspace IT Solutions, the most frequent bottleneck wasn't model complexity—it was data hygiene.

### Three Rules for Reliable Pipelines
1. **Idempotent Ingestion**: Ensure deduplication rules can run repeatedly on overlapping streaming windows without record corruption.
2. **Winsorization over Blind Dropping**: Extreme outliers should be capped to statistical thresholds (IQR or Z-score > 3σ) rather than outright deleted, preserving variance.
3. **Automated Validation Scripts**: Replacing manual spreadsheet checks with automated DAX and Power Query scripts at Celebal slashed validation overhead by 50%.
    `,
  },
]

export default function BlogSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  return (
    <section id="blog" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-3 block">Insights &amp; Publications</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-3">
            Technical <span className="gradient-text-blue">Notes &amp; Articles</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Notes on production AI validation, computer vision architectures, and real-world data engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((art, i) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer rounded-2xl p-6 border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-950/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-3">
                  <span className="uppercase tracking-wider">{art.category}</span>
                  <span className="text-white/40 flex items-center gap-1">
                    <Clock size={11} /> {art.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-sans">
                  {art.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono">
                <span className="text-white/40 flex items-center gap-1.5">
                  <Calendar size={12} /> {art.date}
                </span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Note <ArrowRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#0d0e1b] p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-white/50 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
                <BookOpen size={14} />
                <span className="uppercase">{selectedArticle.category}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/40">{selectedArticle.date}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="prose prose-invert max-w-none text-white/70 text-sm leading-relaxed space-y-4 font-sans">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={idx} className="font-display font-bold text-base text-cyan-300 pt-3">
                        {paragraph.replace('### ', '')}
                      </h4>
                    )
                  }
                  return <p key={idx}>{paragraph}</p>
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                <span>Author: Sarthak Pravin Nandre</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-cyan-400 hover:underline"
                >
                  Close article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
